import React from "react";
import { Container } from "@material-ui/core";
import Header from "../components/Header";
import Links from "../components/Links";
import "typeface-roboto";

function Index() {
  return (
    <Container>
      <Header />
      <Links />
    </Container>
  );
}

export default Index;
