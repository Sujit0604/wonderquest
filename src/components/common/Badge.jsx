
/**
 * Reusable friendly Pill Badge
 */
export default function Badge({
  children,
  icon: Icon,
  variant = 'blue',
  size = 'md',
  className = '',
}) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1 gap-1',
    md: 'text-sm px-3.5 py-1.5 gap-1.5',
    lg: 'text-base px-4 py-2 gap-2',
  }[size] || 'text-sm px-3.5 py-1.5 gap-1.5';

  const variantStyles = {
    blue: 'bg-sky-50 text-sky-800 border border-sky-200/80',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    rose: 'bg-rose-50 text-rose-800 border border-rose-200/80',
    emerald: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80',
    purple: 'bg-purple-50 text-purple-800 border border-purple-200/80',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
  }[variant] || 'bg-sky-50 text-sky-800 border border-sky-200';

  return (
    <span className={`inline-flex items-center font-semibold rounded-full select-none ${sizeStyles} ${variantStyles} ${className}`}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
