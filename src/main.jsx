import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import App from './App.jsx'
console.log(
  "%cDeveloped by Vedant Purkar | vedant.purkar05@gmail.com",
  "font-weight: bold;"
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
