import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/index.css';
import App from './App.jsx';
import { ThemeProvider } from './ThemeContext'; // ⬅️ Add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
