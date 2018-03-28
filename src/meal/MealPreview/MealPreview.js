import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withImageLoader } from "../../common/imageLoader";
import LoadingPreview from "./Loading";
import Button from "../../common/Button";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-black-alpha-3);
  box-shadow: var(--box-shadow-1);
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const Title = styled.h1`
  font-family: var(--font-cursive);
  color: var(--color-white);
  font-size: 1.15rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Info = styled.h2`
  color: var(--color-black-alpha-1);
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  flex-grow: 1;
`;

export const MoreButton = Button.extend``;

class MealPreview extends Component {
  static propTypes = {
    meal: PropTypes.object.isRequired,
    style: PropTypes.object,
    innerRef: PropTypes.func,
    onRequestMoreInfo: PropTypes.func.isRequired
  };

  static defaultProps = {
    onRequestMoreInfo: () => {}
  };

  constructor(props) {
    super(props);
    this._renderLoading = this._renderLoading.bind(this);
    this._renderReady = this._renderReady.bind(this);
    this._onReady = this._onReady.bind(this);
    this.state = {
      render: this._renderLoading
    };
  }

  componentDidMount() {
    this._asyncLoad();
  }

  _asyncLoad() {
    const { meal, imageLoader } = this.props;
    imageLoader(meal.thumb)
      .then(() => {
        this._onReady();
      })
      .catch(error => {
        this._onLoadError(error);
      });
  }

  _onReady() {
    this.setState({
      render: this._renderReady
    });
  }

  _onLoadError() {
    this.setState({
      render: this._renderReady
    });
  }

  render() {
    return this.state.render(this);
  }

  _renderLoading() {
    return <LoadingPreview />;
  }

  _renderReady() {
    const { style, innerRef, meal, onRequestMoreInfo, ...rest } = this.props;
    return (
      <Root style={style} innerRef={innerRef} {...rest}>
        <Thumb src={meal.thumb} />
        <Content>
          <Title>{meal.name}</Title>
          <Info>
            {meal.area} {meal.category}
          </Info>
          <MoreButton onClick={this._makeMoreClickHandler(onRequestMoreInfo)}>
            More
          </MoreButton>
        </Content>
      </Root>
    );
  }

  _makeMoreClickHandler(onRequestMoreInfo) {
    return () => {
      onRequestMoreInfo();
    };
  }
}

export default withImageLoader(MealPreview);
