import { useState, useEffect } from 'react';

interface ReadingStats {
  readBooks: string[];
  timeSpentSeconds: number;
  categoryViews: Record<string, number>;
}

const defaultStats: ReadingStats = {
  readBooks: [],
  timeSpentSeconds: 0,
  categoryViews: {}
};

export function useReadingStats() {
  const [stats, setStats] = useState<ReadingStats>(() => {
    try {
      const saved = localStorage.getItem('reading_stats');
      return saved ? JSON.parse(saved) : defaultStats;
    } catch {
      return defaultStats;
    }
  });

  useEffect(() => {
    localStorage.setItem('reading_stats', JSON.stringify(stats));
  }, [stats]);

  const markAsRead = (id: string) => {
    setStats(prev => ({
      ...prev,
      readBooks: prev.readBooks.includes(id) ? prev.readBooks : [...prev.readBooks, id]
    }));
  };

  const unmarkAsRead = (id: string) => {
    setStats(prev => ({
      ...prev,
      readBooks: prev.readBooks.filter(bookId => bookId !== id)
    }));
  };

  const addTime = (seconds: number) => {
    setStats(prev => ({
      ...prev,
      timeSpentSeconds: prev.timeSpentSeconds + seconds
    }));
  };

  const recordCategoryView = (category: string) => {
    setStats(prev => ({
      ...prev,
      categoryViews: {
        ...prev.categoryViews,
        [category]: (prev.categoryViews[category] || 0) + 1
      }
    }));
  };

  return {
    stats,
    markAsRead,
    unmarkAsRead,
    addTime,
    recordCategoryView
  };
}
