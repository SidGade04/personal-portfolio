# utils/email_sender.py

import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

def send_email(name, sender_email, message):
    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_PASSWORD")
    recipient_email = os.getenv("RECIPIENT_EMAIL")

    if not (smtp_email and smtp_password and recipient_email):
        raise ValueError("Missing SMTP config in environment variables")

    # Create the email
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New Contact Message from {name}"
    msg["From"] = smtp_email
    msg["To"] = recipient_email
    msg["Reply-To"] = sender_email  # So you can reply directly to them

    html = f"""
    <html>
      <body>
        <h2>📩 New Contact Submission</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {sender_email}</p>
        <p><strong>Message:</strong><br>{message}</p>
      </body>
    </html>
    """

    msg.attach(MIMEText(html, "html"))

    # Send the email using Gmail SMTP
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(smtp_email, smtp_password)
        server.sendmail(smtp_email, recipient_email, msg.as_string())
