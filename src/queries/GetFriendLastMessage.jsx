import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_friend_last_message } from "../APIServices";

export default function GetFriendLastMessage(props) {
  const { accessToken, friendId, refresh, setRefresh } = props;

  const { isLoading, isError, data, error, refetch } = useQuery(
    [`last_message_from_friend_${friendId}`],
    () => get_friend_last_message(backendBaseUrl, accessToken, friendId)
  );

  useEffect(() => {
    if (refresh) {
      refetch();
      setRefresh(false);
    }
  }, [refresh]);

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  if (data === null) {
    return <>No messages</>
  }

  return <>{data.content}</>;
}
