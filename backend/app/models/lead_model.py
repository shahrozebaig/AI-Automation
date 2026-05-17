"""
This project now uses MongoDB via `pymongo`.
Keep this module as a placeholder for any model-related helpers.
"""
def to_document(lead_schema, report_path: str | None = None, status: str = "PENDING"):
    """Convert a LeadSchema (pydantic) into a MongoDB document dict."""
    doc = {
        "name": lead_schema.name,
        "email": str(lead_schema.email),
        "company": lead_schema.company,
        "website": lead_schema.website,
        "report_path": report_path,
        "status": status,
    }
    return doc