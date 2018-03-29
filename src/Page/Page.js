import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Navigation from "./Navigation";

const Root = styled.div`
  background: var(--color-background);
  padding: 32px;
  min-height: 100%;
`;

const Content = styled.div`
  margin: 72px 32px;
`;

const Page = ({ children, ...rest }) => (
  <Root {...rest}>
    <Container>
      <Navigation
        items={[
          { id: "search", label: "Search", path: "/search" },
          { id: "browse", label: "Browse", path: "/browse" }
        ]}
      />
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Page;
