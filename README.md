# EventTickets

Frontend inicial para consultar eventos y explorar una interfaz de venta de boletos. Este proyecto contiene únicamente una base visual: no incluye compras, cuentas de usuario ni conexión con servicios externos.

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

Los eventos de ejemplo se pueden modificar en `src/data/events.js`. Las opciones Mis boletos y Mi perfil son solo elementos visuales para futuras funcionalidades.
