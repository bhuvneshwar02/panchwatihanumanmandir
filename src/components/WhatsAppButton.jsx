import content from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href="https://whatsapp.com/channel/0029VbCs0EpEawdmvBua7j2I"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Join our WhatsApp community"
      title="Join our WhatsApp community"
    >
      <WhatsAppIcon />
    </a>
  );
}
