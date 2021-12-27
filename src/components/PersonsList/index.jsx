import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";

import Person from "../Person";
import PersonsSearch from "../PersonsSearch";

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 20%;
`;

const PersonsList = ({ persons, selected, setSelected }) => {
  const [filteredPersons, setFilteredPersons] = useState(persons);

  return (
    <Container elevation={7}>
      <PersonsSearch
        persons={persons}
        setFilteredPersons={setFilteredPersons}
      />
      <List>
        {filteredPersons.map(({ name }) => (
          <Person
            key={name}
            name={name}
            selected={name === selected}
            onClick={() => setSelected(name)}
          />
        ))}
      </List>
    </Container>
  );
};

export default PersonsList;
