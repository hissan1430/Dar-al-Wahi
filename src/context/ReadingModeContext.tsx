import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ReadingModeContextType {
  isReadingMode: boolean;
  setIsReadingMode: (value: boolean) => void;
  toggleReadingMode: () => void;
}

const ReadingModeContext = createContext<ReadingModeContextType>({
  isReadingMode: false,
  setIsReadingMode: () => {},
  toggleReadingMode: () => {},
});

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [isReadingMode, setIsReadingMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('dar_alwahi_reading_mode') === 'true';
    } catch {
      return false;
    }
  });

  const toggleReadingMode = () => {
    setIsReadingMode(prev => {
      const next = !prev;
      try {
        localStorage.setItem('dar_alwahi_reading_mode', String(next));
      } catch {
        // ignore storage error
      }
      return next;
    });
  };

  const handleSetReadingMode = (val: boolean) => {
    setIsReadingMode(val);
    try {
      localStorage.setItem('dar_alwahi_reading_mode', String(val));
    } catch {
      // ignore storage error
    }
  };

  // Keyboard shortcut: Press Escape to exit reading mode (if not focused in input)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isReadingMode) {
        if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
        setIsReadingMode(false);
        try {
          localStorage.setItem('dar_alwahi_reading_mode', 'false');
        } catch {
          // ignore storage error
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReadingMode]);

  return (
    <ReadingModeContext.Provider
      value={{
        isReadingMode,
        setIsReadingMode: handleSetReadingMode,
        toggleReadingMode,
      }}
    >
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  return useContext(ReadingModeContext);
}
