import { useState } from 'react';
import content from '../data/content';

export default function Gallery() {
  const { heading, images } = content.gallery;
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="section section--marble gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">A Glimpse Within</p>
          <h2>{heading}</h2>
          <p>Moments from daily worship, festival nights, and the shrines that make up the temple.</p>
        </div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`gallery__item gallery__item--${i % 5}`}
              onClick={() => setActive(img)}
            >
              <img src={`/images/${img.src}`} alt={img.caption} loading="lazy" />
              <span className="gallery__caption">{img.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close">
            ×
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={`/images/${active.src}`} alt={active.caption} />
            <figcaption>{active.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
