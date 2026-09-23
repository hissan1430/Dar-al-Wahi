import { useState, useEffect } from 'react';

export interface Note {
  documentId: string;
  content: string;
  lastUpdated: string;
}

export function useAllNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const loadNotes = () => {
      const savedNotes = localStorage.getItem('dar_al_wahi_notes');
      if (savedNotes) {
        try {
          setNotes(JSON.parse(savedNotes) as Note[]);
        } catch (e) {
          console.error('Failed to parse notes');
        }
      }
    };
    loadNotes();
    window.addEventListener('storage', loadNotes);
    return () => window.removeEventListener('storage', loadNotes);
  }, []);

  const deleteNote = (documentId: string) => {
    const savedNotes = localStorage.getItem('dar_al_wahi_notes');
    if (savedNotes) {
      try {
        let parsed = JSON.parse(savedNotes) as Note[];
        parsed = parsed.filter(n => n.documentId !== documentId);
        localStorage.setItem('dar_al_wahi_notes', JSON.stringify(parsed));
        setNotes(parsed);
      } catch (e) {}
    }
  };

  return { notes, deleteNote };
}

export function useNotes(documentId: string) {
  const [noteContent, setNoteContent] = useState<string>('');
  
  useEffect(() => {
    const savedNotes = localStorage.getItem('dar_al_wahi_notes');
    if (savedNotes) {
      try {
        const parsed = JSON.parse(savedNotes) as Note[];
        const docNote = parsed.find(n => n.documentId === documentId);
        if (docNote) {
          setNoteContent(docNote.content);
        } else {
          setNoteContent('');
        }
      } catch (e) {
        console.error('Failed to parse notes from local storage');
      }
    } else {
      setNoteContent('');
    }
  }, [documentId]);

  const saveNote = (content: string) => {
    setNoteContent(content);
    
    const savedNotes = localStorage.getItem('dar_al_wahi_notes');
    let parsed: Note[] = [];
    if (savedNotes) {
      try {
        parsed = JSON.parse(savedNotes);
      } catch (e) {}
    }
    
    const existingIdx = parsed.findIndex(n => n.documentId === documentId);
    if (existingIdx !== -1) {
      parsed[existingIdx].content = content;
      parsed[existingIdx].lastUpdated = new Date().toISOString();
    } else {
      parsed.push({
        documentId,
        content,
        lastUpdated: new Date().toISOString()
      });
    }
    
    localStorage.setItem('dar_al_wahi_notes', JSON.stringify(parsed));
  };

  return {
    noteContent,
    saveNote
  };
}
