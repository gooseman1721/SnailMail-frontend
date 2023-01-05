import { useState, useEffect } from "react";

import {
  useFiefAuth,
  useFiefIsAuthenticated,
  useFiefUserinfo,
  useFiefTokenInfo,
} from "@fief/fief/react";

import { Link as RouterLink } from "react-router-dom";
import { Outlet as RouterOutlet } from "react-router-dom";

import MuiAppBar from "@mui/material/AppBar";
import {
  Container,
  Box,
  Stack,
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  Icon,
  Divider,
  Autocomplete,
  Button,
} from "@mui/material";
import { ChevronLeft, Outlet, PeopleAltRounded } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";

import DrawerFriendElement from "../components/DrawerFriendElement";
import FrontPageChatRoomCard from "../components/FrontPageChatRoomCard";

import { backendBaseUrl, get_data_after_user_login } from "../APIServices";
import GetUserFriendsDrawer from "../queries/GetUserFriendsDrawer";

// An easy hack to have the messages drawer larger on small screens
// to be implemented correctly later
const drawerWidth = window.innerWidth < 1000 ? "35vw" : "15vw";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100vw - ${drawerWidth})`,
    marginLeft: `${drawerWidth}`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function FrontPage(props) {
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const tokenResponse = useFiefTokenInfo();
  const accessToken = tokenResponse.access_token;
  const userInfo = useFiefUserinfo();
  const [userData, setUserData] = useState(null);
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    get_data_after_user_login(backendBaseUrl, tokenResponse.access_token).then(
      (data) => setUserData(data)
    );
    let socketId = Math.floor(Math.random() * 100000);
    let ws = new WebSocket(
      `ws://127.0.0.1:7000/ws_new_chat_message/${socketId}/`
    );
    ws.addEventListener("open", () => {
      console.log("socket open");
      ws.send(
        JSON.stringify({ email: userInfo.email, access_token: accessToken })
      );
    });
    ws.addEventListener("message", () => {
      setNewMessage(true);
    });
    return () => {
      ws.close();
      console.log("socket close");
    };
  }, []);

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Container
        sx={{
          display: "block",
          marginLeft: `${drawerWidth}`,
          marginRight: "10px",
          maxWidth: `calc(100vw - ${drawerWidth})`,
        }}
        maxWidth="false"
      >
        <AppBarStyled position="fixed" open={openDrawer}>
          <Toolbar>
            <IconButton
              mr="5"
              color="inherit"
              onClick={handleDrawerOpen}
              sx={{ ...(openDrawer && { display: "none" }) }}
            >
              <PeopleAltRounded color="" />
            </IconButton>
            {/* <Typography>App bar {String(JSON.stringify(userData))}</Typography> */}
            <Typography>App bar</Typography>
          </Toolbar>
        </AppBarStyled>
        <Drawer
          variant="persistent"
          anchor="left"
          open={openDrawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerHeader>
            <Typography variant="h5" flexGrow="1">
              Messages
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </DrawerHeader>
          <Button
            sx={{ marginRight: "7.5vw" }}
            component={RouterLink}
            to={"friends/"}
          >
            Manage friends
          </Button>
          <Divider />
          <Stack>
            <GetUserFriendsDrawer accessToken={tokenResponse.access_token} />
          </Stack>
        </Drawer>
        <Main open={openDrawer} sx={{ alignSelf: "center" }}>
          <DrawerHeader />
          <RouterOutlet context={[newMessage, setNewMessage]} />
          {/* <Stack direction="row" flexWrap="wrap">
            <FrontPageChatRoomCard theme={props.theme} />
            <FrontPageChatRoomCard theme={props.theme} />
            <FrontPageChatRoomCard theme={props.theme} />
            <FrontPageChatRoomCard theme={props.theme} />
            <FrontPageChatRoomCard theme={props.theme} />
          </Stack> */}
        </Main>
      </Container>
    </ThemeProvider>
  );
}
