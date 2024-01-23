import { useAuthStore } from "@/stores/auth";

function needAuthentication(to) {
  const useAuth = useAuthStore();
  if (
    // make sure the user is authenticated
    !useAuth.isLoggedIn &&
    // Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return true;
  }
  return false;
}

function canNavigateToLogin(to) {
  const useAuth = useAuthStore();
  if (
    // make sure the user is authenticated
    useAuth.isLoggedIn &&
    // Avoid an infinite redirect
    to.name === "login"
  ) {
    // redirect the user to the login page
    return false;
  }
  return true;
}

export { needAuthentication, canNavigateToLogin };
