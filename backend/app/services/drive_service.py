from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive
gauth = GoogleAuth()
gauth.LocalWebserverAuth()
drive = GoogleDrive(gauth)
def upload_pdf_to_drive(
    pdf_path
):
    try:
        file_drive = drive.CreateFile({
            "title": pdf_path.split("/")[-1]
        })
        file_drive.SetContentFile(
            pdf_path
        )
        file_drive.Upload()
        return file_drive["id"]
    except Exception as e:
        print(
            "Drive Upload Error:",
            str(e)
        )
        return None