import React from "react";
import styled from "styled-components";

const Instructions = ({ instructions }) => {
  const instructionsItems = instructions.map((instruction, i) => (
    <Instruction key={i}>{instruction}</Instruction>
  ));

  return (
    <Root>
      <InstructionsList>{instructionsItems}</InstructionsList>
    </Root>
  );
};

const Root = styled.section``;

const InstructionsList = styled.ol`
  counter-reset: ingredients;
  padding: 0 24px 24px 24px;
`;

const Instruction = styled.li`
  margin-bottom: 24px;
  color: var(--color-white);
  &::before {
    counter-increment: ingredients;
    content: counter(ingredients) ".";
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 8px;
    color: var(--color-black-alpha-2);
  }
`;

export default Instructions;
