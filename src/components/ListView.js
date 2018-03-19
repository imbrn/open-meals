import React from "react";
import styled from "styled-components";

const ListViewRoot = styled.ul``;
export const ListViewItem = styled.li``;

const ListView = ({ children }) => (
  <ListViewRoot>
    {React.Children.map(children, (item, i) => (
      <ListViewItem key={i}>{item}</ListViewItem>
    ))}
  </ListViewRoot>
);

export default ListView;
