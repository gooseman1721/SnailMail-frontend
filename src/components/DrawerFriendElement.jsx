import { Box, Typography, Stack, Avatar, Divider } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function DrawerFriendElement(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Box
        sx={{ ":hover": { backgroundColor: "lightgray", cursor: "pointer" } }}
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
