# A Visual Identity Contact API

Simple Node.js API for handling contact form submissions from the A Visual Identity website.

## Features

- ✅ Handles contact form submissions
- ✅ Sends emails via Gmail SMTP
- ✅ Input validation and sanitization
- ✅ CORS enabled for frontend integration
- ✅ Error handling and logging
- ✅ Health check endpoint

## Setup

### 1. Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. At the bottom, click **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 2. Environment Variables

Create a `.env` file:
```bash
GMAIL_USER=davodey@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=3000
NODE_ENV=production
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Locally

```bash
npm start
```

## API Endpoints

### GET /
Health check endpoint
```json
{
  "status": "OK",
  "message": "A Visual Identity Contact API is running",
  "timestamp": "2025-01-27T06:40:00.000Z"
}
```

### POST /contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

## Deployment

This API is configured for DigitalOcean App Platform deployment.

### Manual Deployment
1. Push code to GitHub
2. Connect repository to DigitalOcean App Platform
3. Set environment variables in the App Platform dashboard
4. Deploy!

## Security

- Input validation on all fields
- Email format validation
- CORS protection
- Environment variable protection for sensitive data
- Error handling without exposing internal details

## Cost

- **DigitalOcean App Platform**: ~$5/month for basic-xxs instance
- **Gmail**: Free (up to 500 emails/day)
- **Total**: ~$5/month
