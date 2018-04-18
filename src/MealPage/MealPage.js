import React, { Component } from "react";
import Page from "../Page";
import styled from "styled-components";
import { withApi } from "../api";
import imageLoader from "../imageLoader";
import Tabs from "./Tabs";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import MealsList from "../MealsList";

class MealPage extends Component {
  state = {
    loading: true,
    meal: null,
    loadingRelatedMeals: true,
    relatedMeals: null
  };

  componentDidMount() {
    const {
      match: {
        params: { mealId }
      },
      fetchMealById
    } = this.props;

    // Start with loading progress
    this.setState({
      loading: true
    });

    // Fetch meal by id
    fetchMealById(mealId).then(meal => {
      this.setState(
        () => ({
          meal
        }),
        () => this._loadMealContent()
      );
    });
  }

  _loadMealContent() {
    const { meal } = this.state;
    imageLoader(meal.thumb).then(() => {
      this.setState({
        loading: false
      });

      // Load related meals
      this._loadRelatedMeals();
    });
  }

  _loadRelatedMeals() {
    const { fetchMealsByCategory } = this.props;
    const { meal } = this.state;

    fetchMealsByCategory({
      category: meal.category,
      amount: 4,
      reject: meal.id
    }).then(relatedMeals => {
      this.setState({
        loadingRelatedMeals: false,
        relatedMeals
      });
    });
  }

  render() {
    return (
      <Page>
        {this.state.loading ? this._renderLoading() : this._renderMeal()}
      </Page>
    );
  }

  _renderLoading() {
    return "Loading...";
  }

  _renderMeal() {
    const { meal } = this.state;
    return (
      <Root>
        <MealContainer>
          <Title>{meal.name}</Title>
          <Type>
            {meal.area} {meal.category}
          </Type>
          <MealBox meal={this.state.meal} />
        </MealContainer>
        <RelatedMeals
          loading={this.state.loadingRelatedMeals}
          meals={this.state.relatedMeals}
        />
      </Root>
    );
  }
}

const Root = styled.div``;

const MealContainer = styled.section`
  margin-top: 48px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: var(--font-cursive);
  color: var(--color-white);
`;

const Type = styled.h2`
  margin-top: 8px;
  font-size: 1.5rem;
  font-family: var(--font-sans-serif);
  color: var(--color-black-alpha-2);
`;

const MealBox = ({ meal }) => {
  const IngredientsPanel = () => <Ingredients ingredients={meal.ingredients} />;
  const InstructionsPanel = () => (
    <Instructions instructions={meal.instructions} />
  );

  return (
    <MealRoot>
      <MealDetails>
        <Tabs
          model={[
            {
              id: "ingredients",
              title: "Ingredients",
              panel: IngredientsPanel
            },
            {
              id: "instructions",
              title: "Instructions",
              panel: InstructionsPanel
            }
          ]}
        />
      </MealDetails>
      <MealThumbWrapper>
        <MealThumb src={meal.thumb} />
      </MealThumbWrapper>
    </MealRoot>
  );
};

const MealRoot = styled.section`
  padding: 24px;
  display: flex;
  margin-top: 24px;
  background: var(--color-black-alpha-2);
`;

const MealThumbWrapper = styled.div`
  padding: 24px;
  flex-basis: 0;
  flex-grow: 1;
`;

const MealThumb = styled.img`
  width: 100%;
  box-shadow: var(--box-shadow-medium);
`;

const MealDetails = styled.section`
  flex-basis: 0;
  flex-grow: 1;
`;

const RelatedMeals = ({ loading, meals }) => {
  return (
    <RelatedMealsRoot>
      <RelatedMealsTitle>Related meals</RelatedMealsTitle>
      {loading ? (
        <RelatedMealsLoading>Loading...</RelatedMealsLoading>
      ) : (
        <MealsList meals={meals} />
      )}
    </RelatedMealsRoot>
  );
};

const RelatedMealsRoot = styled.section`
  margin-top: 64px;
`;

const RelatedMealsTitle = styled.h1`
  margin-bottom: 16px;
  color: var(--color-white);
  font-family: var(--font-cursive);
  font-size: 2rem;
`;

const RelatedMealsLoading = styled.div`
  color: var(--color-white);
  font-size: 1.15rem;
`;

export default withApi(["fetchMealById", "fetchMealsByCategory"])(MealPage);
