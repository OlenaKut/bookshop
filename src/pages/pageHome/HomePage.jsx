import React from "react";
import Col from "react-bootstrap/Col";
import CarouselBestcellers from "./components/CarouselBestsellers";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Col xs={12} className="d-flex justify-content-end">
      <Col xl={10} md={9} className="mt-5">
        <CarouselBestcellers />
      </Col>
    </Col>
  );
};

export default HomePage;
