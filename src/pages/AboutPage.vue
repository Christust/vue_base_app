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
        <img src="/images/logos/firebase.png" />
      </div>
      <div class="card cardGradient col-1">
        <img src="/images/logos/github.png" />
      </div>
      <div class="card cardGradient col-1">
        <img src="/images/logos/pinia.svg" />
      </div>
      <div class="card cardGradient col-1">
        <img
          class="p-2"
          src="/images/logos/vue.svg"
        />
      </div>
      <div class="card cardGradient col-1">
        <img
          class="p-1"
          src="/images/logos/bootstrap.svg"
        />
      </div>
      <div class="card cardGradient col-1">
        <img src="/images/logos/axios.png" />
      </div>
      <div class="card cardGradient col-1">
        <img
          src="/images/logos/fontawesome.svg"
        />
      </div>
      <div class="card cardGradient col-1">
        <img
          src="/images/logos/vue-router.png"
        />
      </div>
      <div class="card cardGradient col-1">
        <img
          class="p-1"
          src="/images/logos/github-actions.svg"
        />
      </div>
    </div>
  </div>
</template>
