import React from "react";
import styled from "styled-components";

const Ingredients = ({ ingredients }) => {
  return (
    <Root>
      <InnerContent>
        {ingredients.map((it, index) => (
          <Ingredient key={index} ingredient={it} />
        ))}
      </InnerContent>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  padding-left: 24px;
  justify-content: center;
`;

const InnerContent = styled.div`
  display: inline-block;
  min-width: 300px;
  color: var(--color-white);
`;

const Ingredient = ({ ingredient }) => {
  return (
    <IngredientRoot>
      <IngredientMeasure>{ingredient.measure}</IngredientMeasure>
      <IngredientName>{ingredient.name}</IngredientName>
    </IngredientRoot>
  );
};

const IngredientRoot = styled.div`
  padding: 8px;
  border-bottom: 1px dotted var(--color-white-alpha-2);
  display: flex;
`;

const IngredientMeasure = styled.div`
  text-align: right;
  flex-basis: 0;
  flex-grow: 1;
  margin-right: 24px;
  font-weight: 700;
`;

const IngredientName = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

export default Ingredients;
