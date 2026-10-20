const events = [
  {
    name: "Festival Horizonte",
    date: "Sáb, 07 nov 2026",
    sortDate: "2026-11-07",
    city: "Ciudad de México",
    venue: "Foro Sol · Ciudad de México",
    price: 1450,
    category: "Música en vivo",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
  {
    name: "Noche de Jazz & Vino",
    date: "Vie, 13 nov 2026",
    sortDate: "2026-11-13",
    city: "Ciudad de México",
    venue: "Teatro Ángela Peralta · CDMX",
    price: 680,
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Saxofonista tocando en un escenario con luz cálida",
    imagePosition: "center 48%",
  },
  {
    name: "Pulso Urbano",
    date: "Sáb, 21 nov 2026",
    sortDate: "2026-11-21",
    city: "Guadalajara",
    venue: "Auditorio Telmex · Guadalajara",
    price: 920,
    category: "Música en vivo",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Público disfrutando de un concierto con las manos en alto",
    imagePosition: "center 52%",
  },
  {
    name: "Teatro bajo las estrellas",
    date: "Dom, 29 nov 2026",
    sortDate: "2026-11-29",
    city: "Ciudad de México",
    venue: "Jardín Escénico · Ciudad de México",
    price: 540,
    category: "Teatro",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Actriz en escena bajo la iluminación del teatro",
    imagePosition: "center 45%",
  },
  {
    name: "Sabores de México",
    date: "Sáb, 05 dic 2026",
    sortDate: "2026-12-05",
    city: "Ciudad de México",
    venue: "Campo Marte · Ciudad de México",
    price: 390,
    category: "Gastronomía",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Platillos preparados para compartir en una mesa",
    imagePosition: "center 56%",
  },
  {
    name: "Luz de Invierno",
    date: "Sáb, 12 dic 2026",
    sortDate: "2026-12-12",
    city: "Monterrey",
    venue: "Parque Fundidora · Monterrey",
    price: 750,
    category: "Experiencia",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Festival nocturno con luces de colores y asistentes",
    imagePosition: "center 50%",
  },
  {
    name: "Rock Wings",
    date: "Sábado, 7 de noviembre de 2026",
    sortDate: "2026-11-07",
    time: "7:30 PM (GMT-7)",
    city: "Por confirmar",
    venue: "Rock Wings",
    address: "Blvd. Gómez Morín 7950",
    price: 70,
    payment: "Únicamente efectivo en el local o evento",
    ageLimit: "Apto para todas las edades",
    highlights: ["Únicamente efectivo", "Apto para todas las edades"],
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
  {
    name: "Rogelio Ramos",
    date: "13 de noviembre de 2026",
    sortDate: "2026-11-13",
    time: "8:00 PM",
    city: "Los Mochis, Sinaloa",
    venue: "Los Mochis, Sinaloa",
    address: null,
    price: null,
    payment: null,
    ageLimit: null,
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
  {
    name: "Cornelio Vega & Su Dinastía",
    date: "4 de diciembre de 2026",
    sortDate: "2026-12-04",
    time: "8:00 PM",
    city: "Los Mochis, Sinaloa",
    venue: "Los Mochis, Sinaloa",
    address: null,
    price: null,
    payment: null,
    ageLimit: null,
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
  {
    name: "Tombochio",
    date: "14 de noviembre de 2026",
    sortDate: "2026-11-14",
    time: "8:00 PM",
    city: "Guasave, Sinaloa",
    venue: "Guasave, Sinaloa",
    address: null,
    price: null,
    payment: null,
    ageLimit: null,
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
  {
    name: "Banda El Recodo",
    date: "6 de noviembre de 2026",
    sortDate: "2026-11-06",
    time: "8:00 PM",
    city: "Guasave, Sinaloa",
    venue: "Guasave, Sinaloa",
    address: null,
    price: null,
    payment: null,
    ageLimit: null,
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
  {
    name: "Hernán El Potro",
    date: "26 de noviembre de 2026",
    sortDate: "2026-11-26",
    time: "8:00 PM",
    city: "Mazatlán, Sinaloa",
    venue: "Mazatlán, Sinaloa",
    address: null,
    price: null,
    payment: null,
    ageLimit: null,
    category: "Concierto",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Escenario de concierto iluminado frente a una multitud",
    imagePosition: "center 53%",
  },
];

const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

const eventGrid = document.querySelector("#event-grid");
const eventCount = document.querySelector("#event-count");
const searchInput = document.querySelector("#event-search");
const cityFilter = document.querySelector("#city-filter");
const emptyState = document.querySelector("#empty-state");
const detailsDialog = document.querySelector("#event-details");
const detailsTitle = document.querySelector("#details-title");
const detailsContent = document.querySelector("#details-content");
const detailsClose = document.querySelector(".details-close");
const detailsNote = document.querySelector("#details-note");
const ticketSelection = document.querySelector("#ticket-selection");
const ticketQuantity = document.querySelector("#ticket-quantity");
const ticketAvailability = document.querySelector("#ticket-availability");
const ticketValidation = document.querySelector("#ticket-validation");
const ticketConfirmation = document.querySelector("#ticket-confirmation");
const confirmSelection = document.querySelector("#confirm-selection");
const summaryEvent = document.querySelector("#summary-event");
const summaryDate = document.querySelector("#summary-date");
const summaryPrice = document.querySelector("#summary-price");
const summaryQuantity = document.querySelector("#summary-quantity");
const summaryTotal = document.querySelector("#summary-total");
const sortedEvents = [...events].sort((first, second) =>
  first.sortDate.localeCompare(second.sortDate),
);
let currentEvent = null;

const cities = [...new Set(sortedEvents.map((event) => event.city))].sort((a, b) =>
  a.localeCompare(b, "es"),
);

cities.forEach((city) => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  cityFilter.append(option);
});

function renderEvents() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("es");
  const selectedCity = cityFilter.value;
  const matchingEvents = sortedEvents.filter((event) => {
    const searchableText = `${event.name} ${event.city} ${event.venue}`.toLocaleLowerCase("es");
    return searchableText.includes(searchTerm) && (!selectedCity || event.city === selectedCity);
  });

  eventGrid.innerHTML = matchingEvents
    .map(
      (event, index) => `
      <article class="event-card" style="--card-index: ${index}">
        <div class="event-image-wrap">
          <img
            class="event-image"
            src="${event.image}"
            alt="${event.imageAlt}"
            style="object-position: ${event.imagePosition}"
            loading="${index < 3 ? "eager" : "lazy"}"
          />
          <span class="event-category">${event.category}</span>
          <span class="image-shade" aria-hidden="true"></span>
        </div>
        <div class="event-content">
          <p class="event-date">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.6" />
              <path d="M6.5 3.5v3M13.5 3.5v3M3.5 9h13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            </svg>
            ${event.date}${event.time ? ` · ${event.time}` : ""}
          </p>
          <h2 class="event-name">${event.name}</h2>
          <p class="event-venue">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16 8.3c0 4.2-6 9-6 9s-6-4.8-6-9a6 6 0 1 1 12 0Z" stroke="currentColor" stroke-width="1.6" />
              <circle cx="10" cy="8" r="2" stroke="currentColor" stroke-width="1.6" />
            </svg>
            <span>${event.venue}</span>
          </p>
          ${event.highlights ? `<div class="event-highlights">${event.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}</div>` : ""}
          <div class="event-card-bottom">
            <p class="event-price"><span>${event.price === null ? "Precio" : "Desde"}</span>${event.price === null ? "Por confirmar" : currencyFormatter.format(event.price)}</p>
            <button class="details-button" type="button" data-event-name="${event.name}" aria-label="Ver detalles de ${event.name}">
              Ver detalles
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `,
    )
    .join("");

  eventCount.textContent = matchingEvents.length;
  emptyState.hidden = matchingEvents.length > 0;
}

function showEventDetails(event) {
  currentEvent = event;
  detailsTitle.textContent = event.name;
  const details = [
    ["Fecha", event.date],
    ["Hora", event.time || "Por confirmar"],
    ["Ciudad", event.city],
    ["Lugar", event.venue],
    ["Dirección", event.address || "Por confirmar"],
    ["Precio", event.price === null ? "Por confirmar" : currencyFormatter.format(event.price)],
    ["Pago", event.payment || "Por confirmar"],
    ["Edad", event.ageLimit || "Por confirmar"],
  ];

  detailsContent.replaceChildren(
    ...details.flatMap(([label, value]) => {
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = label;
      description.textContent = value;
      return [term, description];
    }),
  );

  ticketQuantity.value = "1";
  ticketConfirmation.hidden = true;
  if (Number.isFinite(event.price) && event.price > 0) {
    detailsNote.hidden = true;
    ticketSelection.hidden = false;
    const hasInventory =
      Number.isSafeInteger(event.availableTickets) && event.availableTickets >= 0;
    if (hasInventory) {
      ticketQuantity.max = String(event.availableTickets);
      ticketAvailability.textContent = `Boletos disponibles: ${event.availableTickets}`;
      ticketAvailability.hidden = false;
    } else {
      ticketQuantity.removeAttribute("max");
      ticketAvailability.hidden = true;
    }
    updateTicketSelection();
  } else {
    ticketSelection.hidden = true;
    detailsNote.textContent =
      "La selección de boletos estará disponible cuando se confirme el precio del evento.";
    detailsNote.hidden = false;
  }
  detailsDialog.showModal();
}

function updateTicketSelection() {
  if (!currentEvent || !Number.isFinite(currentEvent.price)) return;

  const rawQuantity = ticketQuantity.value;
  const quantity = ticketQuantity.valueAsNumber;
  const hasInventory =
    Number.isSafeInteger(currentEvent.availableTickets) && currentEvent.availableTickets >= 0;
  let validationMessage = "";

  if (rawQuantity === "") {
    validationMessage = "Ingresa la cantidad de boletos que deseas.";
  } else if (!Number.isSafeInteger(quantity) || quantity < 1) {
    validationMessage = "Ingresa una cantidad entera de al menos un boleto.";
  } else if (hasInventory && currentEvent.availableTickets === 0) {
    validationMessage = "Este evento ya no tiene boletos disponibles.";
  } else if (hasInventory && quantity > currentEvent.availableTickets) {
    validationMessage = `Solo hay ${currentEvent.availableTickets} boletos disponibles.`;
  } else if (!Number.isSafeInteger(currentEvent.price * quantity)) {
    validationMessage = "La cantidad es demasiado grande para calcular el importe de forma segura.";
  }

  const isValid = validationMessage === "";
  ticketValidation.textContent = validationMessage;
  ticketValidation.hidden = isValid;
  confirmSelection.disabled = !isValid;
  summaryEvent.textContent = currentEvent.name;
  summaryDate.textContent = `${currentEvent.date}${currentEvent.time ? ` · ${currentEvent.time}` : " · Horario por confirmar"}`;
  summaryPrice.textContent = currencyFormatter.format(currentEvent.price);
  summaryQuantity.textContent = rawQuantity || "—";
  summaryTotal.textContent = isValid
    ? currencyFormatter.format(currentEvent.price * quantity)
    : "—";
}

searchInput.addEventListener("input", renderEvents);
cityFilter.addEventListener("change", renderEvents);
ticketQuantity.addEventListener("input", () => {
  ticketConfirmation.hidden = true;
  updateTicketSelection();
});
confirmSelection.addEventListener("click", () => {
  if (!currentEvent) return;
  updateTicketSelection();
  if (confirmSelection.disabled) return;

  const quantity = ticketQuantity.valueAsNumber;
  const total = currencyFormatter.format(currentEvent.price * quantity);
  ticketConfirmation.textContent =
    `Selección confirmada: ${quantity} ${quantity === 1 ? "boleto" : "boletos"} para ${currentEvent.name}, por ${total}. Esta es una demostración; no se realizó ningún cobro.`;
  ticketConfirmation.hidden = false;
});
eventGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".details-button");
  if (!button) return;

  const selectedEvent = sortedEvents.find((item) => item.name === button.dataset.eventName);
  if (selectedEvent) showEventDetails(selectedEvent);
});
detailsClose.addEventListener("click", () => detailsDialog.close());
detailsDialog.addEventListener("click", (event) => {
  if (event.target === detailsDialog) detailsDialog.close();
});

renderEvents();
