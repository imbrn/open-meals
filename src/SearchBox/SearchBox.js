import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "../TextField";
import SearchIcon from "./search.svg";
import styled from "styled-components";

const SearchForm = styled.form`
  position: relative;
`;

const SearchInput = TextField.extend`
  width: 100%;
  height: 64px;
  padding: 0 32px;
  border-radius: 64px;
  outline: none;
  font-size: 1.5rem;
  transition: background 0.5s, color 0.5s, border-color 0.5s;
  &.focus {
    background: var(--color-white);
    color: var(--color-black);
    border-color: var(--color-white);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 32px;
  top: 16px;
  width: 32px;
  height: 32px;
  padding: 0;
  background: none;
  color: var(--color-black-alpha-1);
  border: none;
  cursor: pointer;
`;

class NewSearchBox extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: "",
    onChange: () => {},
    onSearch: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  render() {
    const { value, className, placeholder } = this.props;
    return (
      <SearchForm
        className={className}
        role="searchbox"
        onSubmit={this._handleSubmit}
        onFocus={this._handleFocus}
        onBlur={this._handleBlur}
      >
        <SearchInput
          className={this.state.focused ? "focus" : ""}
          name="searchInput"
          value={value}
          placeholder={placeholder}
          arial-label="input"
          onChange={this._handleInputChange}
        />
        <SearchButton arial-label="button">
          <SearchIcon height="100%" width="100%" />
        </SearchButton>
      </SearchForm>
    );
  }

  _handleFocus() {
    this.setState({
      focused: true
    });
  }

  _handleBlur(e) {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({
          focused: false
        });
      }
    }, 0);
  }

  _handleInputChange(e) {
    this.props.onChange(e.target.value);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.props.value);
  }
}

export default NewSearchBox;
