export function GeometricBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-neutral-950">
        {/* 1. Subtle Ambient Gradient (Spotlight effect) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black opacity-60"></div>
      </div>

      {/* 2. Global Film Grain Texture (Overlay) */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.3] mix-blend-overlay">
        {/* Static Noise for Mobile (Performance) */}
        <div
          className="block md:hidden w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Animated Noise for Desktop */}
        <svg className="hidden md:block h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="3"
              stitchTiles="stitch"
            >
              <animate
                attributeName="seed"
                values="0;5;10;15;20"
                dur="0.4s"
                repeatCount="indefinite"
                calcMode="discrete"
              />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
            className="w-full h-full"
          />
        </svg>
      </div>
    </>
  );
}
