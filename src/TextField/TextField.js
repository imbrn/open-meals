import styled from "styled-components";

const TextField = styled.input`
  background: none;
  color: var(--color-black);
  border: 2px solid var(--color-black-alpha-1);
  ::placeholder {
    color: var(--color-black-alpha-2);
  }
`;

export default TextField;
