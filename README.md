# Darshan Lovely Events

A full-stack event management application built with React and FastAPI, designed to handle event inquiries and bookings.

## Tech Stack

### Frontend
- React 19.0.0
- Tailwind CSS
- Radix UI Components
- React Router DOM
- Axios for API calls
- Shadcn/ui component library

### Backend
- FastAPI 0.110.1
- Python 3.10+
- Motor (Async MongoDB driver)
- Pydantic for data validation
- Uvicorn ASGI server

### Database
- MongoDB Atlas (Cloud)

## Features

- Event inquiry submission
- Event type management
- Status tracking
- RESTful API
- Responsive UI with modern components
- Real-time data updates

## Prerequisites

Before running this project, make sure you have:

- Python 3.10 or higher
- Node.js 16 or higher
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Darshan-Lovely-Events-main
```

### 2. Backend Setup

```bash
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Create .env file with your MongoDB credentials
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0
# DB_NAME=darshan_lovely_events
# CORS_ORIGINS=http://localhost:3000
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# or if you encounter issues
npm install ajv@^8.0.0 --legacy-peer-deps
```

## Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGO_URL=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/?appName=Cluster0
DB_NAME=darshan_lovely_events
CORS_ORIGINS=http://localhost:3000
```

### MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and update the `.env` file

## Running the Application

### Start Backend Server

```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

The backend API will be available at `http://localhost:8000`

### Start Frontend Development Server

```bash
cd frontend
npm start
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:8000/api`

#### Status Checks
- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

#### Inquiries
- `POST /api/inquiries` - Create new inquiry
  ```json
  {
    "name": "John Doe",
    "phone": "1234567890",
    "event_type": "Wedding",
    "event_date": "2024-12-31",
    "message": "Optional message"
  }
  ```
- `GET /api/inquiries` - Get all inquiries (sorted by creation date)

## Project Structure

```
Darshan-Lovely-Events-main/
├── backend/
│   ├── server.py           # FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json
│   └── tailwind.config.js
└── README.md

```

## Development

### Backend Development

The backend uses FastAPI with auto-reload enabled. Any changes to Python files will automatically restart the server.

### Frontend Development

The frontend uses Create React App with hot module replacement. Changes will be reflected immediately in the browser.

## Troubleshooting

### Frontend Issues

If you encounter dependency conflicts:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

If ajv module errors occur:
```bash
npm install ajv@^8.0.0 --legacy-peer-deps
```

### Backend Issues

If MongoDB connection fails:
- Verify your connection string in `.env`
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure your database user has proper permissions

### Port Already in Use

If port 3000 or 8000 is already in use:
- Frontend: The app will prompt to use a different port
- Backend: Change the port in the uvicorn command: `--port 8001`

## Testing

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

## Deployment

This project is ready to deploy on cloud platforms for FREE!

### Quick Deployment (Recommended)

**Frontend:** Vercel.com (FREE)  
**Backend:** Render.com (FREE)  
**Database:** MongoDB Atlas (Already configured)

### Deployment Guides

- **Simple Guide:** See `DEPLOYMENT_SIMPLE.md` for a quick 3-step process
- **Detailed Guide:** See `DEPLOYMENT_GUIDE.md` for comprehensive instructions

### Configuration Files Included

- `vercel.json` - Vercel configuration for frontend
- `backend/render.yaml` - Render configuration for backend
- `frontend/.env.production` - Production environment variables

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The optimized production build will be in the `frontend/build` directory.

### Backend

For production deployment, use a production ASGI server configuration:

```bash
uvicorn server:app --host 0.0.0.0 --port 8000 --workers 4
```

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.
