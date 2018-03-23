import React from "react";
import * as api from "./api";

function withApi(apiFunctions) {
  return component => {
    const WithApiWrapper = ({ children, ...rest }) => {
      const usedFunctions = {};

      for (const fn in apiFunctions) {
        if (fn in withApi) {
          usedFunctions[fn] = withApi[fn];
        } else {
          usedFunctions[fn] = api[fn];
        }
      }

      const Comp = component;
      return (
        <Comp {...usedFunctions} {...rest}>
          {children}
        </Comp>
      );
    };
    return WithApiWrapper;
  };
}

export default withApi;
