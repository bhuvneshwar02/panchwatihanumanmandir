import content from '../data/content';

export default function History() {
  const { heading, paragraphs } = content.history;
  return (
    <section className="section section--cream history">
      <div className="container history__grid">
        <div className="history__copy">
          <p className="eyebrow">Our Story</p>
          <h2>{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="about__para">
              {p}
            </p>
          ))}
        </div>

        <div className="history__frame arch-frame">
          <img src="/images/temple-facade.jpeg" alt="Temple facade with flags flying above" />
        </div>
      </div>
    </section>
  );
}
