import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 32px;
  background: var(--color-background);
`;

const Content = Container.extend`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Page = ({ children, ...rest }) => (
  <Root {...rest}>
    <Content>
      <Navigation
        items={[
          { id: "search", label: "Search", path: "/search" },
          { id: "browse", label: "Browse", path: "/browse" }
        ]}
      />
      {children}
      <Footer />
    </Content>
  </Root>
);

export default Page;
