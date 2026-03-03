# 🚀 Deployment Guide - Darshan Lovely Events

This guide will help you deploy your project to the cloud for FREE!

## 📋 What You Need:
1. GitHub account
2. Vercel account (free)
3. Render account (free)
4. Your MongoDB Atlas connection string (you already have this!)

---

## 🎯 Deployment Strategy:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Frontend (React)  →  Vercel.com  →  FREE      │
│  Backend (FastAPI) →  Render.com  →  FREE      │
│  Database (MongoDB)→  Atlas       →  FREE      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Step 1: Push Your Code to GitHub

### 1.1 Create a new repository on GitHub
- Go to https://github.com/new
- Name it: `darshan-lovely-events`
- Make it Public or Private
- Don't initialize with README (you already have one)

### 1.2 Push your code
```bash
cd Darshan-Lovely-Events-main

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Darshan Lovely Events"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/darshan-lovely-events.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend on Render.com

### 2.1 Sign up on Render
- Go to https://render.com
- Sign up with GitHub (recommended)

### 2.2 Create New Web Service
1. Click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository
4. Select `darshan-lovely-events` repository

### 2.3 Configure the Service
Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `darshan-lovely-events-backend` |
| **Region** | Oregon (US West) or closest to you |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `uvicorn server:app --host 0.0.0.0 --port $PORT` |
| **Plan** | `Free` |

### 2.4 Add Environment Variables
Click **"Advanced"** and add these environment variables:

| Key | Value |
|-----|-------|
| `MONGO_URL` | `mongodb+srv://prashanthnemadi_db_user:YOUR_PASSWORD@cluster0.bk3ozff.mongodb.net/?appName=Cluster0` |
| `DB_NAME` | `darshan_lovely_events` |
| `CORS_ORIGINS` | `*` (we'll update this after frontend deployment) |
| `PYTHON_VERSION` | `3.10.11` |

**IMPORTANT:** Replace `YOUR_PASSWORD` with your actual MongoDB password!

### 2.5 Deploy
- Click **"Create Web Service"**
- Wait 3-5 minutes for deployment
- You'll get a URL like: `https://darshan-lovely-events-backend.onrender.com`
- **SAVE THIS URL!** You'll need it for the frontend

### 2.6 Test Your Backend
Open: `https://darshan-lovely-events-backend.onrender.com/api/`

You should see: `{"message": "Hello World"}`

---

## Step 3: Deploy Frontend on Vercel

### 3.1 Update Frontend API URL
Before deploying, we need to tell the frontend where the backend is.

Create a file: `frontend/.env.production`

```env
REACT_APP_API_URL=https://darshan-lovely-events-backend.onrender.com/api
```

**Replace the URL with YOUR actual Render backend URL from Step 2.5**

### 3.2 Commit this change
```bash
git add frontend/.env.production
git commit -m "Add production API URL"
git push
```

### 3.3 Sign up on Vercel
- Go to https://vercel.com
- Sign up with GitHub (recommended)

### 3.4 Import Project
1. Click **"Add New..."** → **"Project"**
2. Import your `darshan-lovely-events` repository
3. Vercel will auto-detect it's a React app

### 3.5 Configure Build Settings
| Setting | Value |
|---------|-------|
| **Framework Preset** | `Create React App` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Install Command** | `npm install --legacy-peer-deps` |

### 3.6 Deploy
- Click **"Deploy"**
- Wait 2-3 minutes
- You'll get a URL like: `https://darshan-lovely-events.vercel.app`

---

## Step 4: Update CORS Settings

### 4.1 Update Backend CORS
Now that you have your frontend URL, update the backend:

1. Go to Render dashboard
2. Select your backend service
3. Go to **"Environment"** tab
4. Update `CORS_ORIGINS` to your Vercel URL:
   ```
   https://darshan-lovely-events.vercel.app
   ```
5. Click **"Save Changes"**
6. Backend will automatically redeploy

---

## Step 5: Test Your Live Application! 🎉

1. Open your Vercel URL: `https://darshan-lovely-events.vercel.app`
2. Your app should be live and working!
3. Test the contact form to ensure backend connection works

---

## 🔧 Troubleshooting

### Frontend can't connect to Backend
**Problem:** CORS errors or API not responding

**Solution:**
1. Check if backend URL in `frontend/.env.production` is correct
2. Verify CORS_ORIGINS in Render includes your Vercel URL
3. Make sure backend is running (check Render logs)

### Backend deployment fails
**Problem:** Build errors on Render

**Solution:**
1. Check Render logs for specific error
2. Verify `requirements.txt` is correct
3. Ensure MongoDB connection string is correct
4. Check if all environment variables are set

### MongoDB connection fails
**Problem:** Backend can't connect to database

**Solution:**
1. Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
2. Check if password in MONGO_URL is correct
3. Ensure database user has read/write permissions

---

## 📱 Your Live URLs

After deployment, you'll have:

- **Frontend:** `https://darshan-lovely-events.vercel.app`
- **Backend API:** `https://darshan-lovely-events-backend.onrender.com/api`
- **Database:** MongoDB Atlas (already configured)

---

## 🔄 Future Updates

When you make changes to your code:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push
```

**Automatic Deployment:**
- Vercel will automatically redeploy frontend
- Render will automatically redeploy backend

No manual steps needed! 🎉

---

## 💰 Cost Breakdown

| Service | Cost | Limits |
|---------|------|--------|
| Vercel | FREE | 100GB bandwidth/month |
| Render | FREE | 750 hours/month, sleeps after 15 min inactivity |
| MongoDB Atlas | FREE | 512MB storage |

**Total Cost: $0/month** ✅

**Note:** Render free tier sleeps after 15 minutes of inactivity. First request after sleep takes 30-60 seconds to wake up.

---

## 🎯 Quick Reference

### Vercel Dashboard
- https://vercel.com/dashboard
- View deployments, logs, and analytics

### Render Dashboard
- https://dashboard.render.com
- View backend logs and status

### MongoDB Atlas
- https://cloud.mongodb.com
- View database data and metrics

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed on Render
- [ ] Backend URL saved
- [ ] Frontend `.env.production` created with backend URL
- [ ] Frontend deployed on Vercel
- [ ] CORS updated on backend with Vercel URL
- [ ] Tested live application
- [ ] Contact form works

---

## 🆘 Need Help?

If you get stuck:
1. Check the troubleshooting section above
2. Check Render logs: Dashboard → Your Service → Logs
3. Check Vercel logs: Dashboard → Your Project → Deployments → View Logs
4. Verify all environment variables are set correctly

---

**Congratulations! Your app is now live on the internet! 🎉**
