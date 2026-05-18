## 1st: Full System Architecture

```mermaid
flowchart TB
    subgraph Client ["Client Layer"]
        Browser["User Browser"]
        subgraph Frontend ["React Frontend"]
            Landing["Landing Page"]
            Home["Home Page"]
            Form["Lead Form"]
            Loader["Loading Screen"]
            Success["Success Page"]
        end
        APIClient["API Client"]
    end

    subgraph Backend ["Backend Layer"]
        Server["Backend Server"]
        Router["API Router"]
        LeadEndpoint["Submit Lead Endpoint"]
    end

    subgraph Services ["Business Logic Services"]
        Scraper["Web Scraper"]
        AI["AI Report Generator"]
        PDF["PDF Generator"]
        Sheets["Google Sheets Service"]
        Email["Email Service"]
    end

    subgraph Persistence ["Data & Integrations"]
        MongoDB[("MongoDB Database")]
        Groq["Groq Cloud LLM"]
        GSheets[("Google Sheets Log")]
        Resend["Resend Email API"]
    end

    %% Interactions
    Browser --> Frontend
    Frontend --> Form
    Form --> APIClient
    APIClient -->|Submit Lead| Server
    
    Server --> Router
    Router --> LeadEndpoint

    LeadEndpoint --> Scraper
    LeadEndpoint --> AI
    LeadEndpoint --> PDF
    LeadEndpoint --> MongoDB
    LeadEndpoint --> Sheets
    LeadEndpoint --> Email

    Scraper -.->|Scrapes| Website["Target Website"]
    AI -->|Sends Content| Groq
    PDF -->|Saves PDF Report| LocalDisk["Local Disk"]
    Sheets -->|Appends Row| GSheets
    Email -->|Sends Email| Resend
```

---

## 2nd: Backend Architecture

```mermaid
flowchart TD
    ClientReq["Client Request"] --> Router["API Router"]
    
    subgraph Pipeline ["Lead Submission Pipeline"]
        Router --> Scrape["1. Scrape Website Content"]
        Router --> Analyze["2. Analyze with AI"]
        Router --> Render["3. Generate PDF Report"]
        Router --> SaveDB["4. Save to Database"]
        Router --> SaveSheets["5. Log to Google Sheets"]
        Router --> Mail["6. Send Email Report"]
        Router --> Respond["7. Send Success Response"]
    end

    Scrape --> ScraperService["Web Scraper"]
    Analyze --> AIService["AI Service"]
    Render --> PDFService["PDF Service"]
    SaveDB --> DatabaseConnector["Database Connector"]
    SaveSheets --> SheetsService["Google Sheets Integration"]
    Mail --> EmailService["Email Integration"]
```

---

## 3rd: Database Architecture & State Flow

### A. Database Document Schema
```mermaid
erDiagram
    LEAD_DOCUMENT {
        string ID
        string Name
        string Email
        string Company
        string Website
        string ReportPath
        string Status
        date CreatedAt
    }
```

### B. Dual-Sync Architecture
```mermaid
flowchart LR
    Submit["User Submit"] --> Backend["Backend Server"]
    
    subgraph Database ["NoSQL Database"]
        Backend -->|Write Document| MongoDB[("MongoDB Database")]
    end
    
    subgraph CRM ["CRM Spreadsheets"]
        Backend -->|Write Log| GSheets[("Google Sheets")]
    end

    MongoDB -.->|State Parity| GSheets
```

### C. State Machine Flow
```mermaid
stateDiagram-v2
    [*] --> PENDING : Submit Form
    PENDING --> SCRAPING : Start Scraper
    SCRAPING --> ANALYZING : Scrape Complete
    ANALYZING --> PDF_GENERATION : AI Complete
    PDF_GENERATION --> SYNCING : PDF Generated
    SYNCING --> COMPLETED : Databases Synced
    
    PENDING --> FAILED : Connection Error
    SCRAPING --> FAILED : Scraping Blocked
    ANALYZING --> FAILED : AI API Error
    PDF_GENERATION --> FAILED : PDF Build Error
    SYNCING --> FAILED : Database Error

    COMPLETED --> [*] : Success Response
    FAILED --> [*] : Failure Response
```

---

## 4th: Frontend Architecture

```mermaid
flowchart TD
    subgraph ReactApp ["React Application"]
        
        subgraph Pages ["Pages & Views"]
            Landing["Landing Page"]
            Home["Home Page"]
        end
    end

    subgraph Components ["Home Page Components"]
        Form["Lead Form"]
        Loader["Loading Screen"]
        Success["Success Card"]
    end

    ReactApp --> Pages

    Home --> Form
    Home --> Loader
    Home --> Success

    Landing -->|Click CTA| Home
    Form -->|Submitting| Loader
    Loader -->|Success Response| Success
```