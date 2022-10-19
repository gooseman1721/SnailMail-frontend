import { React, useState } from "react";
import {
  Stack,
  Typography,
  Box,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import SendFriendRequest from "../queries/SendFriendRequest";

export default function FriendElement(props) {
  const [addFriendClicked, setAddFriendClicked] = useState(false);
  const setAddFriendClickedTrue = () => setAddFriendClicked(true);

  return (
    <>
      <Box
        sx={{
          minWidth: "250px",
          ":hover": { backgroundColor: "lightgray", cursor: "pointer" },
          borderRadius: "1%",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" margin="10px" gap="15px">
            <Avatar />

            <Typography alignSelf="center">
              <b>{props.userName}</b>
            </Typography>
          </Stack>
          {props.addFriend && !addFriendClicked && (
            <Stack alignSelf="center">
              <IconButton alignSelf="center" onClick={setAddFriendClickedTrue}>
                <AddCircleOutlinedIcon />
              </IconButton>
            </Stack>
          )}
          {props.addFriend && addFriendClicked && (
            <Stack alignSelf="center">
              <IconButton alignSelf="center">
                <SendFriendRequest
                  accessToken={props.accessToken}
                  userId={props.userId}
                />
              </IconButton>
            </Stack>
          )}
        </Stack>

        <Divider />
      </Box>
    </>
  );
}
