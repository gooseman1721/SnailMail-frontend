import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_friend_requests_to_user } from "../APIServices";
import FriendElement from "../components/FriendElement";

export default function GetFriendRequestsToUser(props) {
  const { isLoading, isError, data, error } = useQuery(
    ["get_friend_requests_to_user"],
    () => get_friend_requests_to_user(backendBaseUrl, props.accessToken)
  );

  const [childRefresh, setChildRefresh] = useState(false);
  function handleChildRefresh() {
    setChildRefresh(!childRefresh);
  }

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
        acceptRequest={true}
        refreshRequest={handleChildRefresh}
        accessToken={props.accessToken}
        userId={userElement.id}
      ></FriendElement>
    );
  });

  return <>{userList}</>;
}
