import React, { Component, Fragment } from "react";
import styled from "styled-components";
import NavigationMenu from "../../common/NavigationMenu";
import SearchBox from "../../common/SearchBox";
import MealsList from "../../meal/MealsList";
import { withApi } from "../../api";

class SearchPage extends Component {
  state = {
    search: "",
    foundMeals: [],
    latestMeals: [],
    render: renderNothing
  };

  constructor(props) {
    super(props);
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      render: renderFetchingLatestMeals
    });
    this.props.fetchLatestMeals().then(latestMeals => {
      this.setState({
        latestMeals,
        render: renderLatestMeals
      });
    });
  }

  render() {
    return (
      <Fragment>
        <NavigationMenu />
        <SearchBox
          value={this.state.search}
          placeholder="Search meals by name"
          onChange={this._handleSearchChange}
          onSearch={this._handleSearch}
        />
        {this.state.render(this)}
      </Fragment>
    );
  }

  _handleSearchChange(value) {
    this.setState({
      search: value
    });
  }

  _handleSearch() {
    if (this.state.search && this.state.search.trim().length > 0) {
      this._doSearch(this.state.search);
    } else {
      this.setState({
        render: renderLatestMeals
      });
    }
  }

  _doSearch(search) {
    this.setState({
      render: renderSearchingMeals
    });
    this.props.searchMealsByName(search).then(results => {
      if (results && results.length > 0) {
        this.setState({
          foundMeals: results,
          render: renderSearchResults
        });
      } else {
        this.setState({
          render: renderNoResults
        });
      }
    });
  }
}

function renderNothing() {
  return null;
}

function renderFetchingLatestMeals() {
  return "Fetching latest meals";
}

function renderLatestMeals(context) {
  return (
    <Fragment>
      <ResultsTitle>Latest meals</ResultsTitle>
      <MealsList meals={context.state.latestMeals} />
    </Fragment>
  );
}

function renderSearchingMeals() {
  return "Searching meals";
}

function renderSearchResults(context) {
  return (
    <Fragment>
      <ResultsTitle>Results</ResultsTitle>
      <MealsList meals={context.state.foundMeals} />
    </Fragment>
  );
}

function renderNoResults() {
  return "No results were found";
}

const ResultsTitle = styled.h1``;

export default withApi(["searchMealsByName", "fetchLatestMeals"])(SearchPage);
