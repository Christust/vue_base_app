import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: ref(false),
    refresh_token: ref(false),
    current_user: ref({}),
  }),
  getters: {
    isLoggedIn() {
      return !!this.token;
    },
  },
  actions: {
    login(response) {
      if (response.data?.token) {
        this.token = response.data.token;
        this.refresh_token = response.data.refresh;
        this.current_user = response.data.user;
      }
      router.push({ name: "home" });
    },
    logout() {
      // reset store to original state
      this.$reset();
      router.push({ name: "login" });
    },
  },
  persist: true,
});
