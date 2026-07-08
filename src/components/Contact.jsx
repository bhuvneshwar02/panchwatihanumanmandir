import content from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    content.mapEmbedQuery
  )}&output=embed`;

  return (
    <section id="contact" className="section section--maroon contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <p className="eyebrow">Visit Us</p>
          <h2>{content.contact.heading}</h2>

          <ul className="contact__list">
            <li>
              <strong>Address</strong>
              <span>{content.address}</span>
            </li>
            <li>
              <strong>Phone</strong>
              <span>{content.phone}</span>
            </li>
            {content.email && (
              <li>
                <strong>Email</strong>
                <span>{content.email}</span>
              </li>
            )}
          </ul>

          <div className="contact__actions">
            <a
              href={content.whatsappCommunityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon />
              Join Our WhatsApp Community
            </a>

            <a
              href={content.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="Temple location map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}