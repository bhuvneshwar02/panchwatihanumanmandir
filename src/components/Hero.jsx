import content from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" />
      <div className="hero__scrim" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">{content.location}</p>
          <h1 className="hero__title">{content.templeName}</h1>
          <p className="hero__hindi">{content.templeNameHindi}</p>
          <p className="hero__tagline">{content.tagline}</p>

          <div className="hero__actions">
            <a
              href={content.whatsappCommunityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon />
              Join Our WhatsApp Community
            </a>
            <a href="#timings" className="btn btn-outline">
              Darshan Timings
            </a>
          </div>
        </div>

        <div className="hero__murti arch-frame">
          <img src="/images/hanuman-murti-2.jpeg" alt="Shri Hanuman ji, adorned in daily shringar at the temple sanctum" />
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to learn more">
        <span />
      </a>
    </section>
  );
}
