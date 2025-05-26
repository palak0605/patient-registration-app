# 🏥 Patient Registration App

A frontend-only React application that allows you to register patients, view stored records, and run raw SQL queries — all using PGlite (SQLite in the browser via WebAssembly).

---

## 🚀 Features

- ✅ Register new patients (name, age, gender, etc.)
- ✅ Store data persistently using [PGlite](https://github.com/electric-sql/pglite)
- ✅ Use raw SQL to query the patient database
- ✅ Real-time synchronization across multiple browser tabs
- ✅ Fast, offline-capable frontend built with Vite + React

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com//patient-registration-app.git
cd patient-registration-app


## Challenges
1. Setting up Pglite with react app
2. Since the app runs fully on the frontend, ensuring performance and reliability entirely within the browser environment was a key challenge


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

