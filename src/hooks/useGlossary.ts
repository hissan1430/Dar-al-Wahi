import { useState, useEffect, useCallback, useMemo } from 'react';
import { GlossaryTerm, GlossaryCategory } from '../types/glossary';
import { DEFAULT_GLOSSARY_TERMS } from '../data/glossary';

const GLOSSARY_STORAGE_KEY = 'dar_al_wahi_glossary_v2';
const LEGACY_STORAGE_KEY = 'dar_al_wahi_glossary_v1';

export function useGlossary() {
  const [terms, setTerms] = useState<GlossaryTerm[]>(() => {
    try {
      const stored = localStorage.getItem(GLOSSARY_STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (stored) {
        const parsed: GlossaryTerm[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Create a set of IDs already in the user's stored list
          const existingIds = new Set(parsed.map(t => t.id));
          const existingTermsLower = new Set(parsed.map(t => t.term.toLowerCase()));

          // Find any default terms that are missing in the stored list
          const missingDefaults = DEFAULT_GLOSSARY_TERMS.filter(
            def => !existingIds.has(def.id) && !existingTermsLower.has(def.term.toLowerCase())
          );

          if (missingDefaults.length > 0) {
            // Also update any outdated default items if the user hasn't marked them as custom
            const merged = [
              ...parsed,
              ...missingDefaults
            ];
            // Persist the merged list to the new key
            localStorage.setItem(GLOSSARY_STORAGE_KEY, JSON.stringify(merged));
            return merged;
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading glossary from localStorage:', e);
    }
    return DEFAULT_GLOSSARY_TERMS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory | 'All'>('All');

  // Sync to localStorage
  const saveTerms = useCallback((updated: GlossaryTerm[]) => {
    setTerms(updated);
    try {
      localStorage.setItem(GLOSSARY_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save glossary terms:', e);
    }
  }, []);

  const addTerm = useCallback((newTerm: Omit<GlossaryTerm, 'id' | 'isCustom'>) => {
    const id = newTerm.term.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now();
    const termWithId: GlossaryTerm = {
      ...newTerm,
      id,
      isCustom: true,
      aliases: newTerm.aliases?.filter(Boolean) || [newTerm.term.toLowerCase()]
    };
    saveTerms([termWithId, ...terms]);
    return termWithId;
  }, [terms, saveTerms]);

  const updateTerm = useCallback((id: string, updatedFields: Partial<GlossaryTerm>) => {
    const updated = terms.map(t => t.id === id ? { ...t, ...updatedFields } : t);
    saveTerms(updated);
  }, [terms, saveTerms]);

  const deleteTerm = useCallback((id: string) => {
    const updated = terms.filter(t => t.id !== id);
    saveTerms(updated);
  }, [terms, saveTerms]);

  const resetToDefaults = useCallback(() => {
    saveTerms(DEFAULT_GLOSSARY_TERMS);
  }, [saveTerms]);

  // Lookup map by term and aliases (lowercase)
  const lookupMap = useMemo(() => {
    const map = new Map<string, GlossaryTerm>();
    for (const item of terms) {
      map.set(item.term.toLowerCase(), item);
      if (item.aliases) {
        for (const alias of item.aliases) {
          map.set(alias.toLowerCase().trim(), item);
        }
      }
    }
    return map;
  }, [terms]);

  const findTerm = useCallback((wordOrPhrase: string): GlossaryTerm | undefined => {
    const cleaned = wordOrPhrase.toLowerCase().trim();
    return lookupMap.get(cleaned);
  }, [lookupMap]);

  // Filtered terms list
  const filteredTerms = useMemo(() => {
    return terms.filter(t => {
      const matchCategory = selectedCategory === 'All' || t.category === selectedCategory;
      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        t.term.toLowerCase().includes(q) ||
        (t.arabic && t.arabic.includes(q)) ||
        (t.transliteration && t.transliteration.toLowerCase().includes(q)) ||
        t.definition.toLowerCase().includes(q) ||
        (t.context && t.context.toLowerCase().includes(q)) ||
        (t.aliases && t.aliases.some(a => a.toLowerCase().includes(q)))
      );
    });
  }, [terms, selectedCategory, searchQuery]);

  return {
    terms,
    filteredTerms,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    findTerm,
    addTerm,
    updateTerm,
    deleteTerm,
    resetToDefaults,
    totalCount: terms.length,
  };
}
