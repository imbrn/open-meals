import React, { Component, Fragment } from "react";
import Page from "../Page";
import SearchBox from "../SearchBox";
import styled from "styled-components";
import { withApi } from "../api";
import MealsList from "../MealsList/MealsList";

const SearchBoxWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const ResultsWrapper = styled.div`
  margin-top: 64px;
`;

const MealsListTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-white);
  margin-bottom: 16px;
`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      state: emptyState
    };
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      state: fetchingLatestMealsState,
      latestMeals: []
    });

    const { fetchLatestMeals } = this.props;
    fetchLatestMeals().then(latestMeals => {
      this.setState({
        latestMeals,
        state: showingLatestMealsState
      });
    });
  }

  render() {
    return (
      <Page>
        <SearchBoxWrapper>
          <SearchBox
            value={this.state.searchTerm}
            onChange={this._handleSearchChange}
            onSearch={this._handleSearch}
            placeholder="Search meals by name"
          />
        </SearchBoxWrapper>
        <ResultsWrapper>{this._renderMeals()}</ResultsWrapper>
      </Page>
    );
  }

  _renderMeals() {
    return this.state.state.renderMeals.apply(this);
  }

  _handleSearchChange(value) {
    return this.state.state.handleSearchChange.call(this, value);
  }

  _handleSearch() {
    return this.state.state.handleSearch(this);
  }
}

const emptyState = {
  renderMeals() {
    return null;
  },
  handleSearchChange() {},
  handleSearch() {}
};

const fetchingLatestMealsState = Object.create(emptyState);
Object.assign(fetchingLatestMealsState, {
  renderMeals() {
    return "Fetching latest meals...";
  }
});

const showingLatestMealsState = Object.create(emptyState);
Object.assign(showingLatestMealsState, {
  renderMeals() {
    return (
      <Fragment>
        <MealsListTitle>Latest meals</MealsListTitle>
        <MealsList meals={this.state.latestMeals} />
      </Fragment>
    );
  }
});

export default withApi(["fetchLatestMeals"])(SearchPage);
