import { useState, useRef } from "react";

import { useParams } from "react-router-dom";
import { useFiefTokenInfo, useFiefUserinfo } from "@fief/fief/react";
import { useMutation } from "@tanstack/react-query";

import { Box, Stack, TextField, Typography } from "@mui/material";
import FriendChatMessages from "../queries/FriendChatMessages";

import { backendBaseUrl, send_message } from "../APIServices";
import { useEffect } from "react";

let ws = new WebSocket("ws://127.0.0.1:7000/ws_new_chat_message/");

export default function ChatPage() {
  const { userId } = useParams();
  const tokenResponse = useFiefTokenInfo();
  const userInfo = useFiefUserinfo();

  const [textFieldValue, setTextFieldValue] = useState("");
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const scrollBottom = useRef(null);

  function scrollToBottom(element) {
    element.scrollTo(0, 0);
  }

  const [refreshMessages, setRefreshMessages] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = useMutation((args) => {
    return send_message(
      backendBaseUrl,
      args.accessToken,
      args.friendId,
      args.messageText
    );
  });

  useEffect(() => {
    let socketId = Math.floor(Math.random() * 100000);
    ws = new WebSocket(`ws://127.0.0.1:7000/ws_new_chat_message/${socketId}/`);
    ws.addEventListener("open", () => {
      console.log("socket open");
      ws.send(userInfo.email);
    });
    ws.addEventListener("message", (event) => {
      setNewMessage(event.data);
      setRefreshMessages(true);
      console.log(newMessage);
    });

    scrollToBottom(scrollBottom.current);

    return () => {
      ws.close();
      console.log("socket close");
    };
  }, [userId]);

  return (
    <>
      <Stack
        justifyContent="space-between"
        sx={{ flexGrow: "1" }}
        marginX="50px"
        marginY="30px"
        gap="20px"
      >
        <Box>
          <Typography variant="h4">Chatting with user {userId}</Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "70vh",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column-reverse",
          }}
          ref={scrollBottom}
        >
          <Box sx={{ flexGrow: "1" }}>
            <FriendChatMessages
              accessToken={tokenResponse.access_token}
              friendId={parseInt(userId)}
              refresh={refreshMessages}
              setRefresh={setRefreshMessages}
            />
          </Box>
        </Box>

        <Box>
          <TextField
            label="Message"
            multiline
            maxRows={5}
            fullWidth
            value={textFieldValue}
            onChange={handleTextFieldChange}
            onKeyUp={(event) => {
              if (!event.shiftKey && event.key === "Enter") {
                sendMessage.mutate({
                  accessToken: tokenResponse.access_token,
                  friendId: userId,
                  messageText: textFieldValue,
                });
                ws.send(textFieldValue);
                setTextFieldValue("");
                setRefreshMessages(true);
              }
            }}
          />

          {sendMessage.isLoading ? (
            <Typography color="blueviolet">Sending message</Typography>
          ) : (
            <>
              {sendMessage.isError ? (
                <Typography color="red">
                  An error occured: {sendMessage.error.message}
                </Typography>
              ) : null}
              {sendMessage.isSuccess ? (
                <Typography color="green">Message sent!</Typography>
              ) : null}
            </>
          )}
        </Box>
      </Stack>
    </>
  );
}
