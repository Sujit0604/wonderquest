import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([faqData.items[0].id]); // First open by default

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (openItems.length === faqData.items.length) {
      setOpenItems([]);
    } else {
      setOpenItems(faqData.items.map((i) => i.id));
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={faqData.sectionTag}
          title={faqData.title}
          subtitle={faqData.subtitle}
          tagVariant="blue"
        />

        {/* Expand / Collapse All control */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleExpandAll}
            className="text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors cursor-pointer"
          >
            {openItems.length === faqData.items.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.items.map((item) => {
            const isOpen = openItems.includes(item.id);
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 group"
                >
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-sky-600 transition-colors pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200 font-normal"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Have a question not listed here?</p>
              <p className="text-xs text-slate-500">Our family support &amp; curriculum specialists are here for you.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white transition-colors"
          >
            Send Us a Message
          </a>
        </div>
      </div>
    </section>
  );
}
