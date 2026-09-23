import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAllNotes } from '../hooks/useNotes';
import { MOCK_DATA } from '../data';
import { PenTool, Trash2, ArrowRight, Share2, Download, Check, CheckSquare, Square, Loader2, FileDown } from 'lucide-react';
import { exportNotesToPdf, NoteToExport } from '../utils/pdfExport';

export function Notes() {
  const { notes, deleteNote } = useAllNotes();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [exportingNoteId, setExportingNoteId] = useState<string | null>(null);

  const notesWithMeta: NoteToExport[] = notes.map(note => {
    const doc = MOCK_DATA.find(d => d.id === note.documentId);
    return {
      documentId: note.documentId,
      content: note.content,
      lastUpdated: note.lastUpdated,
      title: doc?.title || 'Unknown Document',
      category: doc?.category || 'Unknown Category',
      author: doc?.author || doc?.speaker || 'Unknown',
      citation: doc?.citation || 'Dar al-Wahi Library',
    };
  }).filter(n => n.content.trim().length > 0).sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());

  // Initialize all selected by default when notes are loaded
  useEffect(() => {
    if (notesWithMeta.length > 0 && selectedIds.length === 0) {
      setSelectedIds(notesWithMeta.map(n => n.documentId));
    }
  }, [notes.length]);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === notesWithMeta.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(notesWithMeta.map(n => n.documentId));
    }
  };

  const handleExportSelected = async () => {
    const notesToExport = notesWithMeta.filter(n => selectedIds.includes(n.documentId));
    if (notesToExport.length === 0) return;

    setIsExporting(true);
    try {
      await exportNotesToPdf(notesToExport);
    } catch (err) {
      console.error('Failed to export notes', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportSingle = async (note: NoteToExport, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setExportingNoteId(note.documentId);
    try {
      await exportNotesToPdf([note]);
    } catch (err) {
      console.error('Failed to export single note', err);
    } finally {
      setExportingNoteId(null);
    }
  };

  const handleShare = async (note: NoteToExport) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = note.content;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";

    const shareText = `Notes on: ${note.title}\nBy: ${note.author}\n\n${plainText.trim()}\n\nReference: ${note.citation}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Notes: ${note.title}`,
          text: shareText
        });
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          fallbackCopy(note.documentId, shareText);
        }
      }
    } else {
      fallbackCopy(note.documentId, shareText);
    }
  };

  const fallbackCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const allSelected = notesWithMeta.length > 0 && selectedIds.length === notesWithMeta.length;
  const someSelected = selectedIds.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 print:py-0 print:px-0 print:max-w-none">
      {/* Header & Main Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <PenTool className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">My Notes</h1>
            <p className="text-xs sm:text-sm text-slate-500">Manage, export, and review your personal reflections</p>
          </div>
        </div>

        {notesWithMeta.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start md:self-auto">
            <button
              onClick={toggleSelectAll}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              {allSelected ? (
                <>
                  <CheckSquare className="w-4 h-4 text-primary" />
                  <span>Deselect All</span>
                </>
              ) : (
                <>
                  <Square className="w-4 h-4 text-slate-400" />
                  <span>Select All ({selectedIds.length}/{notesWithMeta.length})</span>
                </>
              )}
            </button>

            <button 
              onClick={handleExportSelected}
              disabled={!someSelected || isExporting}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 font-medium text-xs sm:text-sm rounded-lg transition-all shadow-sm cursor-pointer ${
                someSelected && !isExporting
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
              title={someSelected ? `Export ${selectedIds.length} selected notes to PDF` : 'Select at least one note to export'}
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Export Selected ({selectedIds.length})</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {notesWithMeta.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300 print:hidden">
          <p className="text-slate-600 font-medium mb-1">You haven't taken any notes yet.</p>
          <p className="text-sm text-slate-400">Notes you take in the reader panel will automatically appear here.</p>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {notesWithMeta.map(note => {
            const isSelected = selectedIds.includes(note.documentId);
            const isSingleExporting = exportingNoteId === note.documentId;

            return (
              <div 
                key={note.documentId} 
                className={`bg-white border rounded-xl p-5 sm:p-6 shadow-2xs transition-all relative group ${
                  isSelected ? 'border-primary/40 ring-1 ring-primary/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Selection Checkbox */}
                  <button
                    type="button"
                    onClick={() => toggleSelect(note.documentId)}
                    className="mt-1 flex-shrink-0 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    title={isSelected ? "Uncheck to exclude from bulk export" : "Check to include in bulk export"}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 text-primary" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                    )}
                  </button>

                  {/* Main Note Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded">
                        {note.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(note.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1">
                      {note.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-3">By {note.author}</p>

                    {/* Rich text container with preserved bullet points and styling */}
                    <div className="bg-yellow-50/40 border border-amber-100/80 p-4 sm:p-5 rounded-lg">
                      <div 
                        className="note-rich-text rich-text-editor text-slate-800 text-sm font-serif leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                    </div>

                    <div className="mt-3 text-xs text-slate-500 italic">
                      Ref: {note.citation}
                    </div>
                  </div>

                  {/* Action Buttons Column */}
                  <div className="flex flex-col items-center gap-1.5 sm:pl-3 sm:border-l border-slate-100 flex-shrink-0">
                    {/* Individual Export Button */}
                    <button
                      onClick={(e) => handleExportSingle(note, e)}
                      disabled={isSingleExporting}
                      className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                      title="Export this individual note to PDF"
                    >
                      {isSingleExporting ? (
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      ) : (
                        <FileDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Share / Copy Button */}
                    <button
                      onClick={() => handleShare(note)}
                      className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                      title="Share or Copy note text"
                    >
                      {copiedId === note.documentId ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>

                    {/* Open in Viewer Button */}
                    <Link 
                      to={`/viewer/${note.documentId}`}
                      className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                      title="Open document in reader"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* Delete Note Button */}
                    <button
                      onClick={() => deleteNote(note.documentId)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete this note"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
