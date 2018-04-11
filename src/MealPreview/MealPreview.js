import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import imageLoader from "../imageLoader";

class MealPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "ready"
    };
  }

  componentDidMount() {
    this.setState({
      state: "loading"
    });

    const { meal } = this.props;
    imageLoader(meal.thumb)
      .then(() => {
        this.setState({
          state: "loaded"
        });
      })
      .catch(() => {
        this.setState({
          state: "loaded"
        });
      });
  }

  render() {
    return (
      <CardContainer className={this.state.state}>
        <Card>
          <Cover>Open Meals</Cover>
          <Content>
            <Meal meal={this.props.meal} />
          </Content>
        </Card>
      </CardContainer>
    );
  }
}

const Card = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const Cover = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-black-alpha-3);
  color: var(--color-black-alpha-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-cursive);
  font-size: 1.5rem;
`;

const Content = styled.div`
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const CardContainer = styled.div`
  perspective: 1200px;

  &.loaded {
    display: block;
    & > ${Card} {
      transform: rotateY(180deg);
    }
  }
`;

const MealRoot = styled.div`
  height: 100%;
  background: var(--color-black-alpha-2);
  display: flex;
  flex-direction: column;
`;

const MealThumb = styled.img`
  width: 100%;
`;

const MealInfo = styled.div`
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MealName = styled.h1`
  text-align: center;
  color: var(--color-white);
  font-size: 1.15rem;
  font-weight: 600;
`;

const MealType = styled.h1`
  text-align: center;
  flex-grow: 1;
  margin-top: 8px;
`;

const MoreButton = Button.withComponent(Link).extend`
  height: 32px;
  line-height: 32px;
  text-decoration: none;
  border-radius: 32px;
  padding: 0 16px;
  margin-top: 16px;
`;

const Meal = ({ meal }) => (
  <MealRoot>
    <MealThumb src={meal.thumb} />
    <MealInfo>
      <MealName>{meal.name}</MealName>
      <MealType>
        {meal.area} {meal.category}
      </MealType>
      <MoreButton to={`/meal/${meal.id}`}>More</MoreButton>
    </MealInfo>
  </MealRoot>
);

export default MealPreview;
