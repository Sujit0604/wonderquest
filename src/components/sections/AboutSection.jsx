import { useState } from 'react';
import { BookOpen, Sparkles, HeartHandshake, Compass, CheckCircle, Volume2 } from 'lucide-react';
import { aboutData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';
import { PippinCharacter, LunaCharacter, BarnabyCharacter, SparkCharacter } from '../common/Characters';
import { fireConfetti } from '../../utils/confetti';

export default function AboutSection() {
  const [selectedCharacter, setSelectedCharacter] = useState(aboutData.characters[0].id);

  const getCharacterComponent = (id) => {
    switch (id) {
      case 'pippin':
        return <PippinCharacter className="w-28 h-28 sm:w-32 sm:h-32" />;
      case 'luna':
        return <LunaCharacter className="w-28 h-28 sm:w-32 sm:h-32" />;
      case 'barnaby':
        return <BarnabyCharacter className="w-28 h-28 sm:w-32 sm:h-32" />;
      case 'spark':
        return <SparkCharacter className="w-28 h-28 sm:w-32 sm:h-32" />;
      default:
        return <PippinCharacter className="w-28 h-28" />;
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background soft shapes */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          tag={aboutData.sectionTag}
          title={aboutData.title}
          subtitle={aboutData.description}
          tagVariant="amber"
        />

        {/* Story Lore & Age Target Banner */}
        <div className="mb-16 bg-gradient-to-r from-sky-50 via-indigo-50/60 to-purple-50 rounded-3xl p-6 sm:p-10 border border-sky-100/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-indigo-700 border border-indigo-200">
                <Compass className="w-3.5 h-3.5" /> Target Age Group: Ages 3 to 8
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                Welcome to the Archipelago of Wonder
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {aboutData.storyLore}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Toddler (Ages 3–4) Tactile Mode
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Preschool (Ages 5–6) Phonics Lab
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Elementary (Ages 7–8) Logic Quests
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-indigo-100 shadow-sm text-center">
              <span className="text-4xl font-black text-indigo-600 mb-1">100%</span>
              <span className="text-sm font-black text-slate-900 mb-1">Montessori &amp; Play-Aligned</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Designed to stimulate natural curiosity rather than compulsive reward loops.
              </p>
            </div>
          </div>
        </div>

        {/* Character Showcase "Meet the Pals" */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Meet the Animal Learning Guides
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Each animal pal embodies an essential childhood learning pillar. Tap any friend to discover their superpower!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.characters.map((char) => {
              const isSelected = selectedCharacter === char.id;
              return (
                <div
                  key={char.id}
                  onClick={() => {
                    setSelectedCharacter(char.id);
                    fireConfetti({ particleCount: 20 });
                  }}
                  className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col items-center text-center border-2 ${
                    isSelected
                      ? 'bg-white border-amber-400 shadow-xl scale-[1.03] ring-4 ring-amber-100'
                      : 'bg-slate-50/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Badge */}
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 mb-4">
                    {char.badge}
                  </span>

                  {/* Character Illustration */}
                  <div className="mb-4">
                    {getCharacterComponent(char.id)}
                  </div>

                  <h4 className="text-xl font-black text-slate-900 mb-1">{char.name}</h4>
                  <p className="text-xs font-bold text-sky-600 mb-2">{char.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{char.trait}</p>

                  {/* Character Voice Quote Box */}
                  <div className="mt-auto w-full bg-slate-100/80 rounded-2xl p-2.5 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 border border-slate-200">
                    <Volume2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>"{char.soundEffect}"</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              What Makes WonderQuest Different?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-5">
                  {getIcon(pillar.icon)}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
