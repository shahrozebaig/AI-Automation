from sqlalchemy import Column, Integer, String
from app.database import Base
class Lead(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    company = Column(String)
    website = Column(String)
    report_path = Column(String)
    status = Column(String)