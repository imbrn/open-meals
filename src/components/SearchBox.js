import React from "react";
import TextField from "../elements/TextField";
import SearchSvg from "../svg/search.svg";
import styled from "styled-components";

const Input = TextField.extend`
  width: 100%;
  height: 64px;
  line-height: 64px;
  border-radius: 32px;
  padding: 0 32px;
  font-size: 1.6rem;
`;

const SearchButton = styled.button`
  border: none;
  background: none;
  width: 32px;
  height: 32px;
  padding: 0;
  cursor: pointer;
`;

const Outter = styled.form`
  position: relative;

  > ${SearchButton} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 32px;
  }
`;

const SearchBox = ({ style, onRequestSearch, ...rest }) => {
  const onSubmit = e => {
    e.preventDefault();
    if (onRequestSearch)
      onRequestSearch(e.target.search.value, e.target.search, e);
  };

  return (
    <Outter style={style} role="searchbox" onSubmit={onSubmit}>
      <Input name="search" aria-label="input" {...rest} />
      <SearchButton aria-label="search">
        <SearchSvg height="100%" width="100%" />
      </SearchButton>
    </Outter>
  );
};

export default SearchBox;
