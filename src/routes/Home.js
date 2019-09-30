import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      Home
      <br />
      <button onClick={() => history.push("/posts")}>포스트로 이동</button>
    </div>
  );
};

export default Home;
