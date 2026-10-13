import { events } from '../data/events.js';
import EventCard from './EventCard.jsx';

function FeaturedEvents() {
  return (
    <section className="featured-section" id="eventos" aria-labelledby="featured-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Una buena historia empieza aquí</p>
          <h2 id="featured-title">Eventos destacados<span>.</span></h2>
        </div>
        <a className="text-link" href="#eventos">
          Ver todos los eventos <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedEvents;
