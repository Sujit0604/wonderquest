import { useState } from 'react';
import { Puzzle, BookMarked, Palette, ShieldAlert, Trophy, Plane, Sparkles, CheckCircle2 } from 'lucide-react';
import { featuresData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredFeatures = activeTab === 'all'
    ? featuresData.items
    : featuresData.items.filter(item => item.ageCategory === 'all' || item.ageCategory === activeTab);

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Puzzle':
        return <Puzzle className="w-7 h-7 text-amber-600" />;
      case 'BookMarked':
        return <BookMarked className="w-7 h-7 text-sky-600" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-rose-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-emerald-600" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-purple-600" />;
      case 'Plane':
        return <Plane className="w-7 h-7 text-cyan-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={featuresData.sectionTag}
          title={featuresData.title}
          subtitle={featuresData.subtitle}
          tagVariant="blue"
        />

        {/* Age Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {featuresData.ageFilterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Soft decorative gradient pill header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${feature.accentBg}`}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Benefit Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feature.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 font-medium">
            💡 All features are included in every family plan with zero extra in-app microtransactions.
          </p>
        </div>
      </div>
    </section>
  );
}
