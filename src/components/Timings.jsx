import content from '../data/content';

export default function Timings() {
  const { heading, daily, note } = content.timings;
  return (
    <section id="timings" className="section section--cream timings">
      <div className="container timings__grid">
        <div className="timings__frame arch-frame">
          <img src="/images/mandap-view.jpeg" alt="The temple mandap, lit for evening aarti" />
        </div>

        <div className="timings__copy">
          <p className="eyebrow">Plan Your Visit</p>
          <h2>{heading}</h2>

          <ul className="timings__list">
            {daily.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <strong>{row.time}</strong>
              </li>
            ))}
          </ul>

          <p className="timings__note">{note}</p>
        </div>
      </div>
    </section>
  );
}
