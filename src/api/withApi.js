import React from "react";
import api from "./api";

const withApi = methods => {
  const methodsRef = {};

  methods.forEach(method => {
    if (method in api) {
      methodsRef[method] = api[method];
    }
  });

  return Comp => {
    const WithApiHOC = ({ children, ...rest }) => (
      <Comp {...methodsRef} {...rest}>
        {children}
      </Comp>
    );
    return WithApiHOC;
  };
};

export default withApi;
