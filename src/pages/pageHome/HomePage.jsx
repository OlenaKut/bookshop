import React from "react";
import Col from "react-bootstrap/Col";
import BestCar from "./components/BestCar";
import "./HomePage.css";

const HomePage = () => {
  return (
 
      <Col className="mt-5">
        <BestCar />
      </Col>
 
  );
};

export default HomePage;
