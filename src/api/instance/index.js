import axios from "axios";
import Swal from "sweetalert2";
import { useCounterStore } from "@/stores/counter";
import { useAuthStore } from "@/stores/auth";

const instance = axios.create({
  baseURL: "https://moderatorem.pythonanywhere.com/",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const useAuth = useAuthStore();
  const useCounter = useCounterStore();
  if (useAuth.isLoggedIn) {
    config.headers.Authorization = `Bearer ${useAuth.token}`;
  }
  useCounter.setCounter(+1);
  return config;
});

instance.interceptors.response.use(
  (res) => {
    const useCounter = useCounterStore();
    useCounter.setCounter(-1);
    return res;
  },
  (error) => {
    const useCounter = useCounterStore();
    useCounter.setCounter(-1);
    if (error.code == "ERR_NETWORK") {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        icon: "error",
        title: "Oops...",
        text: `Error 401 en ${error.response.data.error}`,
      });
      return error;
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error}`,
      });
    }
    return Promise.reject(error);
  }
);

export default instance;
