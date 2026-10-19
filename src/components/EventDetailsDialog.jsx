import { useEffect, useRef } from 'react';

function EventDetailsDialog({ event, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (event && !dialog.open) {
      dialog.showModal();
    } else if (!event && dialog.open) {
      dialog.close();
    }
  }, [event]);

  return (
    <dialog
      className="event-dialog"
      ref={dialogRef}
      aria-labelledby="event-dialog-title"
      onClose={onClose}
      onClick={(clickEvent) => {
        if (clickEvent.target === clickEvent.currentTarget) {
          dialogRef.current?.close();
        }
      }}
    >
      {event && (
        <>
          <div className="event-dialog-heading">
            <p className="eyebrow">Detalles del evento</p>
            <button
              className="dialog-close"
              type="button"
              aria-label="Cerrar detalles"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
          </div>
          <span className="event-category">{event.category}</span>
          <h2 id="event-dialog-title">{event.name}</h2>
          <p className="event-detail">
            <span className="detail-icon" aria-hidden="true">◷</span>
            {event.date}
          </p>
          <p className="event-detail">
            <span className="detail-icon" aria-hidden="true">⌖</span>
            {event.venue}
          </p>
          <p className="dialog-price">
            Desde <strong>{event.price}</strong>
          </p>
          <p className="dialog-note">
            La compra de boletos no está disponible en esta versión.
          </p>
          <button
            className="search-button dialog-confirm"
            type="button"
            onClick={() => dialogRef.current?.close()}
          >
            Entendido
          </button>
        </>
      )}
    </dialog>
  );
}

export default EventDetailsDialog;
