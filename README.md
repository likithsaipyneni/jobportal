# 💼 Job & Networking Portal – RizeOS Assignment (Founder’s Office)

A full-stack platform enabling decentralized job posting, social networking, and AI-assisted matchmaking between job seekers and employers. Developed as part of the Founder’s Office – Core Team Internship assignment for RizeOS.

---

## 🌐 Live Demo

- 🧪 App: [https://jobportal-iota-gilt.vercel.app](https://jobportal-iota-gilt.vercel.app)
- 🛠 GitHub: [https://github.com/likithsaipyneni/jobportal](https://github.com/likithsaipyneni/jobportal)
- 📹 Demo Video: [Google Drive – Demo](https://drive.google.com/your-demo-link)

---

## 🚀 Task 1: Platform Development Overview

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
```

---

# 📊 Task 2: GTM (Go-To-Market) & Monetization Strategy

The goal of this strategy is to position the platform for rapid adoption and long-term sustainability by effectively targeting the right users, leveraging low-cost marketing channels, and building diverse revenue streams.

### 🎯 Product Vision

The platform bridges the gap between job seekers, recruiters, and freelancers using a **Web3-powered** and **AI-enhanced** job & networking portal. It allows:
- Recruiters to post jobs using **crypto payments**
- Candidates to build **smart, skill-based profiles**
- Users to connect socially and grow professionally

---

## 👥 Target Audience & Personas

To ensure maximum adoption, we segment users into specific personas based on behavior, motivation, and problem-pain fit:

| Persona                  | Description                                | Pain Points                        | Platform Benefits                           |
|--------------------------|--------------------------------------------|------------------------------------|----------------------------------------------|
| 👨‍🎓 Final Year Students   | Freshers seeking internships               | Lack of exposure, poor resume      | Free smart-profile, job feed                 |
| 👨‍🔬 Early-Career Pros     | 0–3 years experience                      | Limited visibility                 | Skill-tagged profiles, match scores          |
| 👨‍🏫 Bootcamp Graduates   | Bootcamp or Tier 2/3 college grads         | No trusted job platforms           | Filtered, skill-based jobs                   |
| 🧑‍💼 Startup Recruiters    | Small companies/startups                   | High job board fees                | Blockchain-based affordable hiring           |
| 👩‍🚀 Web3 Freelancers      | Gig-based DAO/NFT/crypto professionals     | No platform for crypto-native work | Decentralized job listings with payments     |

---

## 🚀 3-Month GTM Roadmap

A lean but focused 3-phase approach ensures MVP validation, rapid awareness, and scalable user acquisition:

### 📅 Month 1: MVP Launch & Closed Network Onboarding
- Launch in **college groups, tech clubs, hackathons**
- Run product demo sessions and feedback loops
- Create LinkedIn presence and roadmap post
- Incentivize users to post jobs or refer friends

> 🎯 **Goal**: Get first 1000 users and 10 job listings

---

### 📅 Month 2: Organic + Micro-Influencer Push
- Reach out to **Career Cell Heads**, placement officers
- Collaborate with **LinkedIn creators** (college/recruitment niche)
- Share **success stories** on social media to build trust
- Launch **Giveaways** (e.g., “Top profile of the week”)

> 🎯 **Goal**: Achieve viral word-of-mouth + 5,000 users

---

### 📅 Month 3: Campus Ambassador Program
- Recruit 50+ student ambassadors across India
- Offer ₹50–₹100 per verified signup via referral
- Share social media templates and weekly leaderboard
- Run a “Placement Season” campaign for high virality

> 🎯 **Goal**: Build campus presence + reach 10K user base

---

## 📢 ₹5,000 Budgeted Marketing Plan

A highly optimized ₹5,000 budget is allocated across the most impactful grassroots and digital channels:

| Activity                          | Budget (₹) | Objective                                  |
|-----------------------------------|------------|--------------------------------------------|
| LinkedIn Sponsored Post           | ₹1,500     | Target job seekers + recruiters            |
| Telegram/WhatsApp Group Promotions| ₹1,000     | Pay admins of placement groups             |
| Campus Ambassador Rewards         | ₹2,000     | Incentives for acquiring 40+ users         |
| Domain + Canva Pro                | ₹500       | Build branding & trust                     |

> 🧠 **Free marketing hacks**: Reddit communities, Twitter threads, Instagram reels, cold LinkedIn DMs to recruiters

---

## 💸 Monetization Strategy

Our monetization approach uses a **freemium + tokenized + SaaS hybrid** model to create multiple income streams:

### 1. 💼 Job Post Fee (Web3)
- Employers pay a **platform fee (e.g., 0.001 ETH or ₹299)** via MetaMask
- Ensures listing quality, avoids spam, and builds crypto-native revenue

### 2. 🌟 Boosted Job Listings
- Employers can promote their job posts for **₹299/job** or **in tokens**
- These appear at the top of job feeds with a “🔥 Featured” tag

### 3. 👑 Premium Subscriptions (₹150/month)
#### 👨‍🎓 For Candidates:
- Skill-matched job alerts
- Highlighted search visibility
- Resume feedback via AI

#### 🧑‍💼 For Recruiters:
- Candidate filtering by skill/match score
- Analytics dashboard (planned)
- Bulk hiring credits

### 4. 🤝 Hiring Partner Portal (Future Expansion)
- Offer a **recruiter dashboard** for agencies and HR teams
- Bundle features like multi-posting, analytics, access to premium resumes

---

## 🔄 Revenue Forecast (First 3 Months)

| Source                      | Revenue Potential |
|-----------------------------|-------------------|
| Job Post Fees (50 @ ₹299)   | ₹14,950           |
| Boosted Jobs (20 @ ₹299)    | ₹5,980            |
| Premium Users (100 @ ₹150)  | ₹15,000           |
| **Total**                   | **₹35,930**       |

> With 10K users and targeted outreach, breaking even in 3 months is realistic

---

## 📦 Conclusion

This GTM strategy ensures:
- 🚀 Quick user growth from high-intent college users
- 💡 Smart adoption of AI and Web3 features
- 💰 Sustainable monetization from Day 1
- 🔄 Organic feedback loop from student + startup ecosystem

With minimal spend and strong product-led growth, this platform can scale fast while remaining lean and community-driven.
