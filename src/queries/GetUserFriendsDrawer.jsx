import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_user_friends } from "../APIServices";
import DrawerFriendElement from "../components/DrawerFriendElement";

export default function GetUserFriendsDrawer(props) {
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
      <DrawerFriendElement
        key={userElement.id.toString()}
        userName={userElement.user_name.toString()}
        userId={userElement.id.toString()}
      ></DrawerFriendElement>
      // <li key={userElement.id.toString()}>{JSON.stringify(userElement)}</li>
    );
  });

  return <>{userList}</>;
}
