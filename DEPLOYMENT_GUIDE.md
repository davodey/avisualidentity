# 🚀 DigitalOcean App Platform Deployment Guide

## 📋 Prerequisites

1. **DigitalOcean Account** - Sign up at [digitalocean.com](https://digitalocean.com)
2. **Gmail App Password** - Set up 2FA and generate an app password
3. **GitHub Repository** - Your code is already on GitHub

## 🔧 Step 1: Set Up Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. At the bottom, click **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password (you'll need this for DigitalOcean)

## 🚀 Step 2: Deploy to DigitalOcean App Platform

### Option A: Using DigitalOcean Dashboard (Recommended)

1. **Login to DigitalOcean**
   - Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
   - Sign in to your account

2. **Create New App**
   - Click **"Create"** → **"Apps"**
   - Choose **"GitHub"** as source
   - Select your repository: `davodey/avisualidentity`
   - Choose **"master"** branch

3. **Configure the App**
   - **Name**: `avisualidentity-contact-api`
   - **Source Directory**: `contact-api`
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`

4. **Set Environment Variables**
   - `GMAIL_USER`: `davodey@gmail.com`
   - `GMAIL_APP_PASSWORD`: `[your-16-character-app-password]` (mark as SECRET)
   - `NODE_ENV`: `production`

5. **Deploy**
   - Click **"Create Resources"**
   - Wait for deployment (5-10 minutes)

### Option B: Using DigitalOcean CLI

```bash
# Install doctl
brew install doctl

# Login to DigitalOcean
doctl auth init

# Deploy the app
doctl apps create --spec .do/app.yaml
```

## 🔗 Step 3: Update Your Website

After deployment, you'll get a URL like: `https://avisualidentity-contact-api-xyz.ondigitalocean.app`

1. **Update the API URL** in your HTML files:
   - Replace `https://your-app-name.ondigitalocean.app` with your actual URL
   - Update in: `index.html`, `top-10.html`, `process-video.html`

2. **Test the forms** on your website

## 💰 Cost Breakdown

- **DigitalOcean App Platform**: ~$5/month (basic-xxs instance)
- **Gmail**: Free (up to 500 emails/day)
- **Total**: ~$5/month

## 🔍 Testing

### Test the API directly:
```bash
curl -X POST https://your-app-url.ondigitalocean.app/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Expected Response:
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

## 🛠️ Troubleshooting

### Common Issues:

1. **"Failed to send message"**
   - Check Gmail app password is correct
   - Verify environment variables are set

2. **"CORS error"**
   - Make sure your website domain is allowed
   - Check the API URL is correct

3. **"App won't start"**
   - Check the source directory is `contact-api`
   - Verify `package.json` is in the right location

### Logs:
- View logs in DigitalOcean dashboard
- Check the "Runtime Logs" tab

## 📞 Support

If you run into issues:
1. Check the DigitalOcean App Platform logs
2. Verify your Gmail app password
3. Test the API endpoint directly
4. Make sure all environment variables are set correctly

## 🎉 Success!

Once deployed, your contact forms will:
- ✅ Send emails directly to `davodey@gmail.com`
- ✅ Show success/error messages to users
- ✅ Work without external dependencies
- ✅ Cost only ~$5/month
- ✅ Scale automatically
