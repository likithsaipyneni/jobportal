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

## ✅ Task 2: GTM & Monetization Strategy

### 🎯 Product Summary
An AI-enhanced Web3-based job and networking portal enabling:

- **Job Seekers** to create profiles, discover jobs, and connect with others.
- **Employers** to post jobs (after paying via blockchain) and find top talent.
- **AI** to extract user skills and assist in matchmaking.

---

### 🎯 Target User Base & Personas

| Persona                  | Description                                |
|--------------------------|--------------------------------------------|
| 👩‍💻 Final Year Students   | Looking for internships and fresher jobs    |
| 🧑‍🔬 Early-Career Pros     | Wanting better jobs and visibility          |
| 🧑‍🏫 Bootcamp Graduates   | Need a modern, free job portal              |
| 🧑‍💼 Startup Recruiters    | Searching affordable hiring solutions       |
| 👩‍🚀 Freelancers (Web3/NFT)| Open to short-term or crypto-based gigs     |

---

### 🚀 3-Month Roadmap to 10K Users

| Month     | Focus                                                                 |
|-----------|------------------------------------------------------------------------|
| Month 1   | 🧪 MVP Launch + Campus Network<br>- Share in college groups, clubs, hackathons<br>- Collect feedback & improve UI/UX |
| Month 2   | 📢 College + LinkedIn Campaigns<br>- Reach out to career cell heads<br>- Share success stories on LinkedIn |
| Month 3   | 📈 Campus Ambassador Program<br>- Recruit 50+ ambassadors<br>- Reward ₹50–100/user<br>- Trigger virality during placement season |

---

### 📢 ₹5,000 Budget Marketing Plan

| Activity                        | Budget (₹) | Description                                                        |
|---------------------------------|------------|--------------------------------------------------------------------|
| LinkedIn Sponsored Post         | ₹1,500     | Promote job portal to job seekers (location-based targeting)      |
| WhatsApp/Telegram Promotions    | ₹1,000     | Pay admins to post in placement/internship groups                 |
| Campus Ambassador Incentives    | ₹2,000     | ₹50 reward per 40 users acquired (~40 users total)                |
| Canva Pro + Domain              | ₹500       | Branding, posters, and domain for trust-building                  |

> 💡 Also leveraging **free growth hacks**: Twitter/X threads, Reddit posts, and LinkedIn organic posts.

---

### 💰 Monetization Strategy (Multiple Revenue Streams)

1. **Job Post Fee (Web3)**
   - Employers must pay 0.001 ETH or 0.01 SOL to post jobs.
   - Ensures decentralized, secure payments with transparency.

2. **Premium Subscriptions (₹150/month)**
   - **For Candidates:**
     - Highlighted profile in search
     - Priority on match score listings
     - Resume feedback
   - **For Recruiters:**
     - Filter candidates by skill/match score
     - Boosted visibility for job listings

3. **Featured Listings (Boosted Jobs)**
   - Optional token-based or ₹299/job feature boost

4. **Hiring Partner Portal (Future)**
   - Recruiters or agencies can bulk post jobs or purchase credits

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
