import React, { Component } from "react";
import Page from "../Page";
import MealsList from "../MealsList";
import { withApi } from "../api";
import styled from "styled-components";

class BrowseCategory extends Component {
  state = {
    meals: null
  };

  componentDidMount() {
    const { fetchMealsByCategory, match } = this.props;
    const category = match.params["category"];

    fetchMealsByCategory(category).then(meals => {
      this.setState({
        meals
      });
    });
  }

  render() {
    return (
      <Page>
        {this.state.meals ? (
          <Root>
            <Title>{this.props.match.params.category}</Title>
            <MealsList meals={this.state.meals} />
          </Root>
        ) : (
          <span>Loading meals</span>
        )}
      </Page>
    );
  }
}

const Root = styled.section`
  margin-top: 32px;
  @media (min-width: 960px) {
    margin-top: 64px;
  }
`;

const Title = styled.h1`
  margin-bottom: 32px;
  color: var(--color-white);
  font-size: 2.5rem;
  font-family: var(--font-cursive);
`;

export default withApi(["fetchMealsByCategory"])(BrowseCategory);
