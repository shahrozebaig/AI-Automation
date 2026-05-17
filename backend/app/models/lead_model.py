from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime
)
from datetime import datetime
from app.database import Base
class Lead(Base):
    __tablename__ = "leads"
    id = Column(
        Integer,
        primary_key=True,
        index=True
    )
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    company = Column(String, nullable=False)
    website = Column(String, nullable=False)
    report_path = Column(String)
    status = Column(String)
    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )