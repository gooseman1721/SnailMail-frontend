import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_friend_message_data } from "../APIServices";
import ChatBubble from "../components/ChatBubble";
import { useEffect, useState } from "react";

export default function FriendChatMessages(props) {
  const { isLoading, isError, data, error, refetch } = useQuery(
    [`messages_from_friend_${props.friendId}`],
    () =>
      get_friend_message_data(
        backendBaseUrl,
        props.accessToken,
        props.friendId
      ),
    {
      refetchInterval: 5000,
    }
  );
  
  const [ refreshState, setRefreshState] = useState(props.refresh);

  useEffect(() => {
    console.log("UseEffect call");
    if (refreshState) {
      
      refetch();
      setRefreshState(false);
      props.setRefresh(false);
    }
    else {
      setRefreshState(props.refresh);
    };

  }, [props.refresh, refreshState]);

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  // if (props.refresh) {
  //   refetch();
  //   // props.setRefresh(false);
  // }

  const msgList = data.all_messages?.length ? (
    data.all_messages.map((message) => {
      return (
        <ChatBubble
          key={message.id.toString()}
          messageContent={message.content}
          messageCreatedDatetime={message.created_datetime}
          fromFriend={message.sender_id === props.friendId ? true : false}
        ></ChatBubble>
      );
    })
  ) : (
    <p>No messages..?</p>
  );
  // const messageList = data.all_messages.map((message) => {
  //   return (
  //     <ChatBubble
  //       key={message.id.toString()}
  //       messageContent={message.content}
  //       messageCreatedDatetime={message.created_datetime}
  //       fromFriend={message.sender_id === props.friendId ? true : false}
  //     ></ChatBubble>
  //   );
  // });

  return <>{msgList} refstate: {refreshState.toString()}</>;
}
