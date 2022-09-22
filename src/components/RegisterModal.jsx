import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400',
  bgcolor: 'background.paper',
  border: '2px solid rgba(88, 121, 126, 0.205)',
  boxShadow: 24,
  p: 4,
  borderRadius: '2%',
};

export default function RegisterModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        BackdropProps={{ style: { backgroundColor: "transparent"}}}
      >
        <Box sx={style}>
          <Stack gap='1em'>
            <Typography variant="h6" mb='0.5em'>
              Create an account
            </Typography>
            <TextField variant="outlined" label='Username'></TextField>
            <TextField variant="outlined" label='Password' type='password' autoComplete="current-password"></TextField>
            <TextField variant="outlined" label="Repeat password" type='password' autoComplete='current-password'></TextField>
            <Stack mt='1em' direction='row' justifyContent='flex-center' gap='1em'>
              <Button variant="contained">Register</Button>
              <Button variant="outlined">Guest Account</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}
