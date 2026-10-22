# EventTickets

Frontend web para consultar eventos y guardar compras simuladas asociadas a perfiles de demostración.

La aplicación permite explorar eventos, buscar por texto, filtrar por categoría y ciudad, consultar información y precios disponibles, seleccionar boletos y revisar el historial de compras.

**EventTickets no realiza cobros ni procesa compras reales.**

## Tecnologías utilizadas

- **React:** construcción de la interfaz mediante componentes.
- **Vite:** entorno de desarrollo y herramienta de compilación.
- **JavaScript:** lógica e interactividad de la aplicación.
- **HTML5:** estructura de la página.
- **CSS3:** estilos y diseño adaptable.
- **localStorage:** almacenamiento local de perfiles de demostración e historial de compras.

## Requisitos

- Node.js
- npm

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar a la carpeta del proyecto:

```bash
cd NOMBRE_DEL_REPOSITORIO
```

Instalar las dependencias:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación en el navegador.

## Compilar el proyecto

```bash
npm run build
```

Los archivos de producción se generan en la carpeta `dist/`.

## Estructura del proyecto

```text
src/
├── components/   Componentes reutilizables
├── data/         Información de los eventos
├── pages/        Páginas de la aplicación
├── styles/       Estilos globales y del sitio
├── App.jsx       Estructura principal
└── main.jsx      Punto de entrada de React
```

Otros archivos importantes:

- `index.html`: documento HTML de entrada.
- `vite.config.js`: configuración de Vite.
- `package.json`: dependencias y scripts.
- `README.md`: documentación del proyecto.

## Funcionalidades

- Catálogo de eventos.
- Búsqueda por texto.
- Filtros por categoría y ciudad.
- Secciones de eventos destacados y próximos.
- Consulta de precios y selección de cantidad de boletos cuando el precio está confirmado.
- Compras simuladas.
- Perfiles de demostración.
- Historial de compras asociado al perfil actual.
- Edición del nombre y correo desde el perfil.
- Enlaces externos a fichas de eventos, imágenes promocionales y ubicaciones en Google Maps.

## Información de los eventos

Los eventos se encuentran en `src/data/events.js`.

Algunos precios fueron proporcionados por el usuario y aún no han sido verificados. Los precios pendientes y las condiciones de acceso deben confirmarse en las fuentes correspondientes.

## Publicación

**Aplicación publicada:** PENDIENTE DE PUBLICACIÓN

**Enlace:** PENDIENTE

## Consideraciones

- Las compras son simuladas y no generan boletos reales.
- No se realizan pagos.
- El registro y el inicio de sesión son demostraciones, no autenticación segura.
- `localStorage` almacena datos en el navegador y no constituye una base de datos compartida.
- No se deben introducir contraseñas ni datos bancarios.

## Propósito

Proyecto académico de desarrollo web enfocado en la consulta de eventos, la organización de una interfaz de venta de boletos y la implementación de funcionalidades mediante trabajo ágil.
## enlase de la oagina en github pages
https://karymeaa-art.github.io/PoliproyectoDeKaryme/ 

