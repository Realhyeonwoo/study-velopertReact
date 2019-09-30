import React from "react";

//queryString 파싱하기
const Search = ({ location }) => {
  return <div>{new URLSearchParams(location.search).get("keyword")}</div>;
};

export default Search;
