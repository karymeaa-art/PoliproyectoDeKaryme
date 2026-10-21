import { useState } from 'react';
import FeaturedEvents from '../components/FeaturedEvents.jsx';
import { events } from '../data/events.js';

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
    .trim();
}

function HomePage() {
  const [eventQuery, setEventQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [filters, setFilters] = useState({ event: '', location: '' });

  const filteredEvents = events.filter((event) => {
    const searchableEvent = normalizeText(`${event.name} ${event.category} ${event.featured}`);
    const searchableLocation = normalizeText(event.venue);

    return (
      searchableEvent.includes(filters.event) &&
      searchableLocation.includes(filters.location)
    );
  });

  function handleSearch(event) {
    event.preventDefault();
    setFilters({
      event: normalizeText(eventQuery),
      location: normalizeText(locationQuery),
    });
    document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' });
  }

  function clearSearch() {
    setEventQuery('');
    setLocationQuery('');
    setFilters({ event: '', location: '' });
  }

  return (
    <>
      <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> Tu próxima experiencia comienza aquí
          </p>
          <h1 id="hero-title">
            Hay momentos<br />
            que se viven <span>mejor</span><br />
            en vivo.
          </h1>
          <p className="hero-description">
            Encuentra conciertos, festivales y experiencias que recordarás por mucho tiempo.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#eventos">
              Descubrir eventos <span aria-hidden="true">↗</span>
            </a>
            <span className="hero-note"><span aria-hidden="true">✳</span> Buenos planes, cero complicaciones</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-sun" />
          <div className="hero-ring hero-ring-one" />
          <div className="hero-ring hero-ring-two" />
          <div className="hero-ticket">
            <span className="ticket-topline">EVENTIKETS · EN VIVO</span>
            <span className="ticket-sparkle">✳</span>
            <span className="ticket-main">HAZ<br />ESPACIO<br />PARA MÁS.</span>
            <span className="ticket-rule" />
            <span className="ticket-caption">TU SIGUIENTE GRAN RECUERDO</span>
          </div>
          <span className="hero-sticker">Nos vemos<br />ahí <span>↗</span></span>
          <span className="hero-index">01 / 03</span>
        </div>
        <form className="search-panel" onSubmit={handleSearch}>
          <div className="search-intro">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <span><strong>¿Qué te gustaría vivir?</strong><small>Encuentra tu próximo plan</small></span>
          </div>
          <label className="search-field">
            <span className="field-label">EVENTO O ARTISTA</span>
            <input
              type="search"
              placeholder="Ej. música, teatro, festival..."
              aria-label="Evento o artista"
              value={eventQuery}
              onChange={(event) => setEventQuery(event.target.value)}
            />
          </label>
          <label className="search-field search-location">
            <span className="field-label">¿DÓNDE?</span>
            <input
              type="search"
              placeholder="Ciudad o recinto"
              aria-label="Ciudad o recinto"
              value={locationQuery}
              onChange={(event) => setLocationQuery(event.target.value)}
            />
          </label>
          <button className="search-button" type="submit" aria-label="Buscar eventos">
            Buscar eventos <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
      <FeaturedEvents
        events={filteredEvents}
        hasSearch={Boolean(filters.event || filters.location)}
        onClearSearch={clearSearch}
      />
      <section className="community-banner" aria-label="Invitación a disfrutar eventos">
        <span className="banner-star" aria-hidden="true">✳</span>
        <p>La vida pasa. <strong>Que te encuentre ahí.</strong></p>
        <a href="#eventos" aria-label="Explorar los eventos destacados">Explorar <span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}

export default HomePage;
