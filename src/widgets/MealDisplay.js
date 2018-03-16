import React from "react";
import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const Root = styled.div``;

export const Image = styled.img``;

const IngredientItemRoot = styled.li``;
const IngredientItemName = styled.span``;
const IngredientItemMeasure = styled.span``;

export const IngredientItem = ({ name, measure }) => (
  <IngredientItemRoot>
    <IngredientItemMeasure>{measure}</IngredientItemMeasure>
    <IngredientItemName>{name}</IngredientItemName>
  </IngredientItemRoot>
);

const IngredientsRoot = styled.ul``;

export const Ingredients = ({ ingredients }) => (
  <IngredientsRoot>
    {ingredients.map((item, i) => <IngredientItem key={i} {...item} />)}
  </IngredientsRoot>
);

const InstructionItemRoot = styled.li``;

export const InstructionItem = ({ instruction }) => (
  <InstructionItemRoot>{instruction}</InstructionItemRoot>
);

const InstructionsRoot = styled.ul``;

export const Instructions = ({ instructions }) => (
  <InstructionsRoot>
    {instructions.map((item, i) => <InstructionItem key={i} {...item} />)}
  </InstructionsRoot>
);

export const MealDisplay = ({ meal }) => {
  return (
    <Root>
      <Image src={meal.thumb} alt={meal.name} />
      <Tabs>
        <TabList>
          <Tab>Ingredients</Tab>
          <Tab>Instructions</Tab>
        </TabList>
        <TabPanel>
          <Ingredients ingredients={meal.ingredients} />
        </TabPanel>
        <TabPanel>
          <Instructions instructions={meal.instructions} />
        </TabPanel>
      </Tabs>
    </Root>
  );
};

export default MealDisplay;
