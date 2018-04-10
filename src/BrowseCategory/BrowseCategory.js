import React, { Component } from "react";
import Page from "../Page";
import MealsList from "../MealsList";
import { withApi } from "../api";
import styled from "styled-components";

class BrowseCategory extends Component {
  state = {
    loading: true,
    meals: [],
    category: null
  };

  componentDidMount() {
    const {
      match: { params: { category } },
      fetchMealsByCategory
    } = this.props;

    this.setState({
      category,
      loading: true
    });

    fetchMealsByCategory(category).then(meals => {
      this.setState({
        loading: false,
        meals
      });
    });
  }

  render() {
    return (
      <Page>
        {this.state.loading ? (
          <LoadingContainer>Loading meals...</LoadingContainer>
        ) : (
          <Root>
            <Title>{this.state.category}</Title>
            <MealsList meals={this.state.meals} />
          </Root>
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

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-family: var(--font-cursive);
  color: var(--color-white);
`;

export default withApi(["fetchMealsByCategory"])(BrowseCategory);
