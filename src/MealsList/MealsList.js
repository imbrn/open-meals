import React from "react";
import MealPreview from "../MealPreview";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(320px, 1fr);
  grid-gap: 32px;
`;

const Item = styled.div`
  & > * {
    width: 100%;
    height: 100%;
  }
`;

const MealsList = ({
  meals,
  mealComponent: MealComponent = MealPreview,
  ...rest
}) => {
  return (
    <List {...rest}>
      {meals.map(meal => (
        <Item key={meal.id}>
          <MealComponent meal={meal} />
        </Item>
      ))}
    </List>
  );
};

export default MealsList;
