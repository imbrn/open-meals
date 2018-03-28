import React from "react";
import imageLoader from "./imageLoader";

const withImageLoader = component => {
  const ImageLoaderWrapper = ({ children, ...rest }) => {
    const C = component;
    return (
      <C imageLoader={imageLoader} {...rest}>
        {children}
      </C>
    );
  };
  return ImageLoaderWrapper;
};

export default withImageLoader;
