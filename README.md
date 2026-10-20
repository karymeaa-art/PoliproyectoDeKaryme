# EventTickets

Frontend para consultar eventos y probar una selección de boletos. La confirmación es solo una demostración local: no realiza cobros, no incluye cuentas de usuario ni se conecta con servicios externos.

## Requisitos

- Node.js y npm

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

Vite mostrará la dirección local donde se puede abrir la página.

## Compilar

```bash
npm run build
```

## Estructura

```text
src/
  components/   Componentes reutilizables de la interfaz
  data/         Eventos ficticios para las tarjetas
  pages/        Página principal
  styles/       Estilos globales y del sitio
  App.jsx       Estructura principal
  main.jsx      Punto de entrada de React
```

El catálogo que se publica desde `index.html` se mantiene en `events.js`; los eventos con precio confirmado permiten elegir cantidad y consultar el total. Si un evento incluye `availableTickets`, la cantidad se limita a esa disponibilidad. La selección no se guarda ni realiza pagos. Las opciones Mis boletos y Mi perfil son solo elementos visuales para futuras funcionalidades.
