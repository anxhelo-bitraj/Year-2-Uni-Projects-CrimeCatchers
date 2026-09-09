# CrimeCatchers - Portfolio Project

## Overview

CrimeCatchers is a full-stack web application for crime data visualization and analysis. This project demonstrates comprehensive software engineering skills across frontend development, backend API design, database management, and modern deployment practices.

**Original Repository**: https://github.com/BrunelCS/cs2001-2024-25-group-44
**Forked for Portfolio**: https://github.com/anxhelo-bitraj/Year-2-Uni-Projects-CrimeCatchers

## Developer Information

- **Name**: Anxhelo Bitraj
- **Student ID**: 2322905
- **University**: Brunel University
- **Course**: CS2001 - Software Engineering Group Project
- **Grade**: Submitted for evaluation

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (navigation)
- Leaflet.js & React Leaflet (maps)
- Material-UI (components)
- Axios (HTTP client)
- html2canvas & jsPDF (export)

### Backend
- Spring Boot (Java framework)
- MongoDB (NoSQL database)
- JWT (authentication)
- Spring Security (security)
- JavaMailSender (email service)
- Maven (build management)

## Key Features Implemented

### 1. User Management
- ✅ User registration and login
- ✅ JWT-based authentication (24-hour tokens)
- ✅ BCrypt password encryption
- ✅ User profile management
- ✅ Secure password reset

### 2. Crime Data Visualization
- ✅ Interactive Leaflet maps
- ✅ Crime marker clustering
- ✅ Heat map generation
- ✅ Geojson borough boundaries
- ✅ Real-time marker updates
- ✅ Multiple filter options (category, date, location)

### 3. Analytics & Reporting
- ✅ Crime statistics dashboard
- ✅ Temporal analysis (crimes over time)
- ✅ Spatial analysis (crimes by borough)
- ✅ Custom report generation
- ✅ PDF export functionality
- ✅ Data visualization with charts

### 4. User Features
- ✅ Report crimes with location and details
- ✅ Subscribe to area alerts
- ✅ Email notifications
- ✅ User-generated content management
- ✅ Comments and ratings on crime reports

### 5. API Endpoints (15+)
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/crimes` - Get all crimes
- `GET /api/crimes/borough/{name}` - Filter by borough
- `POST /api/crimes` - Report new crime
- `GET /api/boroughs` - Get borough data with geojson
- `GET /api/stats` - Get crime statistics
- `POST /api/alerts/subscribe` - Subscribe to alerts
- `POST /api/email/send` - Send notifications
- And more...

## Code Quality & Best Practices

✅ TypeScript for type safety
✅ Component-based architecture
✅ RESTful API design
✅ Comprehensive error handling
✅ Input validation
✅ CORS security configuration
✅ Environment-based configuration
✅ Clean code principles
✅ Responsive design (mobile-first)
✅ Performance optimization
✅ Git version control with meaningful commits

## Project Statistics

- **Total Lines of Code**: 5,000+ (excluding node_modules)
- **React Components**: 25+
- **Spring Boot Classes**: 30+
- **API Endpoints**: 15+
- **Database Collections**: 4
- **Development Time**: 200+ hours
- **Team Size**: 4 developers

## How This Demonstrates Skills

### Full-Stack Development
- Complete end-to-end feature implementation
- Frontend user experience design
- Backend REST API development
- Database schema design

### Software Architecture
- Component-based React architecture
- Service-oriented backend design
- Separation of concerns
- Scalable project structure

### Security
- JWT authentication implementation
- Password hashing with BCrypt
- CORS configuration
- Input validation
- Error handling

### Real-World Features
- Geospatial data handling
- Map visualization with 1000+ markers
- Email service integration
- PDF generation
- Real-time notifications

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Java 11+ (for backend)
- MongoDB (local or Atlas)

### Frontend
```bash
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend
```bash
cd backend/backend-api
mvn clean install
mvn spring-boot:run
# Runs on http://localhost:5000
```

## Interview Talking Points

1. **Architecture Decisions**: Why React + Spring Boot?
2. **Performance Optimization**: Handling 10,000+ crime markers on map
3. **Security Implementation**: JWT tokens and password hashing
4. **Scalability**: How system handles 1M+ records
5. **Team Collaboration**: Git workflows and code reviews
6. **Problem-Solving**: Challenges overcome and solutions
7. **Learning Outcomes**: What was learned
8. **Future Enhancements**: ML predictions, mobile app, analytics

## Deployment Ready

- **Frontend**: Deployable to Vercel, Netlify, GitHub Pages
- **Backend**: Deployable to Heroku, AWS, Google Cloud, Azure
- **Database**: MongoDB Atlas cloud integration
- **Maps**: Leaflet (self-hosted) or MapBox

## Repository Structure

```
Year-2-Uni-Projects-CrimeCatchers/
├── src/                    # React frontend
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── api/               # API calls
│   ├── App.jsx            # Main component
│   └── main.tsx           # Entry point
├── backend/               # Spring Boot backend
│   └── backend-api/
│       └── src/main/java/com/crimecatchers/
│           ├── config/    # Configuration
│           ├── services/  # Business logic
│           ├── data/      # Data models
│           ├── security/  # Auth/Security
│           └── controller/ # API endpoints
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Author

**Anxhelo Bitraj**
- GitHub: https://github.com/anxhelo-bitraj
- Email: anxhelo-bitraj@student.brunel.ac.uk
- Portfolio: https://github.com/anxhelo-bitraj/Year-2-Uni-Projects-CrimeCatchers

---

*This project was developed as part of Brunel University's CS2001 coursework and serves as a comprehensive portfolio piece for full-stack web development positions.*
