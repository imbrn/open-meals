import React from "react";
import MealPreview from "../MealPreview";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  grid-gap: 32px;
`;

const MealsList = ({ meals, ...rest }) => {
  return (
    <List {...rest}>
      {meals.map(meal => <MealPreview key={meal.id} meal={meal} />)}
    </List>
  );
};

export default MealsList;
