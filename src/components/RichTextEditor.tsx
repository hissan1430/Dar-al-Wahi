import React, { useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, Type } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function RichTextEditor({ value, onChange, placeholder, className = '' }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      if (document.activeElement !== editorRef.current) {
        editorRef.current.innerHTML = value;
      }
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, arg?: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, arg);
    handleInput();
  };

  return (
    <div className={`flex flex-col h-full bg-white text-slate-800 ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-slate-200 bg-slate-50 sticky top-0 z-10 flex-wrap">
        <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
          <select 
            onChange={(e) => execCommand('fontName', e.target.value)}
            className="text-xs bg-white border border-slate-200 rounded px-1.5 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer shadow-2xs"
            title="Font Family"
            defaultValue="serif"
          >
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans Serif</option>
            <option value="monospace">Monospace</option>
          </select>
          <select 
            onChange={(e) => execCommand('fontSize', e.target.value)}
            className="text-xs bg-white border border-slate-200 rounded px-1.5 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer shadow-2xs"
            title="Font Size"
            defaultValue="3"
          >
            <option value="3">Normal</option>
            <option value="2">Small</option>
            <option value="4">Large</option>
            <option value="5">Huge</option>
          </select>
        </div>

        <button 
          type="button"
          onMouseDown={(e) => { e.preventDefault(); execCommand('bold'); }} 
          className="p-1.5 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 rounded transition-colors cursor-pointer" 
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button 
          type="button"
          onMouseDown={(e) => { e.preventDefault(); execCommand('italic'); }} 
          className="p-1.5 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 rounded transition-colors cursor-pointer" 
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button 
          type="button"
          onMouseDown={(e) => { e.preventDefault(); execCommand('underline'); }} 
          className="p-1.5 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 rounded transition-colors cursor-pointer" 
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-slate-300 mx-1"></div>
        <button 
          type="button"
          onMouseDown={(e) => { e.preventDefault(); execCommand('insertUnorderedList'); }} 
          className="p-1.5 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 rounded transition-colors cursor-pointer" 
          title="Bullet Points"
        >
          <List className="w-4 h-4" />
        </button>
        <button 
          type="button"
          onMouseDown={(e) => { e.preventDefault(); execCommand('insertOrderedList'); }} 
          className="p-1.5 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 rounded transition-colors cursor-pointer" 
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
      </div>
      
      {/* Editor Area */}
      <div 
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        className="rich-text-editor note-rich-text flex-1 p-5 focus:outline-none overflow-y-auto font-serif text-slate-800 leading-relaxed min-h-[150px] bg-white selection:bg-amber-100"
        style={{ outline: 'none' }}
        data-placeholder={placeholder}
      />
      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #94a3b8;
          pointer-events: none;
          display: block;
        }
        .rich-text-editor ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
          margin-top: 0.5rem !important;
          margin-bottom: 0.5rem !important;
        }
        .rich-text-editor ol {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
          margin-top: 0.5rem !important;
          margin-bottom: 0.5rem !important;
        }
        .rich-text-editor li {
          display: list-item !important;
          margin-bottom: 0.25rem !important;
        }
      `}</style>
    </div>
  );
}
