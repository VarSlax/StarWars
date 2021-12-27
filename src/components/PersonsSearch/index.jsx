import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PersonsSearch = ({ persons, setFilteredPersons }) => {
  const onChange = (e) =>
    setFilteredPersons(
      persons.filter(({ name }) =>
        name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );

  return (
    <Box padding={2}>
      <TextField onChange={onChange} label="Search" />
    </Box>
  );
};

export default PersonsSearch;
