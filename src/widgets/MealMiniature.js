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

export const MealMiniature = ({
  width,
  style,
  innerRef,
  name,
  area,
  category,
  thumb,
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
      <Thumb src={thumb} />
      <Title>{name}</Title>
      <Info>
        {area} {category}
      </Info>
      {width > SMALL_WIDTH ? (
        <Button onClick={onClickButton}>More</Button>
      ) : null}
    </Root>
  );
};

MealMiniature.propTypes = {
  width: PropTypes.number,
  style: PropTypes.object,
  innerRef: PropTypes.func,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  onRequestMoreInfo: PropTypes.func.isRequired
};

MealMiniature.defaultProps = {
  onRequestMoreInfo: () => {}
};

export default withContentRect("client")(
  ({ contentRect, measureRef, ...rest }) => (
    <MealMiniature
      innerRef={measureRef}
      width={contentRect.client.width}
      {...rest}
    />
  )
);
