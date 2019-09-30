import React from "react";

const About = ({ match }) => {
  return (
    <div>
      <h1>{match.params.username}</h1>
    </div>
  );
};

export default About;
