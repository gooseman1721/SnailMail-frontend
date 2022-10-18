import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_friends_to_display } from "../APIServices";

export default function GetProposedFriends(props) {
  const { isLoading, isError, data, error } = useQuery(
    ["get_proposed_friends"],
    () => get_friends_to_display(backendBaseUrl, props.accessToken)
  );

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  const userList = data.map((userElement) => {
    return (
      <li key={userElement.id.toString()}>{JSON.stringify(userElement)}</li>
    );
  });

  return <ul>{userList}</ul>;
}
