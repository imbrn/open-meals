import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MealPreview from "../MealPreview";
import MealDisplay from "../MealDisplay";
import { withApi } from "../../api";

export const Title = styled.h1``;
export const Info = styled.h2``;
export const CloseButton = styled.button``;

const RelatedMealsRoot = styled.ul``;

export const RelatedMeals = ({ meals }) => (
  <RelatedMealsRoot>
    {meals.map(meal => <MealPreview key={meal.id} meal={meal} />)}
  </RelatedMealsRoot>
);

const MealScreenRoot = styled.div``;

class MealScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedMeals: []
    };
  }

  componentDidMount() {
    const { meal, fetchRelatedMeals } = this.props;
    fetchRelatedMeals(meal).then(relatedMeals => {
      this.setState({
        relatedMeals
      });
    });
  }

  render() {
    const { meal, onRequestClose } = this.props;

    return (
      <MealScreenRoot>
        <Title>{meal.name}</Title>
        <Info>
          {meal.area} {meal.category}
        </Info>
        <CloseButton onClick={() => onRequestClose()} />
        <MealDisplay meal={meal} />
        <RelatedMeals meals={this.state.relatedMeals} />
      </MealScreenRoot>
    );
  }
}

MealScreen.propTypes = {
  meal: PropTypes.object.isRequired,
  fetchRelatedMeals: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

MealScreen.defaultProps = {
  fetchRelatedMeals: () => Promise.resolve([]),
  onRequestClose: () => {}
};

export default withApi(["fetchRelatedMeals"])(MealScreen);
