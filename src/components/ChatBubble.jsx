import React from "react";

import { Box, Typography, Stack } from "@mui/material";

export default function ChatBubble(props) {
  if (props.fromFriend) {
    return (
      <Box
        bgcolor={"#e2e4f3"}
        sx={{
          maxWidth: "45%",
          marginRight: "auto",
          borderRadius: "5px",
          marginY: "10px",
        }}
      >
        <Stack>
          <Typography>
            Friend: <b>{props.messageContent} </b>
          </Typography>
          <Typography>sent at: {props.messageCreatedDatetime}</Typography>
        </Stack>
      </Box>
    );
  }

  return (
    <Box
      bgcolor={"#67add0"}
      sx={{
        maxWidth: "45%",
        marginLeft: "auto",
        borderRadius: "5px",
        marginY: "10px",
      }}
    >
      <Stack>
        <Typography>
          Me: <b>{props.messageContent} </b>
        </Typography>
        <Typography>sent at: {props.messageCreatedDatetime}</Typography>
      </Stack>
    </Box>
  );
}
