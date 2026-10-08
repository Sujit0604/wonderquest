import { fireConfetti } from '../../utils/confetti';

/**
 * Accessible, tactile, kid-friendly Button component
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  celebrate = false,
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ariaLabel,
  ...props
}) {
  const handleClick = (e) => {
    if (disabled) return;
    if (celebrate) {
      fireConfetti();
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Base styling: tactile, rounded-full, strong focus rings
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 select-none cursor-pointer';

  // Size styling
  const sizeStyles = {
    sm: 'text-sm px-4 py-2 gap-1.5 rounded-full',
    md: 'text-base px-6 py-3 gap-2 rounded-full',
    lg: 'text-lg px-8 py-4 gap-2.5 rounded-full shadow-md hover:shadow-lg',
    xl: 'text-xl px-9 py-4.5 gap-3 rounded-full shadow-lg hover:shadow-xl',
  }[size] || 'text-base px-6 py-3 gap-2 rounded-full';

  // Variant styling
  const variantStyles = {
    primary: 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-900 border-2 border-amber-300 shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5 focus-visible:ring-amber-400 active:translate-y-0',
    bubbleSky: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-2 border-sky-300 shadow-md hover:shadow-sky-400/40 hover:-translate-y-0.5 focus-visible:ring-sky-400 active:translate-y-0',
    bubblePink: 'bg-gradient-to-r from-pink-400 to-rose-500 text-white border-2 border-pink-300 shadow-md hover:shadow-rose-400/40 hover:-translate-y-0.5 focus-visible:ring-rose-400 active:translate-y-0',
    secondary: 'bg-white/90 hover:bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow hover:-translate-y-0.5 focus-visible:ring-slate-400',
    outline: 'bg-transparent text-slate-700 hover:text-slate-950 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400',
    play: 'bg-white text-slate-800 border-2 border-sky-200 hover:border-sky-400 shadow-md hover:shadow-sky-200/50 hover:bg-sky-50 focus-visible:ring-sky-400 group',
  }[variant] || '';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none hover:translate-y-0 shadow-none' : '';

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </button>
  );
}
