import { Box, Typography, Stack, Avatar, Divider } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import GetFriendLastMessage from "../queries/GetFriendLastMessage";

export default function DrawerFriendElement(props) {
  const { userName, userId, accessToken, refresh, setRefresh } = props;
  return (
    // <ThemeProvider theme={props.theme}>
    //   <CssBaseline />
    <Box
      sx={{
        color: "inherit",
        textDecoration: "inherit",
        ":hover": { backgroundColor: "lightgray", cursor: "pointer" },
      }}
      component={RouterLink}
      to={`chat/user/${userId}`}
    >
      <Stack direction="row" gap="10px" m="10px">
        <Avatar />
        <Stack flexGrow="1">
          <Typography noWrap={true}>
            <b>{userName}</b>
          </Typography>
          <Typography noWrap={true}>
            <GetFriendLastMessage
              accessToken={accessToken}
              friendId={userId}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </Typography>
        </Stack>
      </Stack>
      <Divider />
    </Box>
    // </ThemeProvider>
  );
}
