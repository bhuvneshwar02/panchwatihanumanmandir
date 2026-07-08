import content from '../data/content';

export default function About() {
  const { heading, paragraphs } = content.about;
  return (
    <section id="about" className="section section--marble about">
      <div className="container about__grid">
        <div className="about__frame arch-frame">
          <img src="/images/garbhagriha-hall.jpeg" alt="The main hall and sanctum of the temple" />
        </div>

        <div className="about__copy">
          <p className="eyebrow">Namaste &amp; Welcome</p>
          <h2>{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="about__para">
              {p}
            </p>
          ))}

          <div className="about__stats">
            <div>
              <strong>Daily</strong>
              <span>Darshan &amp; Aarti</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Sacred Shrines</span>
            </div>
            <div>
              <strong>Open</strong>
              <span>To All Devotees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
