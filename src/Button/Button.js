import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: 2px solid var(--color-white);
  color: var(--color-white);
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: var(--color-white);
    color: var(--color-black);
  }
  &:active {
    transform: scale(1.05);
  }
`;

export default Button;
