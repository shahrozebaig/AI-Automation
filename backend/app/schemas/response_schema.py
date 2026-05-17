from pydantic import BaseModel
class ResponseSchema(BaseModel):
    success: bool
    message: str
    pdf_path: str | None = None