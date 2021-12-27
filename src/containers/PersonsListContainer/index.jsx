import React, { useState, useEffect } from "react";
import styled from "styled-components";

/** Components **/
import SelectedPersonInfo from "../../components/SelectedPersonInfo";
import PersonsList from "../../components/PersonsList";

const Container = styled.div`
  display: flex;
`;

const PersonsListContainer = () => {
  const [selected, setSelected] = useState(null);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getPersons = async () => {
      const res = await fetch("https://swapi.dev/api/people");
      const data = await res.json();

      setPersons(data.results);
    };

    getPersons();
  }, []);

  if (!persons.length) return <div>Loading...</div>;

  return (
    <Container>
      <PersonsList
        persons={persons}
        selected={selected}
        setSelected={setSelected}
      />
      {selected && (
        <SelectedPersonInfo
          {...persons.find(({ name }) => name === selected)}
        />
      )}
    </Container>
  );
};

export default PersonsListContainer;
