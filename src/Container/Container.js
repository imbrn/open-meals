import React from "react";
import styled from "styled-components";

const Root = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Container = ({ children, ...rest }) => <Root {...rest}>{children}</Root>;

export default Container;
