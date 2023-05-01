import React from "react";
import Col from "react-bootstrap/Col";
import Main from "./components/Main";
import CarouselBest from "./components/CarouselBest";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Col xl={10} md={9} className="m-auto">
      <Main />
      <CarouselBest />
    </Col>
  );
};

export default HomePage;
