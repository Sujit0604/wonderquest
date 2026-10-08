import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Layers } from 'lucide-react';
import { blogCategories, blogPosts } from '../../data/blogPosts';
import SectionHeader from '../common/SectionHeader';

export default function BlogPage({ onNavigateHome }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const handleBack = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main id="main-content" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Game Overview</span>
          </button>
        </div>

        {/* Blog Header */}
        <SectionHeader
          tag="The WonderQuest Journal"
          title="Parenting In The Digital Age"
          subtitle="Evidence-based guides, mindful screen-time tips, and Montessori play principles written by child development experts."
          tagVariant="purple"
        />

        {/* CMS Readiness Architecture Banner */}
        <div className="mb-14 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 border border-purple-700/50 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-400/30 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-300 bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-700">
                  Headless CMS &amp; MDX Ready
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1 mb-1">
                  Decoupled Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  All articles are decoupled from components into structured data files (`src/data/blogPosts.js`). You can swap this with Sanity.io, Strapi, Contentful, or local MDX with zero component refactoring.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Schema Verified
              </span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-black text-slate-800 uppercase tracking-wider shadow-2xs">
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Strip */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3 pt-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="text-xs font-black text-slate-900">{post.author.name}</p>
                    <p className="text-[10px] text-slate-500">{post.author.role}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Selected Article Full View Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-bold"
              >
                ✕ Close
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{selectedPost.author.name}</p>
                  <p className="text-xs text-slate-500">{selectedPost.author.role}</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
