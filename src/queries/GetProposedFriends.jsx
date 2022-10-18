import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_friends_to_display } from "../APIServices";

import FriendElement from "../components/FriendElement";

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
      <FriendElement
        key={userElement.id.toString()}
        userName={userElement.user_name.toString()}
      ></FriendElement>
    );
  });

  return <>{userList}</>;
}
