
/**
 * High-quality, scalable SVG character illustrations
 * Pippin the Bunny, Luna the Fox, Barnaby the Bear, and Spark the Firefly
 */

export function PippinCharacter({ className = "w-32 h-32", animated = true }) {
  return (
    <div className={`relative inline-block select-none ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}>
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Pippin the Explorer Bunny"
      >
        {/* Glow */}
        <circle cx="100" cy="115" r="70" fill="#FEF3C7" opacity="0.6" />
        
        {/* Ears */}
        {/* Left ear */}
        <ellipse cx="65" cy="50" rx="16" ry="45" fill="#FDE68A" transform="rotate(-15 65 50)" />
        <ellipse cx="66" cy="52" rx="9" ry="32" fill="#FBCFE8" transform="rotate(-15 66 52)" />
        
        {/* Right ear */}
        <ellipse cx="135" cy="50" rx="16" ry="45" fill="#FDE68A" transform="rotate(15 135 50)" />
        <ellipse cx="134" cy="52" rx="9" ry="32" fill="#FBCFE8" transform="rotate(15 134 52)" />
        
        {/* Head */}
        <circle cx="100" cy="110" r="54" fill="#FDE68A" />
        
        {/* Explorer Hat */}
        <path d="M55 90 C 55 68, 145 68, 145 90 Z" fill="#3B82F6" />
        <path d="M42 90 Q 100 86 158 90 Q 100 95 42 90 Z" fill="#1D4ED8" />
        <circle cx="100" cy="74" r="7" fill="#F59E0B" />
        <path d="M96 74 L 104 74 M 100 70 L 100 78" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        {/* Cheeks */}
        <ellipse cx="68" cy="122" rx="10" ry="6" fill="#F472B6" opacity="0.5" />
        <ellipse cx="132" cy="122" rx="10" ry="6" fill="#F472B6" opacity="0.5" />

        {/* Eyes */}
        <circle cx="78" cy="110" r="6" fill="#1E293B" />
        <circle cx="80" cy="108" r="2.2" fill="#FFFFFF" />
        
        <circle cx="122" cy="110" r="6" fill="#1E293B" />
        <circle cx="124" cy="108" r="2.2" fill="#FFFFFF" />

        {/* Nose & Mouth */}
        <polygon points="96,119 104,119 100,125" fill="#FB7185" />
        <path d="M100 125 Q 93 133 87 130" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M100 125 Q 107 133 113 130" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Little Explorer Backpack Straps */}
        <path d="M68 152 Q 62 165 65 178" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
        <path d="M132 152 Q 138 165 135 178" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
        
        {/* Body & Shirt */}
        <path d="M66 150 C 66 140, 134 140, 134 150 L 140 185 Q 100 190 60 185 Z" fill="#38BDF8" />
        <circle cx="100" cy="162" r="5" fill="#FBBF24" />
      </svg>
    </div>
  );
}

export function LunaCharacter({ className = "w-32 h-32", animated = true }) {
  return (
    <div className={`relative inline-block select-none ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}>
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Luna the Creative Fox"
      >
        {/* Glow */}
        <circle cx="100" cy="110" r="70" fill="#FFE4E6" opacity="0.6" />

        {/* Fluffy Tail in background */}
        <path d="M140 135 C 195 140, 200 80, 175 60 C 150 40, 140 90, 130 130 Z" fill="#FB923C" />
        <path d="M175 60 C 160 55, 150 65, 145 78 C 160 85, 170 75, 175 60 Z" fill="#FFF1F2" />

        {/* Big Fox Ears */}
        {/* Left Ear */}
        <polygon points="50,95 40,25 90,70" fill="#EA580C" />
        <polygon points="55,85 48,38 82,70" fill="#FFF1F2" />

        {/* Right Ear */}
        <polygon points="150,95 160,25 110,70" fill="#EA580C" />
        <polygon points="145,85 152,38 118,70" fill="#FFF1F2" />

        {/* Head */}
        <path d="M50 100 C 40 140, 100 165, 100 165 C 100 165, 160 140, 150 100 C 145 75, 55 75, 50 100 Z" fill="#F97316" />
        
        {/* White muzzle cheeks */}
        <path d="M54 112 C 70 140, 100 160, 100 160 C 100 160, 130 140, 146 112 C 140 100, 120 100, 100 115 C 80 100, 60 100, 54 112 Z" fill="#FFFFFF" />

        {/* Beret (Creative Artist) */}
        <ellipse cx="80" cy="68" rx="30" ry="14" fill="#E11D48" transform="rotate(-15 80 68)" />
        <circle cx="68" cy="55" r="4" fill="#BE123C" />

        {/* Friendly eyes */}
        <ellipse cx="76" cy="106" rx="5" ry="7" fill="#1E293B" />
        <circle cx="78" cy="103" r="2.2" fill="#FFFFFF" />

        <ellipse cx="124" cy="106" rx="5" ry="7" fill="#1E293B" />
        <circle cx="126" cy="103" r="2.2" fill="#FFFFFF" />

        {/* Nose */}
        <polygon points="95,140 105,140 100,147" fill="#1E293B" />
        
        {/* Sweet smile */}
        <path d="M100 147 Q 100 153 100 153" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        <path d="M94 153 Q 100 157 106 153" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Artist Paint Palette / Brush in paw */}
        <ellipse cx="65" cy="165" rx="8" ry="8" fill="#FBBF24" />
        <line x1="45" y1="175" x2="65" y2="155" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
        <path d="M42 178 Q 45 182 48 175" fill="#38BDF8" />
      </svg>
    </div>
  );
}

export function BarnabyCharacter({ className = "w-32 h-32", animated = true }) {
  return (
    <div className={`relative inline-block select-none ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}>
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Barnaby the Gentle Bear"
      >
        {/* Glow */}
        <circle cx="100" cy="110" r="70" fill="#E0F2FE" opacity="0.6" />

        {/* Bear Round Ears */}
        <circle cx="58" cy="62" r="22" fill="#92400E" />
        <circle cx="58" cy="62" r="13" fill="#FCD34D" />

        <circle cx="142" cy="62" r="22" fill="#92400E" />
        <circle cx="142" cy="62" r="13" fill="#FCD34D" />

        {/* Head */}
        <circle cx="100" cy="110" r="56" fill="#B45309" />

        {/* Big Muzzle */}
        <ellipse cx="100" cy="124" rx="28" ry="22" fill="#FEF3C7" />

        {/* Nose */}
        <ellipse cx="100" cy="116" rx="10" ry="7" fill="#1E293B" />
        <path d="M100 123 L 100 131" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M90 131 Q 100 138 110 131" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Sparkly Telescope Star Eyes */}
        <circle cx="75" cy="100" r="6" fill="#1E293B" />
        <circle cx="77" cy="98" r="2.2" fill="#FFFFFF" />

        <circle cx="125" cy="100" r="6" fill="#1E293B" />
        <circle cx="127" cy="98" r="2.2" fill="#FFFFFF" />

        {/* Cozy Striped Scarf */}
        <path d="M60 156 Q 100 170 140 156 Q 100 180 60 156 Z" fill="#0284C7" />
        <path d="M80 162 L 75 190 L 95 190 L 95 166" fill="#38BDF8" />

        {/* Golden Star pinned to scarf */}
        <polygon points="100,165 102,171 108,171 103,174 105,180 100,176 95,180 97,174 92,171 98,171" fill="#FBBF24" />
      </svg>
    </div>
  );
}

export function SparkCharacter({ className = "w-32 h-32", animated = true }) {
  return (
    <div className={`relative inline-block select-none ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}>
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Spark the Empathy Firefly"
      >
        {/* Pulsing Warm Glow */}
        <circle cx="100" cy="115" r="75" fill="#BBF7D0" opacity="0.5" />
        <circle cx="100" cy="130" r="45" fill="#86EFAC" opacity="0.6" />

        {/* Translucent Wings */}
        <ellipse cx="65" cy="85" rx="32" ry="16" fill="#A7F3D0" opacity="0.75" transform="rotate(-30 65 85)" />
        <ellipse cx="135" cy="85" rx="32" ry="16" fill="#A7F3D0" opacity="0.75" transform="rotate(30 135 85)" />

        {/* Antennae */}
        <path d="M88 65 Q 75 45 70 48" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="70" cy="48" r="4" fill="#FBBF24" />

        <path d="M112 65 Q 125 45 130 48" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="130" cy="48" r="4" fill="#FBBF24" />

        {/* Round Chubby Body */}
        <ellipse cx="100" cy="125" rx="34" ry="40" fill="#34D399" />
        
        {/* Lantern Glow Bottom */}
        <ellipse cx="100" cy="142" rx="25" ry="18" fill="#FEF08A" />

        {/* Head */}
        <circle cx="100" cy="88" r="26" fill="#10B981" />

        {/* Happy Curved Cheerful Eyes */}
        <path d="M88 88 Q 93 83 98 88" stroke="#064E3B" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M102 88 Q 107 83 112 88" stroke="#064E3B" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Rosy Cheeks */}
        <circle cx="85" cy="94" r="4" fill="#FB7185" opacity="0.6" />
        <circle cx="115" cy="94" r="4" fill="#FB7185" opacity="0.6" />

        {/* Happy smile */}
        <path d="M96 95 Q 100 99 104 95" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
