# ✅ Deployment Checklist

Use this checklist to deploy your project step by step.

---

## 📋 Pre-Deployment

- [ ] Project is running locally on your computer
- [ ] MongoDB Atlas connection string is working
- [ ] You have a GitHub account
- [ ] You have created a new repository on GitHub

---

## 🚀 Deployment Steps

### Part 1: GitHub (5 minutes)

- [ ] Opened terminal in project folder
- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Added GitHub remote: `git remote add origin YOUR_URL`
- [ ] Pushed code: `git push -u origin main`
- [ ] Verified code is visible on GitHub

---

### Part 2: Backend on Render (10 minutes)

- [ ] Signed up on https://render.com
- [ ] Connected GitHub account
- [ ] Created new "Web Service"
- [ ] Selected correct repository
- [ ] Set Root Directory to `backend`
- [ ] Set Build Command to `pip install -r requirements.txt`
- [ ] Set Start Command to `uvicorn server:app --host 0.0.0.0 --port $PORT`
- [ ] Added environment variable: `MONGO_URL`
- [ ] Added environment variable: `DB_NAME`
- [ ] Added environment variable: `CORS_ORIGINS` = `*`
- [ ] Clicked "Create Web Service"
- [ ] Waited for deployment to complete
- [ ] **Copied backend URL** (Example: https://your-backend.onrender.com)
- [ ] Tested backend: Opened `YOUR_BACKEND_URL/api/` in browser
- [ ] Saw `{"message": "Hello World"}` ✅

---

### Part 3: Frontend on Vercel (10 minutes)

- [ ] Opened `frontend/.env.production` file
- [ ] Updated `REACT_APP_BACKEND_URL` with YOUR Render backend URL
- [ ] Saved the file
- [ ] Committed changes:
  ```bash
  git add frontend/.env.production
  git commit -m "Update production API URL"
  git push
  ```
- [ ] Signed up on https://vercel.com
- [ ] Connected GitHub account
- [ ] Clicked "Add New..." → "Project"
- [ ] Imported your repository
- [ ] Set Root Directory to `frontend`
- [ ] Set Install Command to `npm install --legacy-peer-deps`
- [ ] Set Build Command to `npm run build`
- [ ] Clicked "Deploy"
- [ ] Waited for deployment to complete
- [ ] **Copied frontend URL** (Example: https://your-app.vercel.app)

---

### Part 4: Final Configuration (5 minutes)

- [ ] Went back to Render dashboard
- [ ] Selected backend service
- [ ] Clicked "Environment" tab
- [ ] Updated `CORS_ORIGINS` to your Vercel URL
- [ ] Saved changes
- [ ] Waited for backend to redeploy

---

## 🧪 Testing

- [ ] Opened frontend URL in browser
- [ ] Website loads correctly
- [ ] Scrolled through all sections
- [ ] Clicked menu filters - they work
- [ ] Filled out contact form
- [ ] Submitted form successfully
- [ ] Received success message
- [ ] Clicked WhatsApp button - opens WhatsApp
- [ ] Clicked Call button - opens phone dialer

---

## 📝 Save Your URLs

Write down your live URLs:

**Frontend URL:** _______________________________________________

**Backend URL:** _______________________________________________

**MongoDB URL:** (Already saved in Render environment variables)

---

## 🎉 Congratulations!

If all checkboxes are checked, your app is LIVE on the internet!

Share your frontend URL with anyone, and they can access your website!

---

## 🔄 Future Updates

When you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Both Vercel and Render will automatically redeploy! 🚀

---

## 🆘 Troubleshooting

### Frontend shows but form doesn't work
- Check if backend URL in `.env.production` is correct
- Check if CORS_ORIGINS in Render includes your Vercel URL
- Check Render logs for errors

### Backend deployment fails
- Check Render logs for specific error
- Verify MongoDB connection string is correct
- Ensure all environment variables are set

### Can't push to GitHub
- Make sure you created the repository on GitHub
- Check if remote URL is correct: `git remote -v`
- Try: `git push -u origin main --force` (only if needed)

---

## 📚 Additional Resources

- Simple Guide: `DEPLOYMENT_SIMPLE.md`
- Detailed Guide: `DEPLOYMENT_GUIDE.md`
- Visual Diagram: `DEPLOYMENT_DIAGRAM.txt`
