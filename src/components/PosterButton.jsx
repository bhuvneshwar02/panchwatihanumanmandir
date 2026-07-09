export default function PosterButton({ onClick }) {
  return (
    <button
      className="poster-float"
      onClick={onClick}
      aria-label="Open temple poster & share links"
      title="Poster & Share"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    </button>
  );
}
