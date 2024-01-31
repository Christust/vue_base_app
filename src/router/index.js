import { createRouter, createWebHistory } from "vue-router";
import {
  needAuthentication,
  canNavigateToLogin,
} from "@/guards/authentication";
import HomePageVue from "@/pages/HomePage.vue";
import AboutPageVue from "@/pages/AboutPage.vue";
import LoginPageVue from "@/pages/LoginPage.vue";

const routes = [
  { path: "/", component: HomePageVue, name: "home" },
  { path: "/about", component: AboutPageVue, name: "about" },
  { path: "/login", component: LoginPageVue, name: "login" },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from) => {
  if (!needAuthentication(to)) return { name: "login" };
  if (!canNavigateToLogin(to)) return { name: from.name };
  // explicitly return false to cancel the navigation
  // return false
});

export default router;
