import requests
from bs4 import BeautifulSoup
def scrape_website(url: str):
    try:
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, "html.parser")
        paragraphs = soup.find_all("p")
        content = " ".join(
            [p.get_text() for p in paragraphs]
        )
        return content[:5000]
    except Exception as e:
        return f"Scraping failed: {str(e)}"