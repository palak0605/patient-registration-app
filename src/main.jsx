import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { PGliteProvider } from '@electric-sql/pglite-react'
import { db } from "./db.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PGliteProvider db={db}>
      <App />

    </PGliteProvider>
  </StrictMode>,
)
