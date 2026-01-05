# React Task Dashboard

Ett fullstack-projekt byggt för att visa praktiska kunskaper inom modern webbutveckling med fokus på **React**, **API-integration** och **tydlig projektstruktur**.  
Applikationen simulerar ett internt verktyg för hantering av tasks.

## 🎯 Syfte

Syftet med projektet är att visa hur jag:

- bygger en modern frontend med React
- arbetar mot ett REST-API
- strukturerar kod för skalbarhet och läsbarhet
- hanterar routing, state och skyddade vyer
- kombinerar frontend och backend i ett sammanhängande system

Projektet är framtaget som ett **portfolio- och lärandeprojekt** inför arbete som utvecklare.

## 🧱 Arkitektur

Projektet är uppdelat i två separata delar:

react-task-dashboard/
│
├── client/ # Frontend (React + Vite)
│
└── server/ # Backend (Node.js + Express)

## 🖥️ Frontend

**Tekniker**

- React
- React Router
- Context API
- Vite
- JavaScript (ES6+)
- CSS (Dark / Light mode)

**Funktionalitet**

- Inloggningssida (simulerad autentisering)
- Skyddade routes
- Task-lista hämtad från backend
- Skapa och ta bort tasks
- Globalt tema (Dark / Light mode)
- Navbar och fullscreen-layout

---

## ⚙️ Backend

**Tekniker**

- Node.js
- Express
- REST API
- CORS

**Funktionalitet**

- API för tasks
- In-memory data (kan enkelt ersättas med databas)
- Tydlig routing-struktur

**Endpoints**

GET /api/tasks
POST /api/tasks
DELETE /api/tasks/:id

## 🚀 Kom igång lokalt

### 1. Klona projektet

```bash
git clone https://github.com/RabbeNN/react-task-dashboard.git
cd react-task-dashboard

### 2. Starta backend
cd server
npm install
node index.js

###Backend körs på:
http://localhost:5000

###3. Starta frontend
cd ../client
npm install
npm run dev

###Frontend körs på:
http://localhost:5173
```

🛠️ Möjlig vidareutveckling

Riktig autentisering (JWT)

Databas (t.ex. PostgreSQL eller MongoDB)

Redigera tasks

Roller och behörigheter

Tester (frontend och backend)

👤 Om mig

Projektet är skapat av Rasmus Misikangas, webbutvecklare med fokus på JavaScript och React.

📍 Växjö
💼 Söker junior utvecklarroll
🔗 GitHub: https://github.com/RabbeNN
