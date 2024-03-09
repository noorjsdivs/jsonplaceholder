import React from "react";
import Container from "./Container";
import Title from "./Title";

const OwnData = () => {
  return (
    <Container className="py-20">
      <Title title="Use your own data" />
      <p className="text-sm mt-5 leading-6 tracking-wide">
        With our sponsor <span className="underline">Mockend</span> and a simple
        GitHub repo, you can have your own fake online REST server in seconds.
      </p>
    </Container>
  );
};

export default OwnData;
