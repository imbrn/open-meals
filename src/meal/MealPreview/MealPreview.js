import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withImageLoader } from "../../common/imageLoader";

const Root = styled.div`
  width: 100%;
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const Title = styled.h1``;
export const Info = styled.h2``;
export const Button = styled.button``;

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
    return "Loading...";
  }

  _renderReady() {
    const { style, innerRef, meal, onRequestMoreInfo, ...rest } = this.props;
    return (
      <Root style={style} innerRef={innerRef} {...rest}>
        <Thumb src={meal.thumb} />
        <Title>{meal.name}</Title>
        <Info>
          {meal.area} {meal.category}
        </Info>
        <Button onClick={this._makeMoreClickHandler(onRequestMoreInfo)}>
          More
        </Button>
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
