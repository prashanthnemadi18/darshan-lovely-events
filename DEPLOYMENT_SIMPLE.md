# 🚀 Simple Deployment Guide

## 📱 What You're Deploying:

```
Your Computer (Local)
    ↓
GitHub (Code Storage)
    ↓
    ├─→ Vercel.com (Frontend - React)  → https://your-app.vercel.app
    └─→ Render.com (Backend - Python)  → https://your-backend.onrender.com
         ↓
    MongoDB Atlas (Database) → Already Setup ✅
```

---

## 🎯 Simple 3-Step Process:

### Step 1: Push to GitHub (5 minutes)
```bash
cd Darshan-Lovely-Events-main
git init
git add .
git commit -m "Ready for deployment"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy Backend on Render.com (10 minutes)
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Select your repository
5. Fill in:
   - Name: `darshan-lovely-events-backend`
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Add Environment Variables:
   - `MONGO_URL` = Your MongoDB connection string
   - `DB_NAME` = `darshan_lovely_events`
   - `CORS_ORIGINS` = `*`
7. Click "Create Web Service"
8. **SAVE YOUR BACKEND URL!** (Example: https://darshan-lovely-events-backend.onrender.com)

### Step 3: Deploy Frontend on Vercel.com (10 minutes)
1. Open `frontend/.env.production` file
2. Update the URL with YOUR backend URL from Step 2
3. Save and push to GitHub:
   ```bash
   git add frontend/.env.production
   git commit -m "Update production API URL"
   git push
   ```
4. Go to https://vercel.com
5. Sign up with GitHub
6. Click "Add New..." → "Project"
7. Import your repository
8. Settings:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Install Command: `npm install --legacy-peer-deps`
9. Click "Deploy"
10. Done! Your app is live! 🎉

---

## ✅ That's It!

Your app will be live at:
- Frontend: `https://your-project-name.vercel.app`
- Backend: `https://your-backend-name.onrender.com`

---

## 🔄 Future Updates

Just push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

Both Vercel and Render will automatically redeploy! 🚀

---

## 💰 Cost: $0 (FREE)

Both platforms have free tiers perfect for your project!

---

## 🆘 Need Help?

Read the detailed guide: `DEPLOYMENT_GUIDE.md`
