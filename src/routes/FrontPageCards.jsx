import React from 'react';

import { Stack } from "@mui/material";

import FrontPageChatRoomCard from '../components/FrontPageChatRoomCard';

export default function FrontPageCards() {
  return (
    <Stack direction="row" flexWrap="wrap">
      <FrontPageChatRoomCard  />
      <FrontPageChatRoomCard  />
      <FrontPageChatRoomCard  />
      <FrontPageChatRoomCard  />
      <FrontPageChatRoomCard  />
    </Stack>
  );
}
