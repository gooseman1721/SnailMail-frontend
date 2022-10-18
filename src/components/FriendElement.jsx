import React from "react";
import {
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
  Box,
  Divider,
  Avatar,
} from "@mui/material";

export default function FriendElement(props) {
  return (
    <>
      {/* <ThemeProvider theme={props.theme}>
        <CssBaseline /> */}
      <Box
        sx={{
          backgroundColor: "lightgray",
          minWidth: "250px",
          ":hover": { backgroundColor: "gray" },
        }}
      >
        <Stack direction="row" margin="10px" gap="15px">
          <Avatar />

          <Typography alignSelf="center">
            <b>{props.userName}</b>
          </Typography>
        </Stack>
        <Divider />
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
}
