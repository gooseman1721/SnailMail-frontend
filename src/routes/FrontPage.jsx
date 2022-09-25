import { useState, useEffect } from "react";

import MuiAppBar from '@mui/material/AppBar';
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

} from "@mui/material";
import {
    ChevronLeft,
    PeopleAltRounded
} from '@mui/icons-material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import styled from "@emotion/styled";

import DrawerFriendElement from "../components/DrawerFriendElement";

// An easy hack to have the messages drawer larger on small screens
// to be implemented correctly later
const drawerWidth = window.innerWidth < 1000 ? '35vw' : '15vw';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBarStyled = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100vw - ${drawerWidth})`,
        marginLeft: `${drawerWidth}`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function FrontPage(props) {
    const [openDrawer, setOpenDrawer] = useState(true);
    const handleDrawerOpen = () => setOpenDrawer(true);
    const handleDrawerClose = () => setOpenDrawer(false)

  return (
    <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <Container sx={{display: 'flex', marginLeft: '0px', marginRight: '0px'}}>
            <AppBarStyled position='fixed' open={openDrawer}>
                <Toolbar>
                    <IconButton 
                        mr='5'
                        color='inherit' 
                        onClick={handleDrawerOpen}
                        sx={{ ...(openDrawer && { display: 'none' }) }}
                    >
                        <PeopleAltRounded color=""/>
                    </IconButton>
                    <Typography>
                        App bar
                    </Typography>    
                </Toolbar>

            </AppBarStyled>
            <Drawer 
                variant="persistent"
                anchor="left"
                open={openDrawer}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },}}
            >
                <DrawerHeader>
                    <Typography variant='h5' flexGrow='1'>
                        Messages
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Stack>
                    <DrawerFriendElement theme={props.theme} />
                </Stack>

            </Drawer>
            <Main open={openDrawer} sx={{alignSelf: 'center'}}>
                <DrawerHeader />
                <Typography paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                      enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                      adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                      nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                      leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                      feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                      consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                      sapien faucibus et molestie ac.
                </Typography>
            </Main>
        </Container>
    </ThemeProvider>
  )
}
