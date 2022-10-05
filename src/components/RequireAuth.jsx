import { useEffect } from "react";
import { useFiefAuth, useFiefIsAuthenticated } from "@fief/fief/react";

export default function RequireAuth({ children }) {
  const fiefAuth = useFiefAuth();
  const isAuthenticated = useFiefIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      fiefAuth.redirectToLogin(
        `${window.location.protocol}//${window.location.host}/callback`
      );
    }
  }, [fiefAuth, isAuthenticated]);

  return <>{isAuthenticated && children}</>;
}
