from groq import Groq
from app.config import GROQ_API_KEY
from app.utils.prompts import (
    COMPANY_ANALYSIS_PROMPT
)
client = Groq(
    api_key=GROQ_API_KEY
)
def generate_company_report(
    content: str
):
    prompt = COMPANY_ANALYSIS_PROMPT.format(
        website_content=content
    )
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": """
                You are an expert AI business consultant.
                Generate a professional business audit report.
                The report must include:
                1. Company Overview
                2. Business Analysis
                3. Website Analysis
                4. SEO Improvements
                5. Marketing Recommendations
                6. AI Automation Opportunities
                7. Technical Improvements
                8. Growth Suggestions
                9. Final Conclusion
                Make the report detailed,
                professional,
                structured,
                and easy to understand.
                """
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
        max_tokens=4000
    )
    report = (
        completion
        .choices[0]
        .message.content
    )
    return report