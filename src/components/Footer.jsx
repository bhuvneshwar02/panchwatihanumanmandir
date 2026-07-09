import content from '../data/content';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/images/hanuman-murti-1.jpeg" alt="" />
          <div>
            <strong>{content.templeName}</strong>
            <span>{content.templeNameHindi}</span>
          </div>
        </div>

        <p className="footer__om">ॐ श्री हनुमते नमः</p>
        
        <SocialIcons />
        
        <p className="footer__copy">
          © {new Date().getFullYear()} {content.templeName}. Built with devotion.
        </p>
      </div>
    </footer>
  );
}
