import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import "./HomePage.css";
import Subheader from "./components/Subheader";

const HomePage = () => {
  return (
    <Container className="m-0 p-0">
      <Header />

      <NavMenu />

      <Subheader />

    </Container>
  );
};

export default HomePage;
