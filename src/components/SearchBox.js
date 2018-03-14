import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "../elements/TextField";
import SearchSvg from "../svg/search.svg";
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

class SearchBox extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired
  };

  static defaultProps = {
    onSearch: () => {},
    size: "small"
  };

  state = {
    searchValue: ""
  };

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  render() {
    const { size, ...rest } = this.props;

    return (
      <Form role="searchbox" onSubmit={this._handleSubmit}>
        <SearchInput
          name="search"
          value={this.state.searchValue}
          aria-label="input"
          onChange={this._handleInputChange}
          {...rest}
        />
        {size !== "small" ? (
          <SearchButton aria-label="search">
            <SearchSvg height="100%" width="100%" />
          </SearchButton>
        ) : null}
      </Form>
    );
  }

  _handleInputChange(e) {
    this.setSearchValue(e.target.searchValue);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
  }

  setSearchValue(value) {
    this.setState({
      searchValue: value
    });
  }
}

export default SearchBox;
