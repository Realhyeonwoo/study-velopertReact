import React from "react";
import { Redirect } from "react-router-dom";

const logged = false;

const MyPage = () => {
  return (
    <div>
      {!logged && <Redirect to="/login" />}
      <h2>My page</h2>
    </div>
  );
};

export default MyPage;
