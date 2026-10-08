
/**
 * Reusable Section Header with pill badge, title, and descriptive subtitle
 */
export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
  tagVariant = 'blue',
}) {
  const alignClasses = {
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto',
  }[align] || 'text-center items-center mx-auto';

  const tagColor = {
    blue: 'bg-sky-100 text-sky-800 border-sky-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    rose: 'bg-rose-100 text-rose-800 border-rose-200',
  }[tagVariant] || 'bg-sky-100 text-sky-800 border-sky-200';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {tag && (
        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border shadow-xs mb-4 ${tagColor}`}>
          <span className="w-2 h-2 rounded-full bg-current opacity-70 animate-pulse" />
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
