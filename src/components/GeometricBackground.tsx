export function GeometricBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-neutral-950">
        {/* 1. Subtle Ambient Gradient (Spotlight effect) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black opacity-60"></div>
      </div>

      {/* 2. Global Film Grain Texture (Overlay) */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.5] mix-blend-overlay">
        <svg className="h-full w-full">
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
