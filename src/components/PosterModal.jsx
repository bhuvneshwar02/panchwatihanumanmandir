import { useEffect, useRef } from 'react';
import content from '../data/content';

function QRBox({ value, id }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!value || !boxRef.current || !window.QRCode) return;
    boxRef.current.innerHTML = '';
    // eslint-disable-next-line no-new
    new window.QRCode(boxRef.current, {
      text: value,
      width: 110,
      height: 110,
      colorDark: '#4a0d18',
      colorLight: '#fbf3e0',
      correctLevel: window.QRCode.CorrectLevel.H,
    });
  }, [value]);

  return <div className="poster-qr" ref={boxRef} id={id} />;
}

export default function PosterModal({ isOpen, onClose }) {
  const { socialLinks = {}, donation, templeName, templeNameHindi, tagline } = content;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleShare = async () => {
    const shareData = {
      title: templeName,
      text: `${templeName} — ${tagline}. Darshan timings, festivals & more:`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled share, ignore */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied! You can now paste and share it.');
    }
  };

  return (
    <div className="poster-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="poster-card" onClick={(e) => e.stopPropagation()}>
        <button className="poster-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="poster-om">ॐ</div>
        <h2 className="poster-title">{templeName}</h2>
        <div className="poster-title-hi">{templeNameHindi}</div>
        <p className="poster-tagline">{tagline}</p>

        <img
          className="poster-hero"
          src="/images/temple-facade.jpeg"
          alt={templeName}
        />

        <div className="poster-grid">
          {socialLinks.instagram && (
            <div className="poster-item">
              <span className="poster-item__label">Follow · Instagram</span>
              <QRBox value={socialLinks.instagram} id="poster-qr-instagram" />
              <span className="poster-item__sub">Scan to follow</span>
            </div>
          )}

          {socialLinks.whatsapp && (
            <div className="poster-item">
              <span className="poster-item__label">Join · WhatsApp</span>
              <QRBox value={socialLinks.whatsapp} id="poster-qr-whatsapp" />
              <span className="poster-item__sub">Daily updates</span>
            </div>
          )}

          {socialLinks.googleReview && (
            <div className="poster-item">
              <span className="poster-item__label">Rate Us · Google</span>
              <QRBox value={socialLinks.googleReview} id="poster-qr-rating" />
              <span className="poster-item__sub">Share a 5-star rating</span>
            </div>
          )}

          {donation?.bankDetails?.upiId && (
            <div className="poster-item">
              <span className="poster-item__label">Donate · UPI</span>
              <QRBox
                value={`upi://pay?pa=${donation.bankDetails.upiId}&pn=${encodeURIComponent(
                  donation.bankDetails.accountName || templeName
                )}`}
                id="poster-qr-upi"
              />
              <span className="poster-item__sub">Any UPI app</span>
            </div>
          )}
        </div>

        <div className="poster-actions">
          <button className="poster-btn poster-btn--primary" onClick={handleShare}>
            Share this page
          </button>
          <a className="poster-btn poster-btn--ghost" href="#top" onClick={onClose}>
            Continue to site
          </a>
        </div>
      </div>
    </div>
  );
}
