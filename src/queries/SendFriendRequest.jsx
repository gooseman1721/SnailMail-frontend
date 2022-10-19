import React from "react";
import { useQuery } from "@tanstack/react-query";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

import { CircularProgress } from "@mui/material";

import { backendBaseUrl, send_friend_request } from "../APIServices";

export default function SendFriendRequest(props) {
  const { isLoading, isError, data, error } = useQuery(
    [`send_friend_request_to_${props.userId}`],
    () =>
      send_friend_request(
        backendBaseUrl,
        props.accessToken,
        parseInt(props.userId)
      )
  );
  if (isLoading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  if (isError) {
    console.log(error.message);
    return (
      <>
        <ErrorOutlinedIcon />
      </>
    );
  }

  console.log(data);

  return (
    <>
      <CheckOutlinedIcon />
    </>
  );
}
