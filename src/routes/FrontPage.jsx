import { useState } from "react";

import MuiAppBar from '@mui/material/AppBar';
import { 
    Container,
    Box,
    AppBar,
    Toolbar,
    Drawer,
    Typography,
    IconButton,
    Icon,

} from "@mui/material";
import {
    ChevronRight
} from '@mui/icons-material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import styled from "@emotion/styled";


const drawerWidth = 57;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
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
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
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
    const handleDrawerClose = () => {setOpenDrawer(false); setTimeout(handleDrawerOpen, 5000);}

  return (
    <ThemeProvider theme={props.theme}>
        <CssBaseline />
        <Container sx={{display: 'flex'}}>
            <AppBarStyled position='fixed' open={openDrawer}>
                <Typography>
                    App bar
                </Typography>
            </AppBarStyled>
            <Drawer 
                variant="persistent"
                anchor="left"
                open={openDrawer}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRight />
                    </IconButton>
                </DrawerHeader>

            </Drawer>
            <Main open={openDrawer}>
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
