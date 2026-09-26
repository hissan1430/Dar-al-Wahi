import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Automatically check and activate updates immediately
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    // Reload when a new version is detected so users always get the latest layout
    updateSW(true);
  },
  onOfflineReady() {
    // app is cached for offline use
  },
  onRegisteredSW(_swUrl, r) {
    if (r) {
      // Check for updates when user returns to the tab or periodically every 15 minutes
      setInterval(() => {
        r.update();
      }, 15 * 60 * 1000);

      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          r.update();
        }
      });
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

