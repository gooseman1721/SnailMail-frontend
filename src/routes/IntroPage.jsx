import { useState, useEffect, useCallback } from "react";
import {
  useFiefAuth,
  useFiefIsAuthenticated,
  useFiefUserinfo,
  useFiefTokenInfo,
} from "@fief/fief/react";

import { useQuery } from "@tanstack/react-query";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginModal from "../components/LoginModal";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import RegisterModal from "../components/RegisterModal";
import { backendBaseUrl, get_fief_user, get_fief_user_react_fetch } from "../APIServices.jsx";
import LoadBasicUserData from "../queries/LoadBasicUserData";

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
  const isAuthenticated = useFiefIsAuthenticated();
  const userinfo = useFiefUserinfo();
  const tokenResponse = useFiefTokenInfo(); //This is the way to get user's token

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
    get_fief_user(backendBaseUrl, tokenResponse.access_token).then((data) => {
      console.log(data);
    });
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
                  Logout {userinfo.fields.username}
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
            <Stack marginTop="20vh">
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                Enter the world.. of SnailMail
              </Typography>
              <Typography sx={{ alignSelf: "center" }}>
                SnailMail is a chat application where you can chat with your friends 
              </Typography>
              <Stack
                direction="row"
                spacing={"5vw"}
                sx={{ alignSelf: "center", py: "2vw" }}
              >
                <Button variant="contained" component={RouterLink} to="main/">
                  ENTER
                </Button>
                {/* <Button variant="outlined">SOME OTHER OPTION</Button> */}
              </Stack>
            </Stack>
          </Box>
          {/* <Box sx={{ py: "1vw" }}>
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
            {isAuthenticated && (
              <LoadBasicUserData accessToken={tokenResponse.access_token} />
            )}
          </Box> */}
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
