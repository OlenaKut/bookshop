import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="logo">BookShop</h1>
          <p className="logo-under-text">your best friend</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
