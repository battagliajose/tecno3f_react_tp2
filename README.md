# Tecno.3F - Curso de React - 2026

# Actividad Obligatoria 3: SPA y Gestión de Estado Global

Aplicación web desarrollada con React, TypeScript y Vite para explorar personajes de la API pública de Rick and Morty. El proyecto evoluciona la Actividad Obligatoria 2 incorporando navegación de una SPA, lógica reutilizable mediante custom hooks y estado global con Context API.

## Tecnologías

- React 19 y TypeScript
- Vite
- React Router 7
- Axios
- React Hook Form
- Rick and Morty API

## Funcionalidades

- Navegación SPA mediante `BrowserRouter`, `Routes` y `Route`.
- Layout compartido con encabezado, barra de navegación, contenido y pie de página.
- Catálogo de personajes con búsqueda y paginación.
- Vista de detalle dinámica para cada personaje.
- Pantalla 404 para rutas inexistentes.
- Sistema de favoritos global: permite agregar, quitar y listar personajes favoritos, además de mostrar el total en la barra de navegación.
- Formulario de contacto implementado con React Hook Form y validación de campos obligatorios.
- Estados de carga y error durante las consultas a la API.

## Rutas

| Ruta           | Descripción                                   |
| -------------- | --------------------------------------------- |
| `/`            | Página de inicio.                             |
| `/catalogo`    | Buscador, paginación y grilla de personajes.  |
| `/detalle/:id` | Detalle del personaje seleccionado.           |
| `/favoritos`   | Grilla de personajes marcados como favoritos. |
| `/contacto`    | Formulario de contacto con React Hook Form.   |
| `*`            | Página de error 404.                          |

## Custom Hooks

La lógica de consulta HTTP no está dentro de los componentes visuales:

- `usePersonajes`: obtiene la lista de personajes, contempla búsqueda, paginación, `loading` y `error`.
- `usePersonaje`: obtiene la información de un personaje a partir de su identificador, junto con los estados `loading` y `error`.

Ambos hooks reutilizan la interfaz `Personaje` para mantener el tipado de los datos de la API.

## Estado global: favoritos

El contexto `favoriteContext`, provisto por `FavoriteProvider`, mantiene un arreglo de `Personaje` y expone las siguientes operaciones tipadas:

- `toggleFavorite(personaje)`: agrega o quita un personaje mediante su `id`.
- `isFavorite(id)`: indica si un personaje pertenece a favoritos.
- `favorites`: permite listar los personajes favoritos y mostrar su cantidad.

## Configuración

Creá un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_API_URL=https://rickandmortyapi.com/api
```

Instalá las dependencias y ejecutá el proyecto:

```bash
npm install
npm run dev
```

Para generar una compilación de producción:

```bash
npm run build
```

## Autor

José A. Battaglia
