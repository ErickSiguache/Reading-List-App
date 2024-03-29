# Aplicación Lista de Lectura

Se ha creado esta aplicación de lista de lectura con el propósito de practicar y mejorar mis habilidades en el desarrollo de aplicaciones con Vue.js y TypeScript. He utilizado la `Composition API`, haciendo uso del `script setup` en toda la aplicación. Además, integré la biblioteca de `Vue Router` para la gestión de las rutas donde se realiza el cambio a la página de **favoritos**, `Pinia` para la gestión del estado global que ayuda a compartir información de un componente a otro, sin perder los cambios que ocurren entre diferentes componentes, y también empleé la biblioteca de iconos `Fort Awesome` para incluir iconos en la interfaz de usuario.

### Clonar e instalar las Dependencias:
```cmd
git clone https://github.com/ErickSiguache/Reading-List-App
npm install
```

### Creacion del proyecto

Comandos usados para la creación del proyecto:

```cmd
Ruta > npm create vue@latest

✔ Project name: … reading-list-app
✔ Add TypeScript? … Yes
✔ Add Pinia for state management? … Yes
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

Ruta > cd reading-list-app

reading-list-app > npm install
reading-list-app > npm run dev
```

### Dependencias extras, usadas en el proyecto:

* fortawesome: Empleado para incorporar íconos a la aplicación.
    * https://fontawesome.com/docs/web/use-with/vue/

```cmd
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/vue-fontawesome@latest-3
npm i --save @fortawesome/free-solid-svg-icons
```

### Vista de la aplicación en pantalla completa

<p align="center">
    <img src="./repository/desktop.PNG" alt="Vista de la pagina en pantalla completa">
</p>

### Vista de la aplicación en móviles

<p align="center">
    <img src="./repository/mobile.PNG" alt="Vista de la pagina para móviles" width="200px">
</p>