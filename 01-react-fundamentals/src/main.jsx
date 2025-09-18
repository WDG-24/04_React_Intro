import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Auch die main.jsx bleibt meist unangetastet
// Hier ist unsere Brücke zwischen React-Welt und dem Browser

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
