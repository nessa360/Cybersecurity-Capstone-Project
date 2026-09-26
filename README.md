# 🔐 Onyx Global — Vulnerability Assessment Capstone

An academic **Vulnerability Assessment** project completed as part of the **Women Techsters Sprint — Cybersecurity Track**.

The project demonstrates how common weaknesses in a mobile money application can be identified, tested, documented, prioritized, and remediated using a controlled and intentionally vulnerable environment.

---

## 📌 Project Overview

**Onyx Global** is a fictional mobile money startup created specifically for this cybersecurity assessment.

The application simulates selected functionality that may exist in a mobile money platform, including:

* Customer authentication
* Customer account information
* Payment-related API functionality
* Customer data handling
* Security monitoring considerations

Rather than testing a real organization or live production system, I built a small intentionally vulnerable application that allowed me to safely reproduce and validate security weaknesses in a local environment.

The assessment focused on identifying vulnerabilities, collecting evidence, assigning risk ratings, and recommending practical security controls.

---

## 🎯 Objectives

The main objectives of this project were to:

1. Identify security weaknesses in a simulated mobile money application.
2. Validate vulnerabilities through hands-on testing.
3. Collect technical evidence for each finding.
4. Assess the potential security impact of each vulnerability.
5. Prioritize the findings based on risk.
6. Recommend practical remediation measures.
7. Document the assessment in a professional vulnerability assessment report.
8. Demonstrate how AI can support vulnerability analysis and security documentation.

---

## 🏗️ Lab Architecture

The simulated environment follows a simplified mobile money architecture:

```text
                    ┌──────────────────┐
                    │     Internet     │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ Firewall / Edge  │
                    │    Controls      │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │       DMZ        │
                    │ API Gateway /    │
                    │ Reverse Proxy    │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ Internal Firewall│
                    └────────┬─────────┘
                             │
              ┌──────────────▼──────────────┐
              │       Application Zone      │
              │                             │
              │ Authentication Service      │
              │ Payment API                 │
              │ Security Logging            │
              └──────────────┬──────────────┘
                             │
                    ┌────────▼─────────┐
                    │    Data Zone     │
                    │ Customer Database│
                    └──────────────────┘
```

The application used for hands-on testing runs locally on:

```text
http://localhost:3000
```

---

# Deployed Project Link
https://cybersecurity-capstone-project.onrender.com

---


# ⚠️ Security Warning

**This application is intentionally vulnerable.**

It contains insecure implementation patterns for educational demonstration, including:

* Missing login rate limiting
* Broken object-level authorization
* Excessive data exposure
* Plain HTTP communication

The application should only be run in a **controlled local environment**.

**Do not deploy this application to the public internet.**

Do not use the vulnerable implementation as a template for a production application.

---

# 🔍 Vulnerabilities Identified

| ID         | Vulnerability                                 | Severity    | Status       |
| ---------- | --------------------------------------------- | ----------- | ------------ |
| **OG-001** | Insufficient Rate Limiting / Account Lockout  | 🔴 Critical | Validated    |
| **OG-002** | Broken Object-Level Authorization (BOLA/IDOR) | 🟠 High     | Validated    |
| **OG-003** | Excessive Data Exposure                       | 🟠 High     | Validated    |
| **OG-004** | Missing Transport Encryption                  | 🟠 High     | Validated     |
| **OG-005** | Insufficient Security Logging                 | 🟡 Medium   | Partially Validated |

The detailed vulnerability assessment report contains the evidence, risk analysis, CVSS scoring, prioritization, and remediation recommendations.

---

# 🧰 Technologies Used

### Application

* Node.js
* Express.js
* TypeScript
* Vite
* React
* HTML/CSS

### Security Testing

* cURL
* Browser-based testing
* Manual API testing
* HTTP request/response analysis
* Vulnerability assessment methodology

### Documentation

* CVSS
* OWASP API Security guidance
* Vulnerability evidence collection
* Risk prioritization
* AI-assisted security analysis

---

# 📂 Project Structure

A simplified view of the project:

```text
onyx-demo/
│
├── client/
│   └── src/
│       ├── App.tsx
│       ├── pages/
│       └── components/
│
├── server/
│   └── index.ts
│
├── public/
│
├── package.json
├── package-lock.json
├── vite.config.ts
└── README.md
```

### Important files

| File / Directory  | Purpose                                                       |
| ----------------- | ------------------------------------------------------------- |
| `server/index.ts` | Express API containing the intentionally vulnerable endpoints |
| `client/src/`     | Frontend application                                          |
| `public/`         | Static assets                                                 |
| `package.json`    | Project dependencies and scripts                              |
| `README.md`       | Project documentation                                         |

---

# ⚡ Quick Start

If you just want to run the application, follow these steps.

## 1. Clone the repository

```powershell
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd onyx-demo
```

## 2. Install dependencies

```powershell
npm install
```

If npm reports a Vite peer-dependency conflict, use:

```powershell
npm install --legacy-peer-deps
```

## 3. Start the frontend

Open your first PowerShell terminal:

```powershell
npm run dev
```

You should see a local address similar to:

```text
http://localhost:5173/
```

Open this address in your browser.

## 4. Start the API

Open a second PowerShell terminal and run:

```powershell
cd onyx-demo
npx tsx server/index.ts
```

You should see:

```text
Server running on http://localhost:3000/
```

## 5. Verify that the API is running

In either terminal:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/health"
```

Expected result:

```text
status environment
------ -----------
ok     Onyx Global Vulnerability Assessment Lab
```

## 6. Open the application

Go to:

```text
http://localhost:5173/
```

The web interface provides access to the simulated Onyx Global environment and the Assessment section.

---

# 🚀 Detailed Setup

## Prerequisites

Before starting, make sure you have:

* Node.js installed
* npm installed
* Git installed
* A modern web browser
* Windows, macOS, or Linux

You can check your Node.js and npm installation with:

```powershell
node --version
npm --version
```

---

## 1. Clone the repository

```powershell
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Move into the project directory:

```powershell
cd onyx-demo
```

---

## 2. Install dependencies

Run:

```powershell
npm install
```

If npm reports a peer-dependency conflict related to the Vite plugin, use:

```powershell
npm install --legacy-peer-deps
```

---

# ▶️ Start the Application

The project has a frontend development server and an Express API.

### Terminal 1 — Start the frontend

Open PowerShell and run:

```powershell
cd onyx-demo
npm run dev
```

Vite should provide a local address similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

---

### Terminal 2 — Start the API

Open a second PowerShell window:

```powershell
cd onyx-demo
npx tsx server/index.ts
```

The API should display:

```text
Server running on http://localhost:3000/
```

---

# 🩺 Test the API

Before performing the vulnerability tests, confirm that the API is running:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/health"
```

Expected response:

```text
status environment
------ -----------
ok     Onyx Global Vulnerability Assessment Lab
```

If you receive this response, the API is running correctly.

---

# 🧪 Reproducing the Vulnerabilities

The following tests are intended for the **local lab only**.

---

## OG-001 — Insufficient Rate Limiting

### What is the problem?

The login endpoint does not enforce:

* Rate limiting
* Account lockout
* CAPTCHA
* Increasing delays after failed attempts

This means an attacker could repeatedly submit password guesses.

### Test

Run:

```powershell
$body = @{
    username = "akosua"
    password = "wrongpassword"
} | ConvertTo-Json

Invoke-RestMethod `
    -Uri "http://localhost:3000/api/login" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body
```

Repeat the request several times.

The application continues accepting login attempts instead of temporarily blocking or slowing the user.

### Expected result

The API returns:

```text
Invalid username or password
```

while continuing to process additional attempts.

This demonstrates the lack of effective login throttling.

---

# OG-002 — Broken Object-Level Authorization (BOLA/IDOR)

### What is the problem?

The API verifies that a user is authenticated, but does not properly verify that the authenticated user owns the requested account.

### Step 1 — Login

Run:

```powershell
$body = @{
    username = "akosua"
    password = "password123"
} | ConvertTo-Json

$login = Invoke-RestMethod `
    -Uri "http://localhost:3000/api/login" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body

$token = $login.token
```

### Step 2 — Request the user's account

```powershell
Invoke-RestMethod `
    -Uri "http://localhost:3000/api/account/1" `
    -Headers @{ Authorization = $token }
```

### Step 3 — Change the account ID

Now request:

```powershell
Invoke-RestMethod `
    -Uri "http://localhost:3000/api/account/2" `
    -Headers @{ Authorization = $token }
```

The authenticated session belongs to user **1**, but the API returns information belonging to user **2**.

This demonstrates the BOLA/IDOR vulnerability.

---

# OG-003 — Excessive Data Exposure

### What is the problem?

The customer profile endpoint returns information that should not be exposed through a normal profile response.

### Test

Run:

```powershell
Invoke-RestMethod `
    -Uri "http://localhost:3000/api/customer/1/profile" |
    ConvertTo-Json -Depth 5
```

The response includes fields such as:

```text
username
name
email
balance
accountNumber
password
accountStatus
internalCustomerType
```

The inclusion of sensitive fields such as the password demonstrates excessive data exposure.

---

# OG-004 — Missing Transport Encryption

### What is the problem?

The API is configured to communicate using HTTP rather than HTTPS.

### Test

Run:

```powershell
curl.exe -v http://localhost:3000/api/account/1 -H "Authorization: $token"
```

The verbose output should show:

```text
GET /api/account/1 HTTP/1.1
Authorization: ...
```

followed by:

```text
HTTP/1.1 200 OK
```

The connection is made to:

```text
http://localhost:3000
```

rather than HTTPS.

No TLS handshake or certificate negotiation is present.

### Important note

This local test demonstrates that the API listener is using **plain HTTP**.

Because the application is running on localhost, the test does **not** by itself demonstrate that someone intercepted the traffic over a real network.

---

# OG-005 — Insufficient Security Logging

OG-005 was identified through threat modeling and security analysis rather than independently validated through a dedicated attack test.

The concern is that important security events may not be sufficiently captured and monitored, including:

* Repeated failed login attempts
* Unauthorized object access
* Access to sensitive customer information
* Suspicious API activity

This finding is therefore classified as:

**Status: Hypothesized**

It is included in the assessment as a security control gap rather than as a confirmed exploitable vulnerability.

---

# 🔄 Resetting the Lab

The application includes a reset endpoint that clears the temporary lab state.

Run:

```powershell
Invoke-RestMethod `
    -Uri "http://localhost:3000/api/reset-attempts"
```

Expected response:

```text
success message
------- -------
True    Lab state reset
```

You can use this before repeating your demonstrations.

---

# 📸 Evidence Collection

The vulnerability assessment includes screenshots and command-line evidence for the validated findings.

Recommended evidence includes:

### OG-001

Screenshot of repeated failed login attempts showing that requests continue without effective lockout or throttling.

### OG-002

Screenshot showing:

```text
Authenticated user: 1
Requested account: 2
```

with the API returning account information belonging to another user.

### OG-003

Screenshot showing the API response containing sensitive fields such as:

```text
password
accountNumber
```

### OG-004

Screenshot of:

```text
curl -v
```

showing authenticated API communication over:

```text
http://localhost:3000
```

---

# 📊 Risk Prioritization

The findings were prioritized based on their potential impact and likelihood of exploitation.

### Priority 1 — Critical

**OG-001: Insufficient Rate Limiting**

Credential attacks against customer accounts could be automated if effective controls are not implemented.

### Priority 2 — High

**OG-002: BOLA/IDOR**

An authenticated user could access another customer's account information.

### Priority 3 — High

**OG-003: Excessive Data Exposure**

Sensitive customer information is unnecessarily returned by the API.

### Priority 4 — High

**OG-004: Missing Transport Encryption**

Sensitive API communication is transmitted without TLS protection.

### Priority 5 — Medium

**OG-005: Insufficient Security Logging**

Limited security visibility could make suspicious activity harder to detect and investigate.

---

# 🛠️ Recommended Remediation

The assessment identified several practical improvements.

| Finding | Recommended Control                                                                        |
| ------- | ------------------------------------------------------------------------------------------ |
| OG-001  | Implement rate limiting, progressive delays, account lockout controls, MFA, and monitoring |
| OG-002  | Enforce server-side object ownership and authorization checks                              |
| OG-003  | Return only the fields required by the client and never expose passwords                   |
| OG-004  | Enforce HTTPS/TLS for all application and API traffic                                      |
| OG-005  | Implement centralized security logging, alerting, and monitoring                           |

---

# 🤖 AI Integration

AI was incorporated into the project as a supporting tool during the assessment process.

It was used to assist with activities such as:

* Reviewing vulnerability descriptions
* Mapping findings to security concepts
* Reviewing CVSS scoring
* Improving technical explanations
* Structuring the vulnerability assessment report
* Developing remediation recommendations
* Reviewing evidence and identifying areas requiring clarification

AI was used as an **analysis and documentation aid**, while the vulnerability testing and evidence collection were performed against the local intentionally vulnerable application.

---

# 📚 Security References

The assessment was informed by established cybersecurity guidance, including:

* OWASP API Security Top 10
* OWASP Web Security Testing Guide
* FIRST Common Vulnerability Scoring System (CVSS)
* General secure API development practices

---

# 🎓 Academic Context

**Program:** Women Techsters Sprint
**Track:** Cybersecurity
**Specialization:** Vulnerability Assessment

**Author:** Vanessa Baah-Williams

This repository represents an academic security assessment and demonstration project.

---

# ⚖️ Ethical and Legal Notice

This project was developed for authorized educational testing.

The organization, customer accounts, balances, credentials, and other information represented in the application are fictional test data.

The application should only be executed and tested in a controlled environment.

**Do not use these techniques against systems that you do not own or have explicit authorization to test.**

---

# 👩🏽‍💻 Author

**Vanessa Baah-Williams**

Cybersecurity | Vulnerability Assessment

Women Techsters Sprint — Cybersecurity Track
