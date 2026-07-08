// A twin-peak arch silhouette, echoing the temple's own mandap
// alcoves (see hall-arches.jpeg / shiv-parivar-shrine.jpeg).
// Used as a seam between sections of different colour.
export default function ArchDivider({ fill = '#f5f1e8', flip = false }) {
  return (
    <svg
      className="arch-divider"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0,60 L0,30 Q60,0 120,30 L120,60 Z
           M120,60 L120,30 Q180,0 240,30 L240,60 Z
           M240,60 L240,30 Q300,0 360,30 L360,60 Z
           M360,60 L360,30 Q420,0 480,30 L480,60 Z
           M480,60 L480,30 Q540,0 600,30 L600,60 Z
           M600,60 L600,30 Q660,0 720,30 L720,60 Z
           M720,60 L720,30 Q780,0 840,30 L840,60 Z
           M840,60 L840,30 Q900,0 960,30 L960,60 Z
           M960,60 L960,30 Q1020,0 1080,30 L1080,60 Z
           M1080,60 L1080,30 Q1140,0 1200,30 L1200,60 Z"
        fill={fill}
      />
    </svg>
  );
}
