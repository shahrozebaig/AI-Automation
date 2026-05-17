import re
def validate_email(email: str):
    pattern = (
        r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$'
    )

    return re.match(pattern, email)
def validate_website(url: str):
    pattern = (
        r'^(https?:\\/\\/)?'
        r'([\\da-z\\.-]+)'
        r'\\.([a-z\\.]{2,6})'
        r'([\\/\\w \\.-]*)*\\/?$'
    )
    return re.match(pattern, url)
def validate_required_fields(data):
    for key, value in data.items():
        if not value:
            return False
    return True