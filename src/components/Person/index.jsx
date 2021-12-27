import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Person = ({ name, ...props }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton {...props}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default Person;
