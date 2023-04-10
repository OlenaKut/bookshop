import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <Container>
      <Row md="auto">
          <Col xxl="8" lg="6">
           <Form className="d-flex search-form mb-2 w-75">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          </Col>
        <Col lg="3" xxl="2" className="login-button"><p>Welcome,<Button variant="link" href="#" target="_blank" rel="noopener noreferrer">Guest</Button></p></Col>
        <Col lg="3" xxl="2"><p>Shopping Cart(),<Button variant="link" href="#" target="_blank" rel="noopener noreferrer">$0.00</Button></p></Col>
         </Row>
   
        <div>
          <h1 className="logo text-center text-sm-start">BookShop</h1>
          <p className="logo-under-text">your best friend</p>
        </div> 
        
     </Container>
  );
};

export default Header;
