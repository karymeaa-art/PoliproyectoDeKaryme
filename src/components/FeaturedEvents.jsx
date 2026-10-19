import { useState } from 'react';
import { events } from '../data/events.js';
import EventCard from './EventCard.jsx';
import EventDetailsDialog from './EventDetailsDialog.jsx';

function FeaturedEvents({
  events: visibleEvents = events,
  hasSearch = false,
  onClearSearch = () => {},
}) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="featured-section" id="eventos" aria-labelledby="featured-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Una buena historia empieza aquí</p>
          <h2 id="featured-title">Eventos destacados<span>.</span></h2>
        </div>
        <a
          className="text-link"
          href="#eventos"
          onClick={hasSearch ? onClearSearch : undefined}
        >
          Ver todos los eventos <span aria-hidden="true">↗</span>
        </a>
      </div>
      {hasSearch && (
        <p className="search-results" role="status" aria-live="polite">
          {visibleEvents.length === 0
            ? 'No encontramos eventos con esos criterios.'
            : `${visibleEvents.length} ${visibleEvents.length === 1 ? 'evento encontrado' : 'eventos encontrados'}.`}
          <button className="clear-search-button" type="button" onClick={onClearSearch}>
            Limpiar búsqueda
          </button>
        </p>
      )}
      {visibleEvents.length > 0 && (
        <div className="events-grid">
          {visibleEvents.map((event) => (
            <EventCard
              event={event}
              key={event.id}
              onSelect={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      )}
      <EventDetailsDialog
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}

export default FeaturedEvents;
