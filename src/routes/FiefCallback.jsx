import { useEffect } from "react";
import { useFiefAuth } from "@fief/fief/react";
import { useNavigate } from "react-router-dom";

export default function FiefCallback() {
  const fiefAuth = useFiefAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fiefAuth
      .authCallback(
        `${window.location.protocol}//${window.location.host}/callback`
      )
      .then(() => {
        navigate("/");
      });
  }, [fiefAuth, navigate]);

  return <p>Callback</p>;
}
