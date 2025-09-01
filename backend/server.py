from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


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

async def send_email(contact_data: ContactMessage):
    """Send email using Gmail SMTP"""
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Nuevo mensaje de contacto de {contact_data.name}"
        msg['From'] = GMAIL_USER
        msg['To'] = GMAIL_USER

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
        text_content = f"""
        Nuevo Mensaje de Contacto - Portfolio
        
        Información del Contacto:
        Nombre: {contact_data.name}
        Email: {contact_data.email}
        
        Mensaje:
        {contact_data.message}
        
        Este mensaje fue enviado desde tu portfolio web el {datetime.now().strftime('%d/%m/%Y a las %H:%M')}
        """

        # Create the message parts
        text_part = MIMEText(text_content, 'plain')
        html_part = MIMEText(html_content, 'html')

        msg.attach(text_part)
        msg.attach(html_part)

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
async def send_contact_message(contact_data: ContactMessage):
    """Send contact form message via email"""
    try:
        # Store in database for backup
        contact_record = {
            "id": str(uuid.uuid4()),
            "name": contact_data.name,
            "email": contact_data.email,
            "message": contact_data.message,
            "timestamp": datetime.utcnow(),
            "status": "pending"
        }
        
        # Send email
        email_sent = await send_email(contact_data)
        
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
