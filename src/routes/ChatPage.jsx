import { useState } from "react";

import { useParams } from "react-router-dom";
import { useFiefTokenInfo } from "@fief/fief/react";
import { useMutation } from "@tanstack/react-query";

import {
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FriendChatMessages from "../queries/FriendChatMessages";

import { backendBaseUrl, send_message } from "../APIServices";

export default function ChatPage() {
  const { userId } = useParams();
  const tokenResponse = useFiefTokenInfo();

  const [textFieldValue, setTextFieldValue] = useState("");
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const [refreshMessages, setRefreshMessages] = useState(false);

  const sendMessage = useMutation((args) => {
    return send_message(
      backendBaseUrl,
      args.accessToken,
      args.friendId,
      args.messageText
    );
  });

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
        <Box sx={{ flexGrow: "1" }}>
          <FriendChatMessages
            accessToken={tokenResponse.access_token}
            friendId={parseInt(userId)}
            refresh={refreshMessages}
            setRefresh={setRefreshMessages}
          />
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
