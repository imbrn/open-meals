import React, { Component, Fragment } from "react";
import Page from "../Page";
import SearchBox from "../SearchBox";
import styled from "styled-components";
import { withApi } from "../api";
import MealsList from "../MealsList/MealsList";

// Empty state (base state)
const emptyState = {
  renderMeals() {
    return null;
  },
  handleSearchChange() {},
  handleSearch() {}
};

// Ready to search base state
const readyToSearchState = {
  handleSearchChange(value) {
    this.setState({
      searchTerm: value
    });
  },

  handleSearch() {
    const searchTerm = this.state.searchTerm;

    if (searchTerm && searchTerm.trim().length > 0) {
      this.setState({
        state: searchingMealsState,
        searchedTerm: searchTerm
      });
      this.props.searchMealsByName(searchTerm).then(results => {
        this.setState({
          state: showingMealsState,
          foundMeals: results
        });
      });
    } else {
      this.setState({
        state: showingLatestMealsState
      });
    }
  }
};

const LoadingMessageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 1.5rem;
  font-family: var(--font-cursive);
`;

// Fetching latest meals state
const fetchingLatestMealsState = Object.create(readyToSearchState);
Object.assign(fetchingLatestMealsState, {
  renderMeals() {
    return (
      <LoadingMessageContainer>
        Fetching latest meals...
      </LoadingMessageContainer>
    );
  }
});

const MealsListTitle = styled.h1`
  margin-bottom: 16px;
  font-family: var(--font-cursive);
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--color-white);
`;

// Showing latest meals state
const showingLatestMealsState = Object.create(readyToSearchState);
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

// Searching meals state
const searchingMealsState = Object.create(readyToSearchState);
Object.assign(searchingMealsState, {
  renderMeals() {
    return (
      <LoadingMessageContainer>Searching meals...</LoadingMessageContainer>
    );
  }
});

const showingMealsState = Object.create(readyToSearchState);
Object.assign(showingMealsState, {
  renderMeals() {
    return (
      <Fragment>
        <MealsListTitle>
          {`${this.state.foundMeals.length} results for "${
            this.state.searchedTerm
          }".`}
        </MealsListTitle>
        <MealsList meals={this.state.foundMeals} />
      </Fragment>
    );
  }
});

const SearchBoxWrapper = styled(SearchBox)`
  width: 100%;
  margin: 64px auto;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

// SearchPage component
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
        <SearchBoxWrapper
          value={this.state.searchTerm}
          onChange={this._handleSearchChange}
          onSearch={this._handleSearch}
          placeholder="Search meals by name"
        />
        {this._renderMeals()}
      </Page>
    );
  }

  _renderMeals() {
    return this.state.state.renderMeals.call(this);
  }

  _handleSearchChange(value) {
    return this.state.state.handleSearchChange.call(this, value);
  }

  _handleSearch() {
    return this.state.state.handleSearch.call(this);
  }
}

export default withApi(["fetchLatestMeals", "searchMealsByName"])(SearchPage);
