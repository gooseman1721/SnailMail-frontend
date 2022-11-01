import { Card, Avatar, Stack, Typography } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function FrontPageChatRoomCard(props) {
  return (
    // <ThemeProvider theme={props.theme}>
      // <CssBaseline />
      <Card sx={{ width: 300, height: 300, margin: "20px" }}>
        <Stack sx={{ marginTop: "20px" }} gap="10px">
          <Avatar sx={{ alignSelf: "center" }} />
          <Typography sx={{ alignSelf: "center" }} variant="h5">
            Roomname
          </Typography>
        </Stack>
      </Card>
    // </ThemeProvider>
  );
}
