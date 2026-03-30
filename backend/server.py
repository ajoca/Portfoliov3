from fastapi import FastAPI, APIRouter, HTTPException, Request, UploadFile
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import mimetypes
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ValidationError
from typing import List, Tuple
import uuid
from datetime import datetime
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)

class ContactResponse(BaseModel):
    success: bool
    message: str

# Email configuration
GMAIL_USER = os.environ.get('GMAIL_USER')
GMAIL_PASSWORD = os.environ.get('GMAIL_PASSWORD')
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
CONTACT_RECEIVER = os.environ.get('CONTACT_RECEIVER', GMAIL_USER)
MAX_ATTACHMENTS = int(os.environ.get('MAX_ATTACHMENTS', 3))
MAX_ATTACHMENT_SIZE_MB = int(os.environ.get('MAX_ATTACHMENT_SIZE_MB', 10))
MAX_ATTACHMENT_SIZE_BYTES = MAX_ATTACHMENT_SIZE_MB * 1024 * 1024
ALLOWED_ATTACHMENT_EXTENSIONS = {
    ext.strip().lower()
    for ext in os.environ.get(
        'ALLOWED_ATTACHMENT_EXTENSIONS',
        '.pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.png,.webp,.gif,.zip,.rar'
    ).split(',')
    if ext.strip()
}

async def prepare_attachments(
    files: List[UploadFile],
) -> Tuple[List[dict], List[Tuple[str, bytes, str]]]:
    attachment_metadata: List[dict] = []
    attachment_payloads: List[Tuple[str, bytes, str]] = []

    non_empty_files = [f for f in files if f and getattr(f, "filename", None)]

    if len(non_empty_files) > MAX_ATTACHMENTS:
        raise HTTPException(
            status_code=400,
            detail=f"Máximo {MAX_ATTACHMENTS} archivos adjuntos permitidos.",
        )

    for attachment in non_empty_files:
        safe_filename = Path(attachment.filename).name
        extension = Path(safe_filename).suffix.lower()

        if extension not in ALLOWED_ATTACHMENT_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail=(
                    f"El archivo '{safe_filename}' no está permitido. "
                    f"Extensiones válidas: {', '.join(sorted(ALLOWED_ATTACHMENT_EXTENSIONS))}"
                ),
            )

        file_bytes = await attachment.read()
        size_bytes = len(file_bytes)

        if size_bytes > MAX_ATTACHMENT_SIZE_BYTES:
            raise HTTPException(
                status_code=400,
                detail=f"El archivo '{safe_filename}' supera el límite de {MAX_ATTACHMENT_SIZE_MB}MB.",
            )

        content_type = attachment.content_type or mimetypes.guess_type(safe_filename)[0] or "application/octet-stream"

        attachment_metadata.append(
            {
                "filename": safe_filename,
                "content_type": content_type,
                "size": size_bytes,
            }
        )
        attachment_payloads.append((safe_filename, file_bytes, content_type))

    return attachment_metadata, attachment_payloads


async def send_email(
    contact_data: ContactMessage,
    attachment_payloads: List[Tuple[str, bytes, str]] | None = None,
):
    """Send email using Gmail SMTP"""
    try:
        # Create message
        if not GMAIL_USER or not GMAIL_PASSWORD:
            logger.error("GMAIL_USER o GMAIL_PASSWORD no están configurados")
            return False

        msg = MIMEMultipart('mixed')
        msg['Subject'] = f"Nuevo mensaje de contacto de {contact_data.name}"
        msg['From'] = GMAIL_USER
        msg['To'] = CONTACT_RECEIVER
        msg['Reply-To'] = str(contact_data.email)

        # HTML email content
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
                        Nuevo Mensaje de Contacto - Portfolio
                    </h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #333;">Información del Contacto:</h3>
                        <p><strong>Nombre:</strong> {contact_data.name}</p>
                        <p><strong>Email:</strong> {contact_data.email}</p>
                    </div>
                    
                    <div style="background: #fff; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #333;">Mensaje:</h3>
                        <p style="white-space: pre-wrap;">{contact_data.message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666;">
                        <p>Este mensaje fue enviado desde tu portfolio web el {datetime.now().strftime('%d/%m/%Y a las %H:%M')}</p>
                    </div>
                </div>
            </body>
        </html>
        """

        # Plain text version
        attachment_names = [filename for filename, _, _ in (attachment_payloads or [])]
        attachments_text = "Sin adjuntos"
        if attachment_names:
            attachments_text = ", ".join(attachment_names)

        text_content = f"""
        Nuevo Mensaje de Contacto - Portfolio
        
        Información del Contacto:
        Nombre: {contact_data.name}
        Email: {contact_data.email}
        Adjuntos: {attachments_text}
        
        Mensaje:
        {contact_data.message}
        
        Este mensaje fue enviado desde tu portfolio web el {datetime.now().strftime('%d/%m/%Y a las %H:%M')}
        """

        # Create the message parts
        alternative_part = MIMEMultipart('alternative')
        text_part = MIMEText(text_content, 'plain')
        html_part = MIMEText(html_content, 'html')

        alternative_part.attach(text_part)
        alternative_part.attach(html_part)
        msg.attach(alternative_part)

        for filename, data, content_type in attachment_payloads or []:
            subtype = content_type.split('/', 1)[-1] if '/' in content_type else 'octet-stream'
            attachment_part = MIMEApplication(data, _subtype=subtype)
            attachment_part.add_header('Content-Disposition', 'attachment', filename=filename)
            msg.attach(attachment_part)

        # Send email
        await aiosmtplib.send(
            msg,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            start_tls=True,
            username=GMAIL_USER,
            password=GMAIL_PASSWORD,
        )
        
        return True
    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Portfolio API - Contact endpoint available"}

@api_router.post("/contact", response_model=ContactResponse)
async def send_contact_message(request: Request):
    """Send contact form message via email"""
    try:
        content_type = request.headers.get("content-type", "").lower()
        attachment_metadata: List[dict] = []
        attachment_payloads: List[Tuple[str, bytes, str]] = []

        if "application/json" in content_type:
            payload = await request.json()
            contact_data = ContactMessage(**payload)
        elif "multipart/form-data" in content_type:
            form_data = await request.form()
            contact_data = ContactMessage(
                name=form_data.get("name", ""),
                email=form_data.get("email", ""),
                message=form_data.get("message", ""),
            )

            raw_attachments = form_data.getlist("attachments")
            upload_attachments = [
                file
                for file in raw_attachments
                if hasattr(file, "read") and hasattr(file, "filename")
            ]
            attachment_metadata, attachment_payloads = await prepare_attachments(upload_attachments)
        else:
            raise HTTPException(
                status_code=415,
                detail="Content-Type no soportado. Usa application/json o multipart/form-data.",
            )

        # Store in database for backup
        contact_record = {
            "id": str(uuid.uuid4()),
            "name": contact_data.name,
            "email": contact_data.email,
            "message": contact_data.message,
            "attachments": attachment_metadata,
            "timestamp": datetime.utcnow(),
            "status": "pending"
        }
        
        # Send email
        email_sent = await send_email(contact_data, attachment_payloads)
        
        if email_sent:
            contact_record["status"] = "sent"
            await db.contact_messages.insert_one(contact_record)
            return ContactResponse(
                success=True, 
                message="¡Mensaje enviado correctamente! Te responderé pronto."
            )
        else:
            contact_record["status"] = "failed"
            await db.contact_messages.insert_one(contact_record)
            raise HTTPException(
                status_code=500, 
                detail="Error al enviar el mensaje. Por favor, inténtalo de nuevo."
            )
            
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=e.errors())
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Error interno del servidor. Por favor, inténtalo de nuevo."
        )

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
