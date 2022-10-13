import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_data_after_user_login } from "../APIServices";

export default function GetUserDataAfterLogin(props) {
  const { isLoading, isError, data, error } = useQuery(["fief_login_user"], () =>
    get_data_after_user_login(backendBaseUrl, props.accessToken)
  );

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  return <>{JSON.stringify(data)}</>;
}
