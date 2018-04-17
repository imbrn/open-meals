import React from "react";
import { withRouter } from "react-router-dom";
import * as api from "./api";

const withApi = apiFunctions => {
  return component => {
    const WithApiWrapper = ({ children, ...rest }) => {
      const functions = {};
      apiFunctions.forEach(fn => {
        functions[fn] = api[fn];
      });
      const C = withRouter(component);
      return (
        <C {...rest} {...functions}>
          {children}
        </C>
      );
    };
    return WithApiWrapper;
  };
};

export default withApi;
