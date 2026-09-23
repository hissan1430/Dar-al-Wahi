import React, { useState, FormEvent } from 'react';
import { useGlossary } from '../hooks/useGlossary';
import { GlossaryCategory, GlossaryTerm } from '../types/glossary';
import { Search, BookOpen, Plus, Trash2, Edit3, X, Check, RotateCcw, Copy, ExternalLink, Sparkles } from 'lucide-react';

const CATEGORIES: (GlossaryCategory | 'All')[] = [
  'All',
  'ʿAqīdah',
  'Manhaj',
  'Ḥadīth',
  'Uṣūl',
  'Sects & Groups',
  'Heart-Softeners',
  'General'
];

export function Glossary() {
  const {
    filteredTerms,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    addTerm,
    updateTerm,
    deleteTerm,
    resetToDefaults,
    totalCount
  } = useGlossary();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTerm, setEditingTerm] = useState<GlossaryTerm | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form State for Add/Edit
  const [formData, setFormData] = useState({
    term: '',
    arabic: '',
    transliteration: '',
    category: 'ʿAqīdah' as GlossaryCategory,
    definition: '',
    context: '',
    aliases: '',
    source: ''
  });

  const handleOpenAdd = () => {
    setFormData({
      term: '',
      arabic: '',
      transliteration: '',
      category: 'ʿAqīdah',
      definition: '',
      context: '',
      aliases: '',
      source: ''
    });
    setEditingTerm(null);
    setIsAddModalOpen(true);
  };

  const handleOpenEdit = (term: GlossaryTerm) => {
    setEditingTerm(term);
    setFormData({
      term: term.term,
      arabic: term.arabic || '',
      transliteration: term.transliteration || '',
      category: term.category,
      definition: term.definition,
      context: term.context || '',
      aliases: (term.aliases || []).join(', '),
      source: term.source || ''
    });
    setIsAddModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.term.trim() || !formData.definition.trim()) return;

    const aliasList = formData.aliases
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    if (editingTerm) {
      updateTerm(editingTerm.id, {
        term: formData.term.trim(),
        arabic: formData.arabic.trim() || undefined,
        transliteration: formData.transliteration.trim() || undefined,
        category: formData.category,
        definition: formData.definition.trim(),
        context: formData.context.trim() || undefined,
        aliases: aliasList.length > 0 ? aliasList : [formData.term.toLowerCase()],
        source: formData.source.trim() || undefined
      });
    } else {
      addTerm({
        term: formData.term.trim(),
        arabic: formData.arabic.trim() || undefined,
        transliteration: formData.transliteration.trim() || undefined,
        category: formData.category,
        definition: formData.definition.trim(),
        context: formData.context.trim() || undefined,
        aliases: aliasList.length > 0 ? aliasList : [formData.term.toLowerCase()],
        source: formData.source.trim() || undefined
      });
    }

    setIsAddModalOpen(false);
  };

  const handleCopy = (term: GlossaryTerm) => {
    const text = `${term.term} ${term.arabic ? `(${term.arabic})` : ''}\nCategory: ${term.category}\n\nDefinition:\n${term.definition}${term.context ? `\n\nContext of the Salaf:\n${term.context}` : ''}${term.source ? `\n\nSource: ${term.source}` : ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Classical Terminology & Creed
        </div>
        <h1 className="font-heading text-4xl font-bold text-slate-900">
          Glossary of Classical Terms
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Accurate definitions and contextual clarifications of foundational theological and legal terms according to the understanding of the Salaf aṣ-Ṣāliḥ.
        </p>
      </div>

      {/* Control Bar: Search, Category Filters, and Add Term button */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms, Arabic script, or definitions..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleOpenAdd}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-xs"
            >
              <Plus className="w-4 h-4" />
              Add Term
            </button>
            <button
              onClick={() => {
                if (window.confirm('Reset glossary to the original classical definitions?')) {
                  resetToDefaults();
                }
              }}
              className="p-2.5 text-slate-400 hover:text-slate-700 bg-slate-50 border border-slate-200 rounded-xl transition-colors"
              title="Reset default terms"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs font-medium text-slate-500 px-1">
          <span>Showing {filteredTerms.length} of {totalCount} terms</span>
          <span>Click any term in articles & treatises to view quick definitions</span>
        </div>

        {filteredTerms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-heading text-lg font-semibold text-slate-800">No terms found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              No glossary terms match your current search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Category & Actions */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200/60">
                      {item.category}
                    </span>

                    <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleCopy(item)}
                        className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Copy Definition"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                        title="Edit term"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      {item.isCustom && (
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${item.term}" from glossary?`)) {
                              deleteTerm(item.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete term"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Title & Arabic */}
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {item.term}
                    </h3>
                    {item.arabic && (
                      <span className="font-arabic text-2xl font-bold text-primary" dir="rtl">
                        {item.arabic}
                      </span>
                    )}
                  </div>

                  {item.transliteration && (
                    <p className="text-xs text-slate-500 font-medium italic mb-3">
                      {item.transliteration}
                    </p>
                  )}

                  {/* Definition */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 font-serif">
                    {item.definition}
                  </p>

                  {/* Context of the Salaf */}
                  {item.context && (
                    <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 text-xs text-amber-950/90 leading-relaxed mb-3">
                      <span className="font-semibold block text-amber-900 mb-1">
                        Insight of the Salaf:
                      </span>
                      {item.context}
                    </div>
                  )}
                </div>

                {/* Footer Source */}
                {item.source && (
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 italic">
                    Source: {item.source}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading text-lg font-bold text-slate-900">
                {editingTerm ? 'Edit Classical Term' : 'Add Term to Glossary'}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Term (English / Transliteration)*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.term}
                    onChange={e => setFormData({ ...formData, term: e.target.value })}
                    placeholder="e.g. Ta'wīl"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Arabic Script (Optional)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={formData.arabic}
                    onChange={e => setFormData({ ...formData, arabic: e.target.value })}
                    placeholder="تأويل"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-arabic text-right focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value as GlossaryCategory })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Transliteration Guide
                  </label>
                  <input
                    type="text"
                    value={formData.transliteration}
                    onChange={e => setFormData({ ...formData, transliteration: e.target.value })}
                    placeholder="e.g. Taʾwīl"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Classical Definition*
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.definition}
                  onChange={e => setFormData({ ...formData, definition: e.target.value })}
                  placeholder="Explain the linguistic and terminological meaning according to the Salaf..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Context / Saying of the Salaf (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.context}
                  onChange={e => setFormData({ ...formData, context: e.target.value })}
                  placeholder="e.g. Imām ash-Shāfi'ī said concerning this..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Search Aliases (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.aliases}
                    onChange={e => setFormData({ ...formData, aliases: e.target.value })}
                    placeholder="e.g. taweel, tawil, ta'wil"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Classical Source / Reference
                  </label>
                  <input
                    type="text"
                    value={formData.source}
                    onChange={e => setFormData({ ...formData, source: e.target.value })}
                    placeholder="e.g. Sharḥ Uṣūl I'tiqād"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-xs"
                >
                  {editingTerm ? 'Save Changes' : 'Add Term'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
