import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import LoginModal from './components/LoginModal';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blueGrey, grey, lightBlue, purple } from '@mui/material/colors';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500]
    },
    secondary: {
      main: purple[200]
    },
    background: {
      default: "#fafafa"
    }
  },
})

function App() {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container >
          <Box className="basicBox">

            <Stack justifyContent={'flex-end'} spacing={"5vw"} direction='row'>
              <Typography variant='h1' sx={{ flexGrow: 1 }}>
                SnailMail
              </Typography>
              <Button variant='contained' sx={{ alignSelf: 'center' }} onClick={handleOpenLoginModal}>Sign in</Button>
            </Stack>
           
          </Box>
          <Box sx={{py: "3vw"}}>
            <Stack>
              <Typography variant='h6' sx={{ alignSelf: 'center' }}>
                Enter the world.. of SnailMail
              </Typography>
              <Typography sx={{ alignSelf: 'center' }}>
                Snailmail is plepleplpe and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante libero, aliquam nec risus sed, placerat sodales nisl. Mauris scelerisque venenatis commodo. Donec ut nunc ex. Donec non ultrices erat, vel porttitor metus. Aenean gravida, nisi in viverra convallis, nibh lorem rhoncus diam, quis luctus lectus sem nec eros. Nunc vitae tellus urna. Sed id eleifend sapien.
              </Typography>
              <Stack direction='row' spacing={"5vw"} sx={{ alignSelf: 'center', py: '2vw' }}>
                <Button variant='contained' >ENTER</Button>
                <Button variant='outlined' >SOME OTHER OPTION</Button>
              </Stack>
            </Stack>


          </Box>
          <Box sx={{py: "1vw"}}>
            <Typography variant='h2'>
              A demo here?
            </Typography>
          </Box>
          <LoginModal open={openLoginModal} close={handleCloseLoginModal} />
        </Container>
      </ThemeProvider>
      



    </div>
  )
}

export default App
