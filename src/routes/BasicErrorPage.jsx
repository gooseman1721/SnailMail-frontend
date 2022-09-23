import { useRouteError } from "react-router-dom";

import { CssBaseline, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

export default function BasicErrorPage(props) {
    const error = useRouteError();
    console.error(error);

  return (
    <ThemeProvider theme={props.theme}>
        <CssBaseline />
          <Container>
              <Box>
                <Stack gap='2em'>
                      <Typography mt='0.5em' variant='h3' sx={{ alignSelf: 'center' }}>
                          You've reached..
                      </Typography>
                      <Typography variant='h2' sx={{ alignSelf: 'center' }}>
                          <b>the ERROR PAGE</b>
                      </Typography>
                      <Typography mt='15%' sx={{ alignSelf: 'center' }}>
                          Sorry, an error has occured: <i>{error.statusText || error.message}</i>
                      </Typography>
                </Stack>

              </Box>
          </Container>
          
    </ThemeProvider>
  )
}
