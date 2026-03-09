from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@router.post("/")
async def send_contact_message(form_data: ContactForm):
    # Logic to send email or store the message
    print(f"Received message from {form_data.name}: {form_data.message}")
    return {"status": "success", "message": "Message received!"}
