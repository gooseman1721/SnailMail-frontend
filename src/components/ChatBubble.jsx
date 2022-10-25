import React from "react";

export default function ChatBubble(props) {
  if (props.fromFriend) {
    return (
      <>
        <b>
          <p>Friend message content: {props.messageContent}</p>
          <p>sent at: {props.messageCreatedDatetime} </p>
        </b>
      </>
    );
  }

  return (
    <>
      <b>
        <p>My message content: {props.messageContent}</p>
        <p>sent at: {props.messageCreatedDatetime} </p>
      </b>
    </>
  );
}
