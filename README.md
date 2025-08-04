# 💼 Job & Networking Portal – RizeOS Assignment (Founder’s Office)

A full-stack platform enabling decentralized job posting, social networking, and AI-assisted matchmaking between job seekers and employers. Developed as part of the Founder’s Office – Core Team Internship assignment for RizeOS.

---

## 🌐 Live Demo

- 🧪 App: [https://jobportal-iota-gilt.vercel.app](https://jobportal-iota-gilt.vercel.app)
- 🛠 GitHub: [https://github.com/likithsaipyneni/jobportal](https://github.com/likithsaipyneni/jobportal)
- 📹 Demo Video: [Google Drive – Demo](https://drive.google.com/your-demo-link)

---

## 🚀 Features

### ✅ Module 1: Authentication & Profile Management
- JWT-based signup/login
- Profile form with bio, LinkedIn, wallet
- AI-generated skill extraction from bio (NLP)

### ✅ Module 2: Job Posting & Social Feed
- Post jobs with title, salary, skills
- Job feed with filters
- Create/view posts (advice, news)

### ✅ Module 3: Web3 Payment Integration
- MetaMask wallet connect (Polygon Mumbai)
- Pay testnet MATIC to post jobs
- Transaction hash verified before posting

### ✅ Module 4: AI Enhancements
- Skill extraction via regex-based NLP
- Modular backend logic
- (Planned) Match score + smart recommendations

---

## 🧠 AI Logic (Resume Skill Extractor)

- **Approach**: Keyword-based pattern matching
- **Location**: `server/ai/skillExtractor.js`
- **Used In**: Profile form to auto-fill skill tags from bio
- **Tech**: JavaScript RegEx + modular functions

---

## 🔐 Wallet & Blockchain

- **Admin Wallet (Polygon Mumbai)**: `0xD87e4B37E66cFd2f718Fc3Fb0B6B5eD14f508DcF`
- **Faucet**: [mumbaifaucet.com](https://mumbaifaucet.com)
- **Library**: Ethers.js
- **Flow**:
  1. Connect MetaMask
  2. Pay platform fee in MATIC
  3. Verify `txHash` in backend
  4. Allow job posting on success

---

## 🛠 Tech Stack

| Layer      | Tech                                  |
|------------|---------------------------------------|
| Frontend   | React (Vite), TypeScript, Tailwind    |
| Backend    | Node.js, Express, MongoDB             |
| Auth       | JWT + middleware                      |
| Web3       | MetaMask + Ethers.js + Polygon Mumbai |
| AI         | Regex-based NLP for skills            |
| Hosting    | Vercel (frontend) + Render (backend)  |

---

## ▶️ How to Run Locally

```bash
# Clone the repo
git clone https://github.com/likithsaipyneni/jobportal.git
cd jobportal

# Install frontend
npm install
npm run dev

# Backend setup (in /server)
cd server
npm install
npm run dev
