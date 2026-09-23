import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'dar_al_wahi_bookmarks';
const BOOKMARKS_EVENT = 'dar_al_wahi_bookmarks_updated';

// Read initial state from localStorage safely
function getStoredBookmarks(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse bookmarks", e);
    return [];
  }
}

// In-memory single source of truth for all components
let globalBookmarks: string[] = getStoredBookmarks();
const listeners = new Set<(bookmarks: string[]) => void>();

function notifyListeners() {
  listeners.forEach(listener => listener([...globalBookmarks]));
  // Also dispatch window custom event for any other subscribers / tabs
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(BOOKMARKS_EVENT, { detail: globalBookmarks }));
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => globalBookmarks);

  useEffect(() => {
    // Sync current state immediately in case it changed before mount
    setBookmarks([...globalBookmarks]);

    const handleUpdate = (updated: string[]) => {
      setBookmarks(updated);
    };

    listeners.add(handleUpdate);

    // Cross-tab storage event listener
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        try {
          const fresh = e.newValue ? JSON.parse(e.newValue) : [];
          globalBookmarks = fresh;
          notifyListeners();
        } catch (err) {
          console.error("Error syncing bookmarks from storage event", err);
        }
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    // Read freshest from localStorage if possible to avoid any race condition
    const current = getStoredBookmarks();
    const updated = current.includes(id)
      ? current.filter(b => b !== id)
      : [...current, id];

    globalBookmarks = updated;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save bookmarks to localStorage", e);
    }
    notifyListeners();
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return bookmarks.includes(id);
  }, [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked };
}

