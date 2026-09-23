import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Automatically check and activate updates immediately on mobile devices
registerSW({
  immediate: true,
  onNeedRefresh() {
    // Reload when a new version is detected so users always get the latest layout
    window.location.reload();
  },
  onOfflineReady() {
    // app is cached for offline use
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

