import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Container = styled.div`
  width: fit-content;
  margin-left: 1rem;
`;

const SelectedPersonInfo = ({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
}) => {
  return (
    <Container>
      <Box sx={{ minWidth: 300 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography>Name: {name}</Typography>
            <Typography variant="body2">Birthday: {birth_year}</Typography>
            <Typography variant="body2">Yey color: {eye_color}</Typography>
            <Typography variant="body2">Gender: {gender}</Typography>
            <Typography variant="body2">Hair Color: {hair_color}</Typography>
            <Typography variant="body2">Height: {height}</Typography>
            <Typography variant="body2">Mass: {mass}</Typography>
            <Typography variant="body2">Skin Color: {skin_color}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default SelectedPersonInfo;
