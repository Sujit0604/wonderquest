import { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle } from 'lucide-react';
import { legalDocs } from '../../data/legalData';

/**
 * Accessible Legal Documents Modal
 */
export default function LegalModal({ docId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (docId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [docId, onClose]);

  if (!docId) return null;

  const doc = legalDocs[docId] || legalDocs.privacy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-100 text-sky-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="legal-modal-title" className="font-extrabold text-slate-900 text-lg sm:text-xl">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">Effective Date: {doc.effectiveDate}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                {section.heading}
              </h4>
              <p className="text-slate-600 pl-6 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full font-bold bg-slate-900 text-white hover:bg-slate-800 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
