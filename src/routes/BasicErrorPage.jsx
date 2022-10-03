import { useRouteError } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function BasicErrorPage(props) {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Container>
        <Box>
          <Stack gap="2em">
            <Typography mt="30%" variant="h3" sx={{ alignSelf: "center" }}>
              <b>Sorry, an error has occured: </b>
            </Typography>
            <Typography variant="h5" sx={{ alignSelf: "center" }}>
              <i>{error.statusText || error.message}</i>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
