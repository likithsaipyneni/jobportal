# Job & Networking Portal (RizeOS Assignment)

A full-stack web application designed to connect job seekers and recruiters, featuring decentralized payments and AI-powered enhancements. Built as part of the Founder’s Office – Core Team Internship assignment for RizeOS.

## 🚀 Features

### ✅ Module 1: Authentication & Profile Management
- 🔐 User registration & login with JWT
- 📝 Profile creation with:
  - Name, bio, LinkedIn
  - Manual & AI-based skill extraction
  - Wallet address input (for Web3)

### ✅ Module 2: Job Posting & Social Feed
- 🧑‍💼 Post jobs with title, skills, and salary
- 🗂️ Job feed with filters (location, tags, skills)
- 📢 Create and view social posts (career advice, updates)

### ✅ Module 3: Blockchain Payment Integration
- 🔗 MetaMask wallet connection
- 💸 Platform fee required to post jobs (testnet payment)
- ✅ Only successful transactions enable job posting

### ✅ Module 4: AI Enhancements
- 🤖 Resume skill extraction (basic NLP)
- 💡 Smart job suggestions and match score (planned)

---

## 💻 Tech Stack

| Layer      | Technologies                         |
|------------|--------------------------------------|
| Frontend   | React (Vite), TypeScript, Tailwind   |
| Backend    | Node.js, Express, MongoDB            |
| Auth       | JWT (custom middleware)              |
| Web3       | MetaMask, Ethers.js (Polygon testnet)|
| AI         | Basic NLP for keyword extraction     |
| Deployment | Vercel / Render / Netlify            |

---

## 📷 Demo

- 🔗 [Deployed App](https://your-live-app-link.com)
- 🎥 [Demo Video](https://drive.google.com/your-demo-link)

---

## 🧠 AI Logic

- Keyword-based NLP to extract skills from bio text
- Modular integration (AI processing occurs in backend and updates user profile)

---

## 🔐 Wallet Integration

- Admin wallet (testnet): `0xYourTestnetWalletAddress`
- Integrated via Ethers.js
- Verifies transaction hash before allowing post submission

---

## 📈 GTM & Monetization Plan (Task 2)

### 🎯 Target Users
- Tech job seekers
- Startup recruiters
- Career influencers

### 🗓️ 3-Month Roadmap
1. 🚀 Launch MVP
2. 🎯 Partner with university communities
3. 📣 Run LinkedIn influencer campaigns

### 💰 ₹5,000 Budget Marketing
- Instagram & LinkedIn ads (₹3,000)
- Discord & college events (₹1,000)
- Referral rewards (₹1,000)

### 💵 Revenue Streams
- Subscription: ₹150/month (premium access)
- Boost: ₹20 per featured job/post

---

## 🛠️ Run Locally

```bash
# Clone the repo
git clone https://github.com/likithsaipyneni/jobportal.git
cd jobportal

# Install dependencies
npm install

# Start the frontend
npm run dev

# In a separate terminal (for backend)
cd server
npm install
npm run dev
