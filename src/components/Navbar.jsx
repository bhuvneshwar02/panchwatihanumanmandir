import { useEffect, useState } from 'react';
import content from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#events', label: 'Festivals' },
  { href: '#timings', label: 'Timings' },
  { href: '#donate', label: 'Donate' },
  { href: '#contact', label: 'Visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src="/images/hanuman-murti-1.jpeg" alt="" className="navbar__brand-img" />
          <span>{content.templeName}</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={content.whatsappCommunityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
            onClick={() => setOpen(false)}
          >
            Join Community
          </a>
        </nav>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
