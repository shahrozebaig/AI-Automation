# AI Lead Automation Platform

## Project Overview

AI Lead Automation Platform is an end-to-end automation system that analyzes company websites using AI and generates professional business audit reports automatically.

The platform collects company details from users, scrapes website content, generates AI-powered business insights, creates professional PDF reports, stores lead data in Google Sheets, and sends reports through automated email workflows.

The project is designed to simulate a real-world AI business automation pipeline used by modern SaaS and AI consulting platforms.

---

# Tech Stack

| Technology        | Purpose                | Why It Was Used                                         |
| ----------------- | ---------------------- | ------------------------------------------------------- |          
| Groq API          | AI Processing          | Used to generate AI-powered business audit reports      |
| Llama 3.3 70B     | Large Language Model   | Used for business analysis and report generation        |
| BeautifulSoup     | Website Scraping       | Used to extract content from company websites           |
| ReportLab         | PDF Generation         | Used to create professional PDF reports                 |
| Resend API        | Email Automation       | Used to send automated emails with PDF attachments      |
| Google Sheets API | Lead Management        | Used to store submitted lead data                       |
| OAuth2            | Google Authentication  | Used for secure Google Sheets integration               |

---

# Email Sending Limitation

```txt
Lead Processing Error: You can only send testing emails to your own email address (youremail@gmail.com). To send emails to other recipients, please verify a domain at resend.com/domains, and change the `from` address to an email using this domain.
```

## Why This Error Happens

Currently the project uses the free testing mode provided by Resend. In testing mode, Resend only allows emails to be sent to the developer’s verified email address. This restriction is added by Resend for security and spam prevention purposes.

To send emails to different users, a custom domain must be verified inside the Resend dashboard. After domain verification, emails can be sent publicly to any email address.

---

# Free Domain vs Paid Domain

| Free Domain                       | Paid Domain                     |
| --------------------------------- | ------------------------------- |
| Limited DNS access                | Full DNS control                |
| Some email records are restricted | All email records supported     |
| Difficult to verify with Resend   | Easy domain verification        |
| Limited MX and TXT support        | Complete MX and TXT support     |
| Mostly used for testing           | Suitable for production use     |
| Email delivery limitations        | Public email delivery supported |

---

# Why Free Domain Was Not Working

The free domain provider used in this project had limited DNS management access. Resend requires TXT, SPF, DKIM, and MX records for email verification, but the free domain provider did not provide complete DNS control for those records.

Because of this limitation, Resend domain verification could not be completed successfully.

For development and project demonstration purposes, the application currently works using Resend sandbox testing mode with the developer’s verified email address.

---

# Conclusion

AI Lead Automation Platform demonstrates the practical implementation of AI-powered automation workflows using modern full-stack technologies.

The project combines frontend development, backend APIs, AI integration, automation systems, PDF generation, email workflows, and cloud-based lead management into a single production-style platform.

The platform showcases how businesses can automate lead analysis, generate personalized reports, and improve operational efficiency using AI-driven systems.
