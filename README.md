# Mi-FLIX
Proyecto de Alura para el uso de React

Mi-FLIX es una aplicación para gestionar videos de diversas categorías. Puedes agregar, editar y eliminar videos, así como ver los videos almacenados en la base de datos.

## Instalación

Para instalar las dependencias del proyecto, asegúrate de tener Node.js y npm instalados. Luego, ejecuta el siguiente comando:

npm install


## Iniciar el Proyecto
Para iniciar el proyecto y el servidor JSON simultáneamente, utiliza el siguiente comando:

npm run dev:both

Esto iniciará tanto el servidor de desarrollo Vite como el servidor JSON en el puerto 3001.

## Uso de la Aplicación

### Agregar un Video

- Navega a la página del formulario presionando el botón "Nuevo Video".
- En el formulario, puedes ingresar un título personalizado para el video o copiar y pegar el título directamente desde el video de YouTube.
- El enlace del video debe ser el que muestra el navegador en la barra de direcciones. Ejemplo: https://www.youtube.com/watch?v=4-5dIiHiebc.
- Escoge una de las categorías disponibles:
    Video Juegos
    Ciencia
    Paranormal
-Presiona el botón de "Guardar" para agregar el video a la base de datos.

### Editar un Video

- En la lista de videos, busca el video que deseas editar.
- Presiona el botón "Editar" en la tarjeta del video.
- Realiza los cambios necesarios en el formulario.
- Presiona el botón de "Guardar" para actualizar los detalles del video.

### Borrar un Video

- En la lista de videos, busca el video que deseas eliminar.
- Presiona el botón "Borrar" en la tarjeta del video.

## Dependencias

### Las principales dependencias utilizadas en este proyecto son:

- React
- React DOM
- React Router DOM

## Las dependencias de desarrollo incluyen:

- Vite
- ESLint
- Concurrently

## Scripts Disponibles

- npm run dev: Inicia el servidor de desarrollo Vite.
- npm run build: Construye el proyecto para producción.
- npm run lint: Ejecuta ESLint en el proyecto.
- npm run preview: Previsualiza la construcción de producción.
- npm run start:json-server: Inicia el servidor JSON en el puerto 3001.
- npm run dev:both: Inicia tanto el servidor de desarrollo Vite como el servidor JSON simultáneamente.
