import React from "react";
import styled from "styled-components";

const ListViewRoot = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
  margin: 0;
  padding: 0;
`;

export const ListViewItem = styled.li`
  list-style: none;
`;

const ListView = ({ children }) => (
  <ListViewRoot>
    {React.Children.map(children, (item, i) => (
      <ListViewItem key={i}>{item}</ListViewItem>
    ))}
  </ListViewRoot>
);

export default ListView;
