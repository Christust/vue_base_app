// Main
import { createApp } from "vue";
import App from "./App.vue";

// Router
import router from "@/router";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import registerComponents from "@/icons";

// Pinia
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

// Create Vue App
const app = createApp(App);

// Register Router
app.use(router);

// Create currency constant function 
const currency = Intl.NumberFormat('en-US');
app.config.globalProperties.$currency = currency;
// Example
// ${{ $currency.format(value) }}

// Register Fontawesome
registerComponents();
app.component("font-awesome-icon", FontAwesomeIcon);

// Create pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);

// Mount App
app.mount("#app");

