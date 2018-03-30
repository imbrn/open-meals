import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Button";
import imageLoader from "../imageLoader";

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-black-alpha-2);
`;

const Thumb = styled.img`
  width: 100%;
`;

const PreviewContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-white);
  text-align: center;
`;

const Type = styled.h2`
  flex-grow: 1;
  text-align: center;
  margin-top: 8px;
`;

const MoreButton = Button.extend`
  height: 40px;
  width: 72px;
  border-radius: 40px;
  margin-top: 16px;
`;

class MealPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: emptyState
    };
  }

  componentDidMount() {
    this._loadDataAsync();
  }

  _loadDataAsync() {
    const { meal } = this.props;
    imageLoader(meal.thumb)
      .then(() => {
        this._onLoad();
      })
      .catch(() => {
        this._onLoadFailed();
      });
  }

  _onLoad() {
    this.setState({
      state: loadedState
    });
  }

  _onLoadFailed() {
    this.setState({
      state: loadedState
    });
  }

  render() {
    return this.state.state.render.call(this);
  }
}

const emptyState = {
  render() {
    return null;
  }
};

const loadedState = Object.create(emptyState);
Object.assign(loadedState, {
  render() {
    const { meal } = this.props;
    return (
      <Preview>
        <Thumb src={meal.thumb} />
        <PreviewContent>
          <Title>{meal.name}</Title>
          <Type>
            {meal.area} {meal.category}
          </Type>
          <MoreButton>More</MoreButton>
        </PreviewContent>
      </Preview>
    );
  }
});

export default MealPreview;
