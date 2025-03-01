import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS (you'll need to replace this with your actual public key)
// import emailjs from '@emailjs/browser';
// emailjs.init("YOUR_PUBLIC_KEY");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
