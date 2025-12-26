Mac-Style Browser (Electron + Node.js)

A desktop Mac-style browser/dashboard built with Electron for the frontend and Node.js (Express) for the backend.
The project serves your frontend files from public/ while providing a Node.js backend for APIs or additional server logic.
<img width="1364" height="617" alt="Screenshot 2025-12-26 145054" src="https://github.com/user-attachments/assets/13b49270-9c10-4763-8661-7616eb7787d3" />



📁 Folder Structure
mac/
├─ main.js         # Electron entry point
├─ server.js       # Node.js backend
├─ package.json    # Project dependencies & scripts
└─ public/
   └─ index.html   # Frontend HTML

⚡ Features

Desktop app using Electron

Backend server with Node.js + Express

Static frontend files served from public/

Ready-to-use for Mac-style dashboard UI

API support via Express

🛠 Installation

Clone or download the project:

git clone https://github.com/OZ-00MS/Mac-Style-Dashboard.git



Install dependencies:

npm install


This will install:

express (backend)

electron (desktop app)

concurrently (run Node + Electron together)

🚀 Running the App
Start Node.js server only
npm start


Node.js server will run at:

http://localhost:3000

Start Electron only
npm run electron


Electron will open a desktop window loading public/index.html.

Start Node.js + Electron together
npm run dev


Node.js server runs on http://localhost:3000

Electron opens the dashboard window automatically

Use this command during development.
