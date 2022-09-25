import { 
  Box,
  Typography,
  Stack,
  Avatar,
  Divider 
} from "@mui/material";
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function DrawerFriendElement(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      <Box>
        <Stack direction='row' gap='10px' m='10px'>
          <Avatar />
          <Stack flexGrow='1'>
            <Typography><b>NAME</b></Typography>
            <Typography>msg tesdat</Typography>
          </Stack>
        </Stack>
        <Divider />
      </Box>
    </ThemeProvider>
  )
}
