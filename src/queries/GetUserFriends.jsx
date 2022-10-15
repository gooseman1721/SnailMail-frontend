import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_user_friends } from "../APIServices";

export default function GetUserFriends(props) {
  const { isLoading, isError, data, error } = useQuery(
    ["fief_login_user"],
    () => get_user_friends(backendBaseUrl, props.accessToken)
  );

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  return <>{JSON.stringify(data)}</>;
}
