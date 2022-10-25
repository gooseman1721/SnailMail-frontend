import React from "react";

import { useParams } from "react-router-dom";
import { useFiefTokenInfo } from "@fief/fief/react";

import { Box, Stack, TextField, Typography } from "@mui/material";
import FriendChatMessages from "../queries/FriendChatMessages";

export default function ChatPage() {
  const { userId } = useParams();
  const tokenResponse = useFiefTokenInfo();

  return (
    <>
      <Stack
        justifyContent="space-between"
        sx={{ flexGrow: "1" }}
        marginX="50px"
        marginY="30px"
      >
        <Box>
          <Typography variant="h4">Chatting with user {userId}</Typography>
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          Display messages box
          <FriendChatMessages accessToken={tokenResponse.access_token} friendId={parseInt(userId)}/>
        </Box>
        <Box>
          <TextField label="Message" multiline maxRows={5} fullWidth />
        </Box>
      </Stack>
    </>
  );
}
