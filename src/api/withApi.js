import React from "react";
import * as api from "./api";

export default function withApi(component) {
  const C = component;
  const WithApiWrapper = props => {
    return <C {...props} {...api} />;
  };
  return WithApiWrapper;
}
