import React from "react";
import { Autocomplete, TextField } from "@mui/material";

export default function FriendSearchBox() {
  const autocompleteOptions = ["Friend 1", "Friend 2"];
  const width = window.innerWidth < 1000 ? "35vw" : "15vw";
  return (
    <>
      <Autocomplete
        disablePortal
        options={autocompleteOptions}
        sx={{ width: width, marginLeft: "0px" }}
        renderInput={(params) => (
          <TextField {...params} label="   Users" variant="filled" />
        )}
      />
    </>
  );
}
