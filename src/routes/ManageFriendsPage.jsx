import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  Button,
  Stack,
  Divider
} from "@mui/material";

import { useNavigate } from "react-router-dom"
import { useFiefTokenInfo } from "@fief/fief/react";

import GetUserFriends from "../queries/GetUserFriends";
import GetProposedFriends from "../queries/GetProposedFriends";


export default function ManageFriendsPage(props) {
    const navigate = useNavigate();
    const tokenResponse = useFiefTokenInfo();
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Container>
        <Stack direction="row" spacing="2vw" justifyContent={"flex-end"} margin="1vw">
          <Typography variant="h2" flexGrow="1">
            Manage friends page
          </Typography>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </Stack>
        <Divider />
        <Stack direction="row" spacing="2vw" justifyContent="space-evenly" marginTop="1vw">
          <Stack>
            <Typography variant="h4" flexGrow="1">
              Your friends
            </Typography>
            <GetUserFriends accessToken={tokenResponse.access_token} />

          </Stack>
          <Stack>
            <Typography variant="h4" flexGrow="1">
              Add friends
            </Typography>
            <GetProposedFriends accessToken={tokenResponse.access_token} />
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
