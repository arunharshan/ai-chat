
# 💬 AI Chat App using Gemini API

A modern, responsive AI-powered chat application built with **React 19 (Vite + TypeScript)**, featuring a clean architecture, theming, error handling, private routes, and animated conversations — powered by **Google Gemini API**.

🌐 **Live Demo:** [Click here to view the app](https://aichat-arun.vercel.app/)
🔗 *https://aichat-arun.vercel.app/* 
---

## 📁 Project Structure

```
api-chat/
├── client/          # Frontend - React + Vite + TypeScript
├── server/          # Backend - Node.js + Express (login auth)
├── package.json     # Root scripts (optional monorepo-level tools)
├── package-lock.json
├── vercel.json      # While deploying in vercel.app, the url hard reload throws 404
└── README.md
```

---

## 🌟 Features

### 🔮 AI Chat (Gemini API)
- Seamless integration with **Google Gemini API**
- Animated text rendering like real-time typing
- Chat history

### ⚛️ React 19 Frontend
- Built with **Vite + React 19 + TypeScript**
- Responsive layout using **HTML5 semantics + SCSS/SASS**
- **React Router** for:
  - Public and private routes
  - Auth guard protection

### 🔐 Authentication
- Dummy login system via **Node.js + Express**
- **LocalStorage** for token handling
- Redirect guards for unauthorized access

### 🎨 UI/UX & Architecture
- **Custom Hooks** for reusability
- **Custom Themes** (Dark / Light mode)
- **Error Boundaries** for graceful error handling
- Mobile-first responsive layout
- Scalable, clean folder structure

### 🌐 API Handling
- Abstraction layer using native `fetch`
- Error and loading state support

---

## 🖼️ Screenshots

![Chat UI Light](/client/public/light.png)

![Chat UI Dark](/client/public/dark.png)

---

## 🚀 Getting Started

### 📦 Client (React + Vite)

```bash
cd client
npm install
```

### 🖧 Server (Node + Express)

```bash
cd server
npm install
```

### ▶️ Run Both

From the **project root**:

```bash
npm run dev
```

> 💡 This command runs both the client and server together using a concurrent script (optional, if configured).

> 🧪 The backend is a dummy API for handling login and issuing auth tokens.

---

## 🛠️ Tech Stack

| Area        | Tech                                       |
|-------------|--------------------------------------------|
| Frontend    | React 19, Vite, TypeScript, SCSS           |
| UI Design   | HTML5, SCSS/SASS, Responsive, Animations   |
| State Mgmt  | React Hooks, Custom Hooks                  |
| Routing     | React Router DOM (v6+), Auth Guard         |
| Auth        | LocalStorage Tokens, Protected Routes      |
| Error Mgmt  | ErrorBoundary Component                    |
| Backend     | Node.js, Express                           |
| AI Engine   | Google Gemini API                          |

---

## 🛠️ Deploying to Vercel

> **Frontend deployment only – backend must be deployed separately (e.g., Render or Railway).**

### Steps:

1. Go to [https://vercel.com/import/git](https://vercel.com/import/git)
2. Select your GitHub repository 
3. Set the **root directory** as: /client

4. Set the following build settings:
- **Build Command**: `npm run build` (default)
- **Output Directory**: `dist` (default)
- **Install Command**: `npm install` (default)
- **Environment Variables**: `KEY_NAME and VALUE` ( as provided in the .env)

5. Click **Deploy**



