import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div``;

export const Thumb = styled.img``;
export const Title = styled.h1``;
export const Info = styled.h2``;
export const Button = styled.button``;

export const MealPreview = ({
  meal,
  style,
  innerRef,
  onRequestMoreInfo,
  ...rest
}) => {
  const onClickButton = () => {
    onRequestMoreInfo();
  };

  return (
    <Root style={style} innerRef={innerRef} {...rest}>
      <Thumb src={meal.thumb} />
      <Title>{meal.name}</Title>
      <Info>
        {meal.area} {meal.category}
      </Info>
      <Button onClick={onClickButton}>More</Button>
    </Root>
  );
};

MealPreview.propTypes = {
  meal: PropTypes.object.isRequired,
  style: PropTypes.object,
  innerRef: PropTypes.func,
  onRequestMoreInfo: PropTypes.func.isRequired
};

MealPreview.defaultProps = {
  onRequestMoreInfo: () => {}
};

export default MealPreview;
