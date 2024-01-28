<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'
import routesConstants from "@/constants/routes";
import SidebarComponent from "@/components/navigation/SidebarComponent.vue";
const routes = ref(routesConstants);
const router = useRoute();
</script>

<template>
  <div class="d-flex">
    <SidebarComponent />
    <div class="sideMainContainer mainContainer">
      <header>
        <h3
          v-text="
            routes.filter((route) => route.route === router.path)[0]?.title
          "
        ></h3>
        <hr />
      </header>
      <main class="mainContent"><slot name="mainContent"></slot></main>
      <footer class="footerContent">Made by MODERATOREM</footer>
    </div>
  </div>
</template>
