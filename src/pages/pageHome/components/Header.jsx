import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
import Basket from "./Basket";
import SearchNew from "../../search/SearchNew";
import Login from "../../../authorisation/Login";
import Dashboard from "../../../authorisation/Dashboard";


const Header = () => {
  return (
    <Container className="header mb-4">
      <Row md="auto">
      <Col lg="6" className="mb-3">
            {<Login />}
            {<Dashboard/>}
      </Col>
       <Col lg="6">
          <Basket />
        </Col>
      </Row>
      <Row md="auto">
      <Col lg="8" className="mb-3">
        <SearchNew />
        </Col>
       </Row>
     
      <div>
        <h1 className="logo text-center text-sm-start">BookShop</h1>
        <p className="logo-under-text">your best friend</p>
      </div>
    </Container>
  );
};

export default Header;
