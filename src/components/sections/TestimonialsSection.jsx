import { Star, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';

export default function TestimonialsSection() {
  const reviews = testimonialsData.reviews;

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={testimonialsData.sectionTag}
          title={testimonialsData.title}
          subtitle={testimonialsData.subtitle}
          tagVariant="amber"
        />

        {/* Aggregate Ratings & Accolades Hero Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-md">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-extrabold text-slate-900">
                12,400+ Verified Parent &amp; Teacher Reviews
              </p>
              <p className="text-xs text-slate-500">
                Across Apple App Store &amp; Google Play Store
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-amber-200 shadow-2xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Mom's Choice Gold Award</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-amber-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>KidSAFE Certified Seal</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/90 hover:bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified Parent
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                  "{rev.headline}"
                </h3>

                {/* Review Body */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {rev.quote}
                </p>
              </div>

              {/* Author & Child Info Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-900">{rev.name}</span>
                  <span className="text-xs text-sky-700 font-semibold">{rev.role}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{rev.childAge} • {rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
