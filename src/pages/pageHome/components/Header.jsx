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
        <Col xxl="6" lg="6">
        <SearchNew />
        </Col>
        <Col lg="4" xxl="4" className="login-button">
            {<Login />}
            {<Dashboard/>}
          </Col>
        <Basket />
      </Row>
      <div>
        <h1 className="logo text-center text-sm-start">BookShop</h1>
        <p className="logo-under-text">your best friend</p>
      </div>
    </Container>
  );
};

export default Header;
