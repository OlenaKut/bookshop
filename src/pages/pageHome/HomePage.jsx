import React from "react";
import Col from "react-bootstrap/Col";
import Bestcellers from "../categories/Bestsellers";
import CarouselBest from "./components/CarouselBest";
import "./HomePage.css";


const HomePage = () => {
  return (
    <Col xl={10} md={9} className="m-auto mt-5">
      <Bestcellers />
      <CarouselBest />
    </Col>
  );
};

export default HomePage;
