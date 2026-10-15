function EventCard({ event, onSelect }) {
  return (
    <article className="event-card">
      <div
        className={`event-artwork artwork-${event.artwork}`}
        role="img"
        aria-label={`Ilustración decorativa para ${event.name}`}
      >
        <span className="artwork-orb artwork-orb-one" />
        <span className="artwork-orb artwork-orb-two" />
        <span className="artwork-lines" />
        <span className="artwork-label">{event.featured}</span>
        <span className="artwork-title">{event.name}</span>
        <span className="artwork-decoration" aria-hidden="true">
          {event.artwork === 'jazz' ? '♫' : event.artwork === 'light' ? '✳' : '!' }
        </span>
      </div>
      <div className="event-card-content">
        <span className="event-category">{event.category}</span>
        <h3>{event.name}</h3>
        <p className="event-detail">
          <span className="detail-icon" aria-hidden="true">◷</span>
          {event.date}
        </p>
        <p className="event-detail">
          <span className="detail-icon" aria-hidden="true">⌖</span>
          {event.venue}
        </p>
        <div className="event-card-bottom">
          <p className="event-price"><span>Desde</span>{event.price}</p>
          <button
            className="event-button"
            type="button"
            aria-label={`Ver detalles de ${event.name}`}
            onClick={onSelect}
          >
            Ver detalles <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
