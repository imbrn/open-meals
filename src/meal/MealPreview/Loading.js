import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 80%;
  background: var(--color-black-alpha-3);
  border-radius: 8px;
`;

const TitlePlaceholder = styled.div`
  width: 90%;
  height: 20px;
  margin-top: 10px;
  background: var(--color-black-alpha-3);
  border-radius: 8px;
`;

const InfoPlaceholder = styled.div`
  width: 90%;
  height: 10px;
  margin-top: 10px;
  background: var(--color-black-alpha-3);
  border-radius: 8px;
`;

const Loading = () => (
  <Root>
    <ImagePlaceholder />
    <TitlePlaceholder />
    <InfoPlaceholder />
  </Root>
);

export default Loading;
