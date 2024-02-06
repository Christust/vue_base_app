<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import routesConstant from '@/constants/routes'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const routes = ref(routesConstant)
</script>

<template>
  <nav class="sidebar">
    <div class="sidebar__sidebarRouteContainer">
      <div @click="router.push({ name: 'home' })" class="sidebar__sidebarRoute">
        <font-awesome-icon size="xl" icon="fa-solid fa-microchip" class="me-3" />
        <h3 class="text-white m-0">DAPI</h3>
      </div>
      <hr />
    </div>
    <div class="d-flex flex-column">
      <div
        v-for="(route, index) in routes"
        :key="route.name + index"
        class="sidebar__sidebarRouteContainer"
      >
        <div
          class="sidebar__sidebarRoute sidebar__sidebarRoute--button"
          @click="router.push({ name: route.name })"
        >
          <font-awesome-icon size="xl" :icon="route.icon" class="me-3" />
          <span v-text="route.title"></span>
        </div>
      </div>
      <div class="sidebar__sidebarRouteContainer">
        <div
          @click="authStore.logout()"
          class="sidebar__sidebarRoute sidebar__sidebarRoute--button"
        >
          <font-awesome-icon size="xl" icon="fa-solid fa-right-from-bracket" class="me-3" />
          <span>Salir</span>
        </div>
      </div>
    </div>
  </nav>
</template>
