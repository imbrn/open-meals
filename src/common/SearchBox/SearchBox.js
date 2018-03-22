import React from "react";
import PropTypes from "prop-types";
import TextField from "../TextField";
import SearchSvg from "../search.svg";
import styled from "styled-components";

const SearchInput = TextField.extend`
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

const Form = styled.form`
  position: relative;

  > ${SearchButton} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 32px;
  }
`;

export const SearchBox = ({ value, onChange, onSearch, style, ...rest }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  const handleInputChange = e => {
    onChange(e.target.value);
  };
  return (
    <Form role="searchbox" style={style} onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        value={value}
        aria-label="input"
        onChange={handleInputChange}
        {...rest}
      />
      <SearchButton aria-label="search">
        <SearchSvg height="100%" width="100%" />
      </SearchButton>
    </Form>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  style: PropTypes.object
};

SearchBox.defaultProps = {
  value: "",
  onChange: () => {},
  onSearch: () => {}
};

export default SearchBox;
