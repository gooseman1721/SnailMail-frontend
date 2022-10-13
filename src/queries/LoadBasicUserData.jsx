import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_fief_user_react_fetch } from "../APIServices";

export default function LoadBasicUserData(props) {
  const { isLoading, isError, data, error } = useQuery(
    ["fief_user_info"],
    () => get_fief_user_react_fetch(backendBaseUrl, props.accessToken)
  );

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  return <>{JSON.stringify(data)}</>;
}
