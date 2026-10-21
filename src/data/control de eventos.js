import { events } from "./events.js";

const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

const featuredEventsGrid = document.querySelector("#featured-events-grid");
const upcomingEventsGrid = document.querySelector("#upcoming-events-grid");
const eventCount = document.querySelector("#event-count");
const searchInput = document.querySelector("#event-search");
const cityFilter = document.querySelector("#city-filter");
const categoryFilter = document.querySelector("#category-filter");
const emptyState = document.querySelector("#empty-state");
const detailsDialog = document.querySelector("#event-details");
const detailsTitle = document.querySelector("#details-title");
const detailsContent = document.querySelector("#details-content");
const ticketstarEventLink = document.querySelector("#ticketstar-event-link");
const promotionLink = document.querySelector("#promotion-link");
const purchaseLink = document.querySelector("#purchase-link");
const mapLink = document.querySelector("#map-link");
const purchaseLinkNote = document.querySelector("#purchase-link-note");
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
const profileGuest = document.querySelector("#profile-guest");
const profileActive = document.querySelector("#profile-active");
const profileName = document.querySelector("#profile-name");
const profileEmail = document.querySelector("#profile-email");
const profileStorageError = document.querySelector("#profile-storage-error");
const storageMessage = document.querySelector("#storage-message");
const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginMessage = document.querySelector("#login-message");
const registerForm = document.querySelector("#register-form");
const registerName = document.querySelector("#register-name");
const registerEmail = document.querySelector("#register-email");
const registerMessage = document.querySelector("#register-message");
const logoutButton = document.querySelector("#logout-button");
const editProfileButton = document.querySelector("#edit-profile-button");
const editProfileForm = document.querySelector("#edit-profile-form");
const editName = document.querySelector("#edit-name");
const editEmail = document.querySelector("#edit-email");
const editProfileMessage = document.querySelector("#edit-profile-message");
const cancelEditProfile = document.querySelector("#cancel-edit-profile");
const purchasesSignin = document.querySelector("#purchases-signin");
const purchasesEmpty = document.querySelector("#purchases-empty");
const purchaseList = document.querySelector("#purchase-list");
const purchaseDetail = document.querySelector("#purchase-detail");
const purchaseDetailTitle = document.querySelector("#purchase-detail-title");
const purchaseDetailContent = document.querySelector("#purchase-detail-content");
const purchaseBackButton = document.querySelector("#purchase-back-button");
const catalogView = document.querySelector("#comprar");
const profileView = document.querySelector("#perfil");
const purchasesView = document.querySelector("#compras");
const navigationLinks = [...document.querySelectorAll(".main-nav .nav-link")];
const sortedEvents = [...events].sort((first, second) =>
  first.sortDate.localeCompare(second.sortDate),
);
const featuredEventNames = new Set(sortedEvents.slice(0, 3).map((event) => event.name));
let currentEvent = null;
let activeProfileId = null;
let pendingPurchase = null;
let isConfirmingPurchase = false;

const storageKeys = {
  profiles: "eventikets.profiles.v1",
  purchases: "eventikets.purchases.v1",
  activeProfileId: "eventikets.activeProfileId.v1",
};
let storageReady = true;

const cities = [...new Set(sortedEvents.map((event) => event.city))].sort((a, b) =>
  a.localeCompare(b, "es"),
);

cities.forEach((city) => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  cityFilter.append(option);
});

const categories = [...new Set(sortedEvents.map((event) => event.category))].sort((a, b) =>
  a.localeCompare(b, "es"),
);

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.append(option);
});

function showStorageError(error) {
  const message =
    "No se pudo acceder al almacenamiento local. Revisa la configuración del navegador e inténtalo de nuevo.";
  profileStorageError.textContent = message;
  profileStorageError.hidden = false;
  storageMessage.textContent = message;
  storageMessage.hidden = false;
  console.error(message, error);
}

function readStoredArray(key) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) return [];

    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) {
      throw new TypeError(`El dato guardado en ${key} no es una lista.`);
    }
    return parsed;
  } catch (error) {
    storageReady = false;
    showStorageError(error);
    return null;
  }
}

function writeStoredValue(key, value) {
  if (!storageReady) return false;
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    storageReady = false;
    showStorageError(error);
    return false;
  }
}

let profiles = readStoredArray(storageKeys.profiles) || [];
let purchases = readStoredArray(storageKeys.purchases) || [];
try {
  activeProfileId = localStorage.getItem(storageKeys.activeProfileId);
} catch (error) {
  storageReady = false;
  showStorageError(error);
}
if (activeProfileId && !profiles.some((profile) => profile.id === activeProfileId)) {
  activeProfileId = null;
}

function setFormMessage(element, message) {
  element.textContent = message;
  element.hidden = message === "";
}

function getActiveProfile() {
  return profiles.find((profile) => profile.id === activeProfileId) || null;
}

function formatDate(value) {
  return new Date(value).toLocaleString("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function renderPurchaseList() {
  const profile = getActiveProfile();
  const userPurchases = profile
    ? purchases
        .filter((purchase) => purchase.userId === profile.id)
        .sort((first, second) => second.purchasedAt.localeCompare(first.purchasedAt))
    : [];

  purchasesSignin.hidden = Boolean(profile);
  purchasesEmpty.hidden = !profile || userPurchases.length > 0;
  purchaseList.hidden = !profile || userPurchases.length === 0;
  purchaseDetail.hidden = true;
  purchaseList.replaceChildren();

  userPurchases.forEach((purchase) => {
    const card = document.createElement("article");
    card.className = "purchase-card";

    const information = document.createElement("div");
    const title = document.createElement("h3");
    const summary = document.createElement("p");
    const date = document.createElement("p");
    const status = document.createElement("span");
    title.textContent = purchase.eventName;
    summary.textContent =
      `${purchase.ticketQuantity} ${purchase.ticketQuantity === 1 ? "boleto" : "boletos"} · ` +
      `${currencyFormatter.format(purchase.unitPrice)} c/u · Total ${currencyFormatter.format(purchase.total)}`;
    date.textContent = `Compra: ${formatDate(purchase.purchasedAt)}`;
    status.className = "purchase-status";
    status.textContent = purchase.status;
    information.append(title, summary, date, status);

    const detailButton = document.createElement("button");
    detailButton.className = "details-button";
    detailButton.type = "button";
    detailButton.textContent = "Ver detalle";
    detailButton.dataset.purchaseId = purchase.id;
    card.append(information, detailButton);
    purchaseList.append(card);
  });
}

function renderCurrentScreen() {
  const requestedScreen = location.hash.slice(1);
  const screen =
    requestedScreen === "perfil" || requestedScreen === "compras"
      ? requestedScreen
      : "comprar";

  if (screen === "compras" && !getActiveProfile()) {
    location.hash = "perfil";
    catalogView.hidden = true;
    profileView.hidden = false;
    purchasesView.hidden = true;
    navigationLinks.forEach((link) => {
      if (link.hash === "#perfil") link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    profileView.scrollIntoView({ block: "start" });
    return;
  }

  catalogView.hidden = screen !== "comprar";
  profileView.hidden = screen !== "perfil";
  purchasesView.hidden = screen !== "compras";
  const activeHash =
    requestedScreen === "inicio" ? "#inicio" : `#${screen}`;
  navigationLinks.forEach((link) => {
    const isCurrent = link.hash === activeHash;
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (screen === "compras") renderPurchaseList();
}

function renderAccount() {
  const profile = getActiveProfile();
  profileGuest.hidden = Boolean(profile);
  profileActive.hidden = !profile;
  if (profile) {
    profileName.textContent = profile.name;
    profileEmail.textContent = profile.email;
  }
  renderPurchaseList();
}

function startProfileSession(profile) {
  if (!writeStoredValue(storageKeys.activeProfileId, profile.id)) return false;
  activeProfileId = profile.id;
  setFormMessage(loginMessage, "");
  setFormMessage(registerMessage, "");
  renderAccount();
  return true;
}

function resumePendingPurchase() {
  if (!pendingPurchase) return;

  const selection = pendingPurchase;
  pendingPurchase = null;
  location.hash = "comprar";
  renderCurrentScreen();
  showEventDetails(selection.event);
  ticketQuantity.value = String(selection.quantity);
  updateTicketSelection();
  ticketConfirmation.textContent =
    "Sesión iniciada. Revisa la selección y confirma para guardar la compra simulada.";
  ticketConfirmation.hidden = false;
}

function showPurchaseDetail(purchaseId) {
  const profile = getActiveProfile();
  const purchase = purchases.find(
    (item) => item.id === purchaseId && profile && item.userId === profile.id,
  );
  if (!purchase) return;

  purchaseDetailTitle.textContent = purchase.eventName;
  const details = [
    ["Identificador", purchase.id],
    ["Fecha de compra", formatDate(purchase.purchasedAt)],
    ["Fecha del evento", purchase.eventDate || "Por confirmar"],
    ["Cantidad", `${purchase.ticketQuantity} ${purchase.ticketQuantity === 1 ? "boleto" : "boletos"}`],
    ["Precio unitario", currencyFormatter.format(purchase.unitPrice)],
    ["Total", currencyFormatter.format(purchase.total)],
    ["Estado", purchase.status],
  ];
  purchaseDetailContent.replaceChildren(
    ...details.flatMap(([label, value]) => {
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = label;
      description.textContent = value;
      return [term, description];
    }),
  );
  purchaseList.hidden = true;
  purchasesEmpty.hidden = true;
  purchaseDetail.hidden = false;
  purchaseDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderEvents() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("es");
  const selectedCity = cityFilter.value;
  const selectedCategory = categoryFilter.value;
  const matchingEvents = sortedEvents.filter((event) => {
    const searchableText =
      `${event.name} ${(event.artists || []).join(" ")} ${event.city} ${event.venue} ${event.category} ${event.description || ""}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es");
    const normalizedSearch = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return (
      searchableText.includes(normalizedSearch) &&
      (!selectedCity || event.city === selectedCity) &&
      (!selectedCategory || event.category === selectedCategory)
    );
  });

  const featuredEvents = matchingEvents.filter((event) => featuredEventNames.has(event.name));
  const upcomingEvents = matchingEvents.filter((event) => !featuredEventNames.has(event.name));

  function renderEventCard(event, index) {
    const description = event.description
      ? `<p class="event-description">${event.description}</p>`
      : "";
    const venueLabel = event.venue.toLocaleLowerCase("es").includes(event.city.toLocaleLowerCase("es"))
      ? event.venue
      : `${event.venue} · ${event.city}`;
    return `
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
            ${event.date} · ${event.time || "Horario por confirmar"}
          </p>
          <h2 class="event-name">${event.name}</h2>
          ${description}
          <p class="event-venue">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16 8.3c0 4.2-6 9-6 9s-6-4.8-6-9a6 6 0 1 1 12 0Z" stroke="currentColor" stroke-width="1.6" />
              <circle cx="10" cy="8" r="2" stroke="currentColor" stroke-width="1.6" />
            </svg>
            <span>${venueLabel}</span>
          </p>
          ${event.highlights ? `<div class="event-highlights">${event.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}</div>` : ""}
          <div class="event-card-bottom">
            <p class="event-price"><span>${event.price === null ? "Precio" : event.priceSource ? "Precio indicado" : "Desde"}</span>${event.price === null ? "Por confirmar" : currencyFormatter.format(event.price)}</p>
            <button class="details-button" type="button" data-event-name="${event.name}" aria-label="Ver detalles de ${event.name}">
              Ver detalles
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  eventCount.textContent = matchingEvents.length;
  emptyState.hidden = matchingEvents.length > 0;
  featuredEventsGrid.innerHTML = featuredEvents.map(renderEventCard).join("");
  upcomingEventsGrid.innerHTML = upcomingEvents.map(renderEventCard).join("");
  document.querySelector(".event-shelf[aria-labelledby='featured-title']").hidden =
    featuredEvents.length === 0;
  document.querySelector(".upcoming-shelf").hidden = upcomingEvents.length === 0;
}

function showEventDetails(event) {
  currentEvent = event;
  isConfirmingPurchase = false;
  confirmSelection.textContent = "Confirmar compra simulada";
  detailsTitle.textContent = event.name;
  const details = [
    ["Fecha", event.date],
    ["Hora", event.time || "Información por confirmar"],
    ["Artistas", event.artists?.join(", ") || "Información por confirmar"],
    ["Categoría", event.category || "Información por confirmar"],
    ["Ciudad", event.city],
    ["Lugar", event.venue],
    ["Dirección", event.address || "Información por confirmar"],
    ["Precio", event.price === null ? "Información por confirmar" : `${currencyFormatter.format(event.price)} MXN por boleto`],
    ...(event.priceSource ? [["Fuente del precio", event.priceSource]] : []),
    ["Pago", event.payment || "Información por confirmar"],
    ["Restricciones de edad", event.ageLimit || "Información por confirmar"],
    ["Condiciones de acceso", event.accessConditions || "Información por confirmar"],
    ...(event.description ? [["Información", event.description]] : []),
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

  ticketstarEventLink.href = event.ticketstarUrl || "#";
  ticketstarEventLink.hidden = !event.ticketstarUrl;
  promotionLink.href = event.promotionUrl || event.image;
  promotionLink.hidden = !event.promotionUrl && !event.image;
  purchaseLink.href = event.purchaseUrl || "#";
  purchaseLink.hidden = !event.purchaseUrl;
  purchaseLinkNote.hidden = Boolean(event.purchaseUrl);
  mapLink.href = event.mapUrl || "#";
  mapLink.hidden = !event.mapUrl;

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
categoryFilter.addEventListener("change", renderEvents);
ticketQuantity.addEventListener("input", () => {
  ticketConfirmation.hidden = true;
  confirmSelection.textContent = "Confirmar compra simulada";
  confirmSelection.disabled = false;
  isConfirmingPurchase = false;
  updateTicketSelection();
});
confirmSelection.addEventListener("click", () => {
  if (!currentEvent || isConfirmingPurchase) return;
  isConfirmingPurchase = true;
  confirmSelection.disabled = true;
  updateTicketSelection();
  if (ticketValidation.hidden === false) {
    isConfirmingPurchase = false;
    return;
  }

  const quantity = ticketQuantity.valueAsNumber;
  if (!getActiveProfile()) {
    pendingPurchase = { event: currentEvent, quantity };
    detailsDialog.close();
    setFormMessage(loginMessage, "Inicia sesión para conservar tu compra simulada.");
    location.hash = "perfil";
    renderCurrentScreen();
    profileView.scrollIntoView({ behavior: "smooth", block: "start" });
    loginEmail.focus({ preventScroll: true });
    isConfirmingPurchase = false;
    confirmSelection.disabled = false;
    return;
  }

  const total = currencyFormatter.format(currentEvent.price * quantity);
  const purchase = {
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    userId: activeProfileId,
    eventName: currentEvent.name,
    purchasedAt: new Date().toISOString(),
    eventDate: currentEvent.date || null,
    ticketQuantity: quantity,
    unitPrice: currentEvent.price,
    total: currentEvent.price * quantity,
    status: "Compra simulada",
  };
  const nextPurchases = [...purchases, purchase];
  if (!writeStoredValue(storageKeys.purchases, JSON.stringify(nextPurchases))) {
    isConfirmingPurchase = false;
    confirmSelection.disabled = false;
    return;
  }
  purchases = nextPurchases;
  renderAccount();
  ticketConfirmation.textContent =
    `Compra simulada guardada para ${quantity} ${quantity === 1 ? "boleto" : "boletos"} de ${currentEvent.name}, por ${total}. No se realizó ningún cobro.`;
  ticketConfirmation.hidden = false;
  confirmSelection.textContent = "Compra simulada guardada";
  confirmSelection.disabled = true;
  isConfirmingPurchase = true;
});
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginEmail.value.trim().toLocaleLowerCase("es");
  const profile = profiles.find((item) => item.email === email);
  if (!profile) {
    setFormMessage(loginMessage, "No encontramos ese perfil. Regístralo para continuar.");
    return;
  }
  if (!startProfileSession(profile)) return;
  resumePendingPurchase();
});
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = registerName.value.trim();
  const email = registerEmail.value.trim().toLocaleLowerCase("es");
  if (!name || !email) {
    setFormMessage(registerMessage, "Escribe tu nombre y un correo electrónico válido.");
    return;
  }
  if (profiles.some((profile) => profile.email === email)) {
    setFormMessage(registerMessage, "Ya existe un perfil con ese correo. Inicia sesión.");
    return;
  }

  const profile = {
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    email,
  };
  const nextProfiles = [...profiles, profile];
  if (!writeStoredValue(storageKeys.profiles, JSON.stringify(nextProfiles))) return;
  profiles = nextProfiles;
  if (!startProfileSession(profile)) return;
  registerForm.reset();
  resumePendingPurchase();
});
logoutButton.addEventListener("click", () => {
  try {
    localStorage.removeItem(storageKeys.activeProfileId);
  } catch (error) {
    showStorageError(error);
    return;
  }
  activeProfileId = null;
  pendingPurchase = null;
  renderAccount();
  location.hash = "perfil";
  renderCurrentScreen();
  profileView.scrollIntoView({ behavior: "smooth", block: "start" });
});
editProfileButton.addEventListener("click", () => {
  const profile = getActiveProfile();
  if (!profile) return;
  editName.value = profile.name;
  editEmail.value = profile.email;
  setFormMessage(editProfileMessage, "");
  editProfileForm.hidden = false;
  editName.focus();
});
cancelEditProfile.addEventListener("click", () => {
  editProfileForm.hidden = true;
  setFormMessage(editProfileMessage, "");
  editProfileButton.focus();
});
editProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = getActiveProfile();
  if (!profile) return;

  const name = editName.value.trim();
  const email = editEmail.value.trim().toLocaleLowerCase("es");
  if (!name || !email) {
    setFormMessage(editProfileMessage, "Escribe un nombre y un correo electrónico válido.");
    return;
  }
  if (profiles.some((item) => item.id !== profile.id && item.email === email)) {
    setFormMessage(editProfileMessage, "Ese correo ya está asociado a otro perfil.");
    return;
  }

  const updatedProfiles = profiles.map((item) =>
    item.id === profile.id ? { ...item, name, email } : item,
  );
  if (!writeStoredValue(storageKeys.profiles, JSON.stringify(updatedProfiles))) return;
  profiles = updatedProfiles;
  editProfileForm.hidden = true;
  renderAccount();
});
purchaseList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-purchase-id]");
  if (button) showPurchaseDetail(button.dataset.purchaseId);
});
purchaseBackButton.addEventListener("click", renderPurchaseList);
document.querySelector(".event-shelf").addEventListener("click", (event) => {
  openSelectedEvent(event);
});
document.querySelector(".upcoming-shelf").addEventListener("click", (event) => {
  openSelectedEvent(event);
});
for (const grid of [featuredEventsGrid, upcomingEventsGrid]) {
  grid.addEventListener(
    "error",
    (event) => {
      if (event.target instanceof HTMLImageElement) event.target.hidden = true;
    },
    true,
  );
}

function openSelectedEvent(event) {
  const button = event.target.closest(".details-button");
  if (!button) return;

  const selectedEvent = sortedEvents.find((item) => item.name === button.dataset.eventName);
  if (selectedEvent) showEventDetails(selectedEvent);
}
detailsClose.addEventListener("click", () => detailsDialog.close());
detailsDialog.addEventListener("click", (event) => {
  if (event.target === detailsDialog) detailsDialog.close();
});
window.addEventListener("hashchange", () => {
  renderCurrentScreen();
  if (!catalogView.hidden && pendingPurchase) resumePendingPurchase();
  if (catalogView.hidden && detailsDialog.open) detailsDialog.close();
});

renderEvents();
renderAccount();
renderCurrentScreen();
