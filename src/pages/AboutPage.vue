<script setup></script>
<template>
  <div>
    <p>
      Este proyecto servira como guia para crear proyectos basados en Vue 3, Vue Router, con manejo
      del estado global usando Pinia y Pinia Persisted State, para los estilos se usa Bootstrap
      junto a los iconos de Fontawesome.
    </p>
    <p>
      Para las llamadas HTTP se usa Axios configurando las instancia para poder recibir los errores
      y automatizar un logueo y deslogueo del sistema. El sistema tiene protección de rutas
      verificando si un usuario esta autenticado o no. Diviendo las rutas entre publicas y privadas
      para el acceso eficiente de las mismas.
    </p>
    <p>
      Por ultimo este proyecto usa Firebase para el hosting y Github Actions para automzar el
      deploy. Asegurando que cada push a la rama principal haga un deploy de manera automatica
      (CI/CD).
    </p>

    <div class="row justify-content-between aling-items-center">
      <div class="card cardGradient col-1">
        <img src="https://miro.medium.com/v2/resize:fit:600/1*R4c8lHBHuH5qyqOtZb3h-w.png" />
      </div>
      <div class="card cardGradient col-1">
        <img src="https://bitperfect.at/assets/blog-images/Headerbild-Was-ist-GitHub-v2.png" />
      </div>
      <div class="card cardGradient col-1">
        <img src="https://pinia.vuejs.org/logo.svg" />
      </div>
      <div class="card cardGradient col-1">
        <img
          class="p-2"
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        />
      </div>
      <div class="card cardGradient col-1">
        <img
          class="p-1"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
        />
      </div>
      <div class="card cardGradient col-1">
        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png" />
      </div>
      <div class="card cardGradient col-1">
        <img
          src="https://appmarket.unbounce.com/uploads/application/logos/phpy6zmkz-62e0093d9c997.svg"
        />
      </div>
      <div class="card cardGradient col-1">
        <img
          src="https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png"
        />
      </div>
      <div class="card cardGradient col-1">
        <img
          class="p-1"
          src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GithubActions-Dark.svg"
        />
      </div>
    </div>
  </div>
</template>
