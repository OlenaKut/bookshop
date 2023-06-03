import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Header = () => {
  const [showBasket, setShowBasket] = useState(false);

  const context = useContext(BookContext);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.pris * book.count), 0)
    .toFixed(2);

  function openModal() {
    setShowBasket(true);
  }

  function closeModal() {
    setShowBasket(false);
  }
  const customStyles = {
    content: {
      top: "5%",
      left: "20%",
      right: "5%",
      bottom: "5%",
      padding: "5%",
      transition: "500ms",
    },
  };

  return (
    <Container className="header mb-4">
      <Row md="auto">
        <Col xxl="8" lg="6">
          <Search details={bestcellers} />
        </Col>
        <Col lg="3" xxl="2" className="login-button">
          <p>
            <i className="bi bi-person ps-2 pe-2 fs-3"></i>
            Welcome,
            <Button
              variant="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guest
            </Button>
          </p>
        </Col>
        <Col lg="3" xxl="2">
          <p>
            Shopping Cart(),
            <Button
              variant="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              $0.00
            </Button>
          </p>
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
