import content from '../data/content';

export default function Events() {
  const { heading, list } = content.events;
  return (
    <section id="events" className="section section--maroon events">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Through The Year</p>
          <h2>{heading}</h2>
          <p>The temple calendar's key celebrations — everyone is welcome to join.</p>
        </div>

        <div className="events__grid">
          {list.map((ev) => (
            <div key={ev.name} className="events__card">
              <div className="events__img">
                <img src={`/images/${ev.image}`} alt={ev.name} loading="lazy" />
              </div>
              <h3>{ev.name}</h3>
              <p>{ev.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
