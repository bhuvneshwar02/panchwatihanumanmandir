import content from '../data/content';

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  googleReview: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15 9 22 9.3 16.5 14 18 21 12 17.3 6 21 7.5 14 2 9.3 9 9" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 8h2V5h-2a4 4 0 0 0-4 4v2H9v3h2v6h3v-6h2.5l.5-3H14V9a1 1 0 0 1 1-1z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <polygon points="10.5 9.5 15 12 10.5 14.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const labels = {
  instagram: 'Follow us on Instagram',
  whatsapp: 'Join our WhatsApp channel',
  googleReview: 'Rate us on Google',
  facebook: 'Follow us on Facebook',
  youtube: 'Subscribe on YouTube',
};

export default function SocialIcons() {
  const links = Object.entries(content.socialLinks || {}).filter(([, url]) => url);

  if (links.length === 0) return null;

  return (
    <div className="social-icons">
      {links.map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels[key]}
          className="social-icons__link"
        >
          {icons[key]}
        </a>
      ))}
    </div>
  );
}
