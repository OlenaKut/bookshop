import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import "./HomePage.css";
import Subheader from "./components/Subheader";

const HomePage = () => {
  return (
    <Container className="">
      <Header />
      <NavMenu />
      <Subheader />
    </Container>
  );
};

export default HomePage;
