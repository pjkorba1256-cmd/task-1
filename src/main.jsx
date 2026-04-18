import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="393306707783-3vkdta7j99gppcgtp0g29bev4bq4q5hk.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
)