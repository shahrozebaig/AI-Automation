import os
import uuid
from datetime import datetime
def generate_unique_filename(
    company_name: str
):
    unique_id = uuid.uuid4().hex[:8]
    clean_name = (
        company_name
        .lower()
        .replace(" ", "_")
    )
    return f"{clean_name}_{unique_id}.pdf"
def get_current_timestamp():
    return datetime.utcnow().strftime(
        "%Y-%m-%d %H:%M:%S"
    )
def ensure_reports_directory():
    reports_path = (
        "app/generated_reports"
    )
    os.makedirs(
        reports_path,
        exist_ok=True
    )