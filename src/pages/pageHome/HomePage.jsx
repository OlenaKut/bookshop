import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import "./HomePage.css";
import Subheader from "./components/Subheader";
import Main from "./components/Main";

const HomePage = () => {
  return (
    <Container className="">
      <Header />
      <NavMenu />
      <Subheader />
      <Main />
    </Container>
  );
};

export default HomePage;
