from pydantic import BaseModel, EmailStr
class LeadSchema(BaseModel):
    name: str
    email: EmailStr
    company: str
    website: str