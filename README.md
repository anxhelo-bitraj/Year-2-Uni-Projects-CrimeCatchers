# CrimeCatchers - Crime Data Analysis & Visualization

A comprehensive full-stack application for analyzing and visualizing crime data across London boroughs.

**Original Project:** Brunel University CS2001 Group Project
**Developer:** Anxhelo Bitraj (Student ID: 2322905)

## Quick Start

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

## Technology Stack

### Frontend
- React 18 + TypeScript
- Vite for fast builds
- Tailwind CSS for styling
- Leaflet & React Leaflet for maps
- Material-UI for components
- Axios for API calls

### Backend  
- Spring Boot with Java
- MongoDB for data persistence
- JWT authentication
- JavaMailSender for emails

## Key Features

✅ Interactive crime data visualization on maps
✅ User authentication with JWT tokens
✅ Real-time crime statistics and analytics
✅ User-reported crime submissions
✅ Email notifications and alerts
✅ Geolocation-based filtering
✅ Heat map generation
✅ PDF export functionality

## Project Structure

```
.
├── src/                    # Frontend React source
│   ├── components/        # React components
│   ├── pages/             # Page components
│   ├── api/               # API service calls
│   ├── App.jsx            # Main app component
│   └── main.tsx           # Entry point
├── backend/               # Spring Boot backend
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
└── tailwind.config.js     # Tailwind configuration
```

## Security Features

- JWT-based authentication with 24-hour expiration
- BCrypt password hashing
- CORS protection
- Secure API endpoints
- Input validation and error handling

## Author

Anxhelo Bitraj - Brunel University

---

*Portfolio project showcasing full-stack web development skills for interview purposes.*
