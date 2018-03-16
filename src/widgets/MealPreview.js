import React from "react";
import PropTypes from "prop-types";
import { withContentRect } from "react-measure";
import styled from "styled-components";

const Root = styled.div``;

export const SMALL_WIDTH = 160;
export const Thumb = styled.img``;
export const Title = styled.h1``;
export const Info = styled.h2``;
export const Button = styled.button``;

export const MealPreview = ({
  meal,
  width,
  style,
  innerRef,
  onRequestMoreInfo,
  ...rest
}) => {
  const onClickMiniature = () => {
    if (width > SMALL_WIDTH) return;
    else onRequestMoreInfo();
  };

  const onClickButton = () => {
    onRequestMoreInfo();
  };

  return (
    <Root
      style={style}
      innerRef={innerRef}
      onClick={onClickMiniature}
      {...rest}
    >
      <Thumb src={meal.thumb} />
      <Title>{meal.name}</Title>
      <Info>
        {meal.area} {meal.category}
      </Info>
      {width > SMALL_WIDTH ? (
        <Button onClick={onClickButton}>More</Button>
      ) : null}
    </Root>
  );
};

MealPreview.propTypes = {
  meal: PropTypes.object.isRequired,
  width: PropTypes.number,
  style: PropTypes.object,
  innerRef: PropTypes.func,
  onRequestMoreInfo: PropTypes.func.isRequired
};

MealPreview.defaultProps = {
  onRequestMoreInfo: () => {}
};

export default withContentRect("client")(
  ({ contentRect, measureRef, ...rest }) => (
    <MealPreview
      innerRef={measureRef}
      width={contentRect.client.width}
      {...rest}
    />
  )
);
