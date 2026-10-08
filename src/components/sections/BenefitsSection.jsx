import { useState } from 'react';
import { ShieldCheck, Clock, BarChart3, CreditCard, Users, Award, Check, Moon, Sun, Lock } from 'lucide-react';
import { parentBenefitsData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';

export default function BenefitsSection() {
  const [timerMinutes, setTimerMinutes] = useState(20);
  const [bedtimeActive, setBedtimeActive] = useState(false);

  const getBenefitIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-sky-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-purple-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-amber-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-rose-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-indigo-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="parents" className="py-20 md:py-28 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={parentBenefitsData.sectionTag}
          title={parentBenefitsData.title}
          subtitle={parentBenefitsData.subtitle}
          tagVariant="emerald"
        />

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {parentBenefitsData.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-xs">
                    {getBenefitIcon(benefit.icon)}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {benefit.metric}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{benefit.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Bedtime Smart-Timer Feature Sandbox for Parents */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-800/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                <Moon className="w-3.5 h-3.5 text-amber-400" /> Interactive Parent Sandbox
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Try the Meltdown-Free Wind-Down Feature
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Parents choose a session duration. When the timer nears expiration, WonderQuest doesn't freeze with an annoying alarm. Instead, twilight blankets the screen, Pippin puts on pajamas, and the lullaby gently encourages putting down the tablet.
              </p>

              {/* Preset buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400">Set Timer:</span>
                {[15, 20, 30, 45].map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setTimerMinutes(m);
                      setBedtimeActive(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      timerMinutes === m
                        ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {m} min
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Simulation View */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-indigo-700/50 flex flex-col items-center text-center">
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" /> Adult Gate Protected
                </span>
                <span className="font-mono text-amber-400 font-bold">{timerMinutes}:00 Remaining</span>
              </div>

              {/* Status Graphic */}
              <div className="my-3">
                {bedtimeActive ? (
                  <div className="flex flex-col items-center animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-purple-900/60 border-2 border-purple-400 flex items-center justify-center mb-2">
                      <Moon className="w-8 h-8 text-amber-300" />
                    </div>
                    <span className="text-sm font-bold text-amber-300">"Yawn... Time for cozy dreams!"</span>
                    <p className="text-xs text-slate-400 mt-1">Lullaby playing softly • Screen dimming</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-sky-900/60 border-2 border-sky-400 flex items-center justify-center mb-2">
                      <Sun className="w-8 h-8 text-amber-400" />
                    </div>
                    <span className="text-sm font-bold text-white">Active Discovery Mode</span>
                    <p className="text-xs text-slate-400 mt-1">Gentle audio pacing • Zero hyper-stim</p>
                  </div>
                )}
              </div>

              {/* Test Button */}
              <button
                onClick={() => setBedtimeActive(!bedtimeActive)}
                className="mt-4 w-full py-2.5 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
              >
                {bedtimeActive ? 'Reset to Active Play' : 'Simulate Twilight Wind-Down'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
