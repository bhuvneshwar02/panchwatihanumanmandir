import content from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href="https://chat.whatsapp.com/GyQJlLI1XWsGjRJVvLzJmP"
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
