<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import authService from "@/api/factories/auth";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

function login() {
  // Intento de login

  authService
    .login({ email: email.value, password: password.value })
    .then((res) => {
      // Guardo el token en el store
      authStore.login(res);
    });
}
</script>

<template>
  <div class="loginPage">
    <div class="card shadow col-6 p-5">
      <div class="mb-3">
        <label class="form-label" htmlFor="email"> Usuario </label>
        <input v-model="email" class="form-control" name="email" />
      </div>
      <div class="mb-3">
        <label class="form-label" htmlFor="password"> Contraseña </label>
        <input
          v-model="password"
          class="form-control"
          name="password"
          type="password"
        />
      </div>
      <button class="btn btn-primary" @click="login">Enviar</button>
    </div>
  </div>
</template>
