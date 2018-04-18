import React, { Component } from "react";
import Page from "../Page";
import styled from "styled-components";
import { withApi } from "../api";
import MealsList from "../MealsList";

class BrowseArea extends Component {
  state = {
    loading: false,
    meals: [],
    area: null
  };

  componentDidMount() {
    const area = this.props.match.params.area;
    const fetchMealsByArea = this.props.fetchMealsByArea;

    this.setState({
      area,
      loading: true
    });

    fetchMealsByArea(area).then(meals => {
      this.setState({
        meals,
        loading: false
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
            <Title>{this.state.area}</Title>
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

export default withApi(["fetchMealsByArea"])(BrowseArea);
