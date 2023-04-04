import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="logo">BookShop</h1>
          <p className="logo-under-text">your best friend</p>
        </Col> 
        <Col className="">
          <p>Welcome,</p>
          <Button variant="link" href="#" target="_blank" rel="noopener noreferrer">Guest</Button>
        </Col>
        <Col><p>Shopping Cart(), <Button variant="link" href="#" target="_blank" rel="noopener noreferrer">$0.00</Button></p></Col>
      </Row>
    </Container>
  );
};

export default Header;
