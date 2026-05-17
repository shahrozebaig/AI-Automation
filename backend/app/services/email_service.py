import resend
import base64
from app.config import (
    RESEND_API_KEY,
    EMAIL_FROM
)
resend.api_key = RESEND_API_KEY
def send_email(
    to_email,
    company_name,
    pdf_path
):
    with open(pdf_path, "rb") as file:
        pdf_data = file.read()
    encoded_pdf = base64.b64encode(
        pdf_data
    ).decode("utf-8")
    params = {
        "from": EMAIL_FROM,
        "to": [to_email],
        "subject": f"{company_name} AI Audit Report",
        "html": f"""
        <h2>Your AI Audit Report is Ready</h2>
        <p>
        Thank you for your submission.
        Your personalized AI audit report is attached below.
        </p>
        """,
        "attachments": [
            {
                "filename": f"{company_name}_report.pdf",
                "content": encoded_pdf
            }
        ]
    }
    resend.Emails.send(params)