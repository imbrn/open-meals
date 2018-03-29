import React from "react";
import PropTypes from "prop-types";
import TextField from "../TextField";
import SearchIcon from "./search.svg";
import styled from "styled-components";

const SearchInput = TextField.extend`
  width: 100%;
  height: 64px;
  border-radius: 64px;
  padding: 0 32px;
  font-size: 28px;
`;

const SearchButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  padding: 0;
  background: none;
  color: var(--color-black-alpha-1);
  border: none;
  cursor: pointer;
  @media (min-width: 512px) {
    display: block;
  }
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchBox = ({ value, onChange, onSearch, ...rest }) => {
  const handleInputChange = e => onChange(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <SearchForm role="searchbox" onSubmit={handleSubmit}>
      <SearchInput
        name="searchInput"
        value={value}
        arial-label="input"
        onChange={handleInputChange}
        {...rest}
      />
      <SearchButton arial-label="button">
        <SearchIcon height="100%" width="100%" />
      </SearchButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

SearchBox.defaultProps = {
  value: "",
  onChange: () => {},
  onSearch: () => {}
};

export default SearchBox;
