import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginModal from "../components/LoginModal";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import RegisterModal from "../components/RegisterModal";

function IntroPage(props) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleOpenRegisterModal = () => setOpenRegisterModal(true);
  const handleCloseRegisterModal = () => {
    setOpenRegisterModal(false);
    setOpenLoginModal(false);
  };

  const [backendResponse, setBackendResponse] = useState(null);

  const baseURL = "http://127.0.0.1:8000";

  function fetch_func() {
    fetch("http://127.0.0.1:8000/ping/", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setBackendResponse(data.response_text));
    setTimeout(fetch_func, 1000);
  }

  useEffect(() => {
    fetch_func();
  }, []);

  return (
    <div className="IntroPage">
      <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <Container>
          <Box className="basicBox">
            <Stack justifyContent={"flex-end"} spacing={"5vw"} direction="row">
              <Typography variant="h1" sx={{ flexGrow: 1 }}>
                SnailMail
              </Typography>
              <Button
                variant="contained"
                sx={{ alignSelf: "center" }}
                onClick={handleOpenLoginModal}
              >
                Sign in
              </Button>
            </Stack>
          </Box>
          <Box sx={{ py: "3vw" }}>
            <Stack>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                Enter the world.. of SnailMail
              </Typography>
              <Typography sx={{ alignSelf: "center" }}>
                Snailmail is plepleplpe and Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin ante libero, aliquam nec
                risus sed, placerat sodales nisl. Mauris scelerisque venenatis
                commodo. Donec ut nunc ex. Donec non ultrices erat, vel
                porttitor metus. Aenean gravida, nisi in viverra convallis, nibh
                lorem rhoncus diam, quis luctus lectus sem nec eros. Nunc vitae
                tellus urna. Sed id eleifend sapien.
              </Typography>
              <Stack
                direction="row"
                spacing={"5vw"}
                sx={{ alignSelf: "center", py: "2vw" }}
              >
                <Button variant="contained" component={RouterLink} to="main/">
                  ENTER
                </Button>
                <Button variant="outlined">SOME OTHER OPTION</Button>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ py: "1vw" }}>
            <Typography variant="h2">A demo here?</Typography>
            <Typography variant="h5">
              Backend response: {backendResponse}
            </Typography>
          </Box>
          <LoginModal
            open={openLoginModal}
            close={handleCloseLoginModal}
            openRegisterModal={handleOpenRegisterModal}
          />
          <RegisterModal
            open={openRegisterModal}
            close={handleCloseRegisterModal}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default IntroPage;
