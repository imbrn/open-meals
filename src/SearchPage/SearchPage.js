import React from "react";
import Page from "../Page";
import SearchBox from "../SearchBox";
import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const SearchPage = () => (
  <Page>
    <SearchBoxWrapper>
      <SearchBox placeholder="Search meals by name" />
    </SearchBoxWrapper>
  </Page>
);

export default SearchPage;
