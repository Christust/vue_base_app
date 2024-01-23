<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import LoaderComponent from "@/components/shared/LoaderComponent.vue";
import { useCounterStore } from "@/stores/counter";

const useCounter = useCounterStore();
const router = useRoute();
</script>
<template>
  <DefaultLayout v-if="router.path !== '/login'">
    <template #mainContent>
      <router-view></router-view>
    </template>
  </DefaultLayout>
  <LoginLayout v-else>
    <template #mainContent>
      <router-view></router-view>
    </template>
  </LoginLayout>
  <LoaderComponent v-if="useCounter.getCounter > 0" />
</template>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
