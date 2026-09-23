import { useState, useEffect, useCallback } from 'react';

export interface DocumentProgress {
  documentId: string;
  currentPage?: number;
  totalPages?: number;
  progressPercent: number; // 0 to 100
  scrollRatio?: number; // 0 to 1
  lastReadAt: string; // ISO string
  isFinished?: boolean;
}

const STORAGE_KEY = 'dar_al_wahi_reading_progress';
const EVENT_NAME = 'dar_al_wahi_progress_update';

function loadStoredProgress(): Record<string, DocumentProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error('Failed to load reading progress', err);
    return {};
  }
}

function saveStoredProgress(data: Record<string, DocumentProgress>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error('Failed to save reading progress', err);
  }
}

export function useReadingProgress() {
  const [progressMap, setProgressMap] = useState<Record<string, DocumentProgress>>(() => loadStoredProgress());

  useEffect(() => {
    const handleStorage = () => {
      setProgressMap(loadStoredProgress());
    };

    window.addEventListener(EVENT_NAME, handleStorage);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(EVENT_NAME, handleStorage);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const updateProgress = useCallback((update: {
    documentId: string;
    currentPage?: number;
    totalPages?: number;
    progressPercent?: number;
    scrollRatio?: number;
    isFinished?: boolean;
  }) => {
    setProgressMap(prev => {
      const existing = prev[update.documentId] || {};
      
      let calcPercent = update.progressPercent;
      if (calcPercent === undefined) {
        if (update.currentPage && update.totalPages && update.totalPages > 0) {
          calcPercent = Math.min(100, Math.round((update.currentPage / update.totalPages) * 100));
        } else if (update.scrollRatio !== undefined) {
          calcPercent = Math.min(100, Math.round(update.scrollRatio * 100));
        } else {
          calcPercent = existing.progressPercent || 0;
        }
      }

      const updatedDoc: DocumentProgress = {
        ...existing,
        ...update,
        progressPercent: Math.max(0, Math.min(100, calcPercent)),
        lastReadAt: new Date().toISOString(),
      };

      const newMap = {
        ...prev,
        [update.documentId]: updatedDoc,
      };

      saveStoredProgress(newMap);
      return newMap;
    });
  }, []);

  const getProgress = useCallback((documentId: string): DocumentProgress | undefined => {
    return progressMap[documentId];
  }, [progressMap]);

  const clearProgress = useCallback((documentId: string) => {
    setProgressMap(prev => {
      const newMap = { ...prev };
      delete newMap[documentId];
      saveStoredProgress(newMap);
      return newMap;
    });
  }, []);

  // Sorted list of recently read documents (most recent first)
  const recentReads: DocumentProgress[] = (Object.values(progressMap) as DocumentProgress[])
    .filter(p => p.progressPercent > 0 || (p.currentPage && p.currentPage > 1))
    .sort((a, b) => new Date(b.lastReadAt).getTime() - new Date(a.lastReadAt).getTime());

  const latestRead: DocumentProgress | undefined = recentReads.length > 0 ? recentReads[0] : undefined;

  return {
    progressMap,
    recentReads,
    latestRead,
    getProgress,
    updateProgress,
    clearProgress,
  };
}
