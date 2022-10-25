import React from "react";
import { useQuery } from "@tanstack/react-query";

import { backendBaseUrl, get_friend_message_data } from "../APIServices";
import ChatBubble from "../components/ChatBubble";

export default function FriendChatMessages(props) {
  const { isLoading, isError, data, error } = useQuery(
    [`messages_from_friend_${props.friendId}`],
    () =>
      get_friend_message_data(backendBaseUrl, props.accessToken, props.friendId)
  );

  if (isLoading) {
    return <>Loading..</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  const msgList = data.all_messages?.length ? (
    data.all_messages.map((message) => {
      console.log(data.all_messages?.length);
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

  return <>{msgList}</>;
}
