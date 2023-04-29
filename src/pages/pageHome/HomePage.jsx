import React from "react";
import Col from "react-bootstrap/Col";
import Main from "./components/Main";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Col xl={10} md={9} className="m-auto">
      <Main />
    </Col>
  );
};

export default HomePage;
