# EventTickets

Frontend para consultar eventos y guardar compras simuladas asociadas a perfiles de demostración. No realiza cobros; las fichas, promociones y mapas abren servicios externos.

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

El catálogo activo se sirve desde `index.html` y usa los eventos de `src/data/events.js` a través de `events.js`. La vista de compra incluye una portada de Eventikets, búsqueda por texto y filtros por categoría y ciudad, con secciones destacadas y próximos eventos basadas en el catálogo existente. La navegación muestra por separado las vistas de compra, perfil y compras. En la vista de compra, los eventos con precio confirmado permiten elegir la cantidad y consultar el total. Al confirmar, se guarda una compra simulada en `localStorage`, asociada al identificador del perfil actual. El perfil y su historial se conservan al recargar la página; el nombre y correo pueden editarse desde el perfil.

Los eventos de Ticketstar se mantienen en `src/data/events.js` con enlaces a sus fichas, imágenes promocionales y búsquedas de ubicación en Google Maps. Los precios de Rogelio Ramos, Cornelio Vega, Tombochio en Guasave, Banda El Recodo y Hernán El Potro fueron proporcionados por el usuario y aún no están verificados en Ticketstar; los otros precios se muestran como pendientes. Las restricciones de edad y condiciones de acceso se indican como información por confirmar cuando la ficha no las publica. La compra real no se procesa desde Eventikets.

El registro y el inicio de sesión son solo demostraciones por correo: no hay contraseñas, autenticación segura ni backend. `localStorage` no protege la información frente a otras personas que usen el mismo navegador, y los datos pueden inspeccionarse o modificarse. No guardes contraseñas ni datos bancarios. La confirmación no procesa ningún pago.
