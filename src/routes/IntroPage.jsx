import { useState, useEffect, useCallback } from "react";
import {
  useFiefAuth,
  useFiefIsAuthenticated,
  useFiefUserinfo,
  useFiefTokenInfo,
} from "@fief/fief/react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginModal from "../components/LoginModal";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import RegisterModal from "../components/RegisterModal";
import { backendBaseUrl, get_fief_user } from "../BackendServices.jsx";

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

  const fiefAuth = useFiefAuth();
  const storage = fiefAuth.storage;
  const isAuthenticated = useFiefIsAuthenticated();
  const userinfo = useFiefUserinfo();
  const tokenResponse = useFiefTokenInfo(); //This is the way to get user's token

  const local_storage = localStorage;

  const login = useCallback(() => {
    fiefAuth.redirectToLogin(
      `${window.location.protocol}//${window.location.host}/callback`
    );
  }, [fiefAuth]);

  const logout = useCallback(() => {
    fiefAuth.logout(`${window.location.protocol}//${window.location.host}`);
  }, [fiefAuth]);

  // This just prints user's token
  function get_user_info() {
    console.log(
      JSON.stringify(get_fief_user(backendBaseUrl, tokenResponse.access_token))
    );
  }

  return (
    <div className="IntroPage">
      <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <Container>
          <Box className="basicBox">
            <Stack justifyContent={"flex-end"} spacing={"2vw"} direction="row">
              <Typography variant="h1" sx={{ flexGrow: 1 }}>
                SnailMail
              </Typography>
              {!isAuthenticated && (
                <Button
                  variant="contained"
                  sx={{ alignSelf: "center" }}
                  onClick={() => login()}
                >
                  Login
                </Button>
              )}
              {isAuthenticated && userinfo && (
                <Button
                  variant="contained"
                  sx={{ alignSelf: "center" }}
                  onClick={() => logout()}
                >
                  Logout mr {userinfo.email}
                </Button>
              )}
              {/* <Button
                variant="outlined"
                sx={{ alignSelf: "center" }}
                onClick={() => loginWithRedirect()}
              >
                Fief login
              </Button>
              <Button
                variant="outlined"
                sx={{ alignSelf: "center" }}
                onClick={() => logout()}
              >
                Fief logout
              </Button>
              <Button
                variant="contained"
                sx={{ alignSelf: "center" }}
                onClick={handleOpenLoginModal}
              >
                Sign in
              </Button> */}
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
            <Typography variant="h5">
              Userinfo: {JSON.stringify(userinfo)}
            </Typography>
            <Button variant="outlined" onClick={get_user_info}>
              Get user info
            </Button>
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
