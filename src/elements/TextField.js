import styled from "styled-components";

const TextField = styled.input`
  background: none;
  color: inherit;
  border: 2px solid var(--color-black-alpha-1);
  padding: 4px;

  ::placeholder {
    color: var(--color-black-alpha-2);
  }
`;

export default TextField;
