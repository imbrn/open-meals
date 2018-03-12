import React, { Fragment } from "react";
import SearchBox from "../components/SearchBox";

const Search = () => (
  <Fragment>
    <SearchBox
      placeholder="Search meals by name..."
      style={{ width: "480px", margin: "auto" }}
    />
  </Fragment>
);

export default Search;
