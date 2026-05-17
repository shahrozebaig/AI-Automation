from fastapi import APIRouter
from fastapi import HTTPException
from app.schemas.lead_schema import LeadSchema
from app.services.scraper_service import (
    scrape_website
)
from app.services.ai_service import (
    generate_company_report
)
from app.services.pdf_service import (
    generate_pdf
)
from app.services.email_service import (
    send_email
)
from app.services.sheet_service import (
    log_lead_to_sheet
)
from app.database import insert_lead
from app.models.lead_model import to_document
router = APIRouter()
@router.post("/submit-lead")
def submit_lead(lead: LeadSchema):
    try:
        scraped_content = scrape_website(
            lead.website
        )
        ai_report = generate_company_report(
            scraped_content
        )
        pdf_path = generate_pdf(
            lead.company,
            ai_report
        )
        doc = to_document(lead, report_path=pdf_path, status="COMPLETED")
        inserted_id = insert_lead(doc)
        log_lead_to_sheet(
            lead.name,
            lead.email,
            lead.company,
            "COMPLETED"
        )
        send_email(
            lead.email,
            lead.company,
            pdf_path
        )
        return {
            "success": True,
            "message": "Lead Processed Successfully",
            "pdf_path": pdf_path,
            "db_id": str(inserted_id)
        }
    except Exception as e:
        print(
            "Lead Processing Error:",
            str(e)
        )
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )