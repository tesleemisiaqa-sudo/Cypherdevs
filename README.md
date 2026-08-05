# CypherDevs Technologies Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**CypherDevs Technologies** is a enterprise-grade web application built with React, Vite, Tailwind CSS, Express, and n8n Automation Integration.

---

## 🌟 Key Features

- **Enterprise AI & n8n Chat Engine:** Direct integration with n8n Webhooks (`/webhook/Cypherdevs`) and Google Gemini API for client consultations.
- **Bootcamp & Course Academy:** Comprehensive catalog for Full-Stack, AI Engineering, and Cybersecurity bootcamps.
- **Project Proposal Calculator:** Interactive estimation tool for software & cloud infrastructure engineering.
- **Multilingual Support:** Full English & Arabic (RTL/LTR) internationalization.
- **Vercel & Full-Stack Ready:** Configured with Serverless API route functions (`/api/index.ts`) for deployment on Vercel or Cloud Run.

---

## 🚀 Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons
- **Backend Proxy:** Node.js, Express, esbuild
- **Automation & AI:** n8n Webhook (`teshak.app.n8n.cloud`), Google Gemini 2.0/2.5
- **Deployment:** Vercel / Cloud Run / Docker

---

## 🛠️ Getting Started Locally

### Prerequisites

- Node.js 18+ installed
- npm or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cypherdevs-platform.git
   cd cypherdevs-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Copy `.env.example` to `.env` (Optional: add your Gemini API Key if desired):
   ```bash
   cp .env.example .env
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## ☁️ Deploying to Vercel

1. Push this repository to your GitHub account.
2. Import the repository into [Vercel](https://vercel.com/).
3. Vercel will automatically detect `vercel.json` and deploy both the Vite frontend and Express serverless API routes.

---

## 📄 License

This project is maintained by CypherDevs Technologies. All rights reserved.
