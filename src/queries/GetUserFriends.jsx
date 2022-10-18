import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_user_friends } from "../APIServices";
import FriendElement from "../components/FriendElement";

export default function GetUserFriends(props) {
  const { isLoading, isError, data, error } = useQuery(
    ["get_user_friends"],
    () => get_user_friends(backendBaseUrl, props.accessToken)
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
      // <li key={userElement.id.toString()}>{JSON.stringify(userElement)}</li>
    );
  });

  return <>{userList}</>;
}
