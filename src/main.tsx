import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Clear any stale cached service workers from older builds and auto-update
if ('serviceWorker' in navigator) {
  // If an update is detected, skip waiting and reload instantly
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}

// Automatically check and activate updates immediately
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    updateSW(true);
  },
  onOfflineReady() {
    // app is cached for offline use
  },
  onRegisteredSW(_swUrl, r) {
    if (r) {
      // Force an immediate check for a newer version
      r.update();
      setInterval(() => {
        r.update();
      }, 5 * 60 * 1000);

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

