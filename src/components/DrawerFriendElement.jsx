import { Box, Typography, Stack, Avatar, Divider } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export default function DrawerFriendElement(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Box
        sx={{
          color:"inherit",
          textDecoration: "inherit",
          ":hover": { backgroundColor: "lightgray", cursor: "pointer" },
        }}
        component={RouterLink}
        to={`chat/user/${props.userId}`}
      >
        <Stack direction="row" gap="10px" m="10px">
          <Avatar />
          <Stack flexGrow="1">
            <Typography noWrap={true}>
              <b>{props.userName}</b>
            </Typography>
            <Typography noWrap={true}>last message...</Typography>
          </Stack>
        </Stack>
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
