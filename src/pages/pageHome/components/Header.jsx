import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BookContext } from "../../../BookContext";
import Modal from "react-modal";

import Search from "../../search/Search";
import bestcellers from "./data/BestcellersData";

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
            Shopping Cart({totalCartCount}),
            <Button
              variant="link"
              rel="noopener noreferrer"
              onClick={openModal}
            >
              {totalCartAmount}
            </Button>
            <Modal
              isOpen={showBasket}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={closeModal} className="close-button">
                X
              </button>
              <Col md={12} key={"some-random-key"}>
                <Row>
                  <Col md={4} className="card-main pt-3 ps-0 pe-0 d-block">
                    {context.state.cart.map((book) => {
                      return (
                        <div key={book.id}>
                          <h3>Total Cart Amount: {totalCartAmount}</h3>
                          <div>
                            <p>{book.name}</p>
                            <p>{book.author}</p>
                            <img
                              src={book.image}
                              alt={book.name}
                              className="w-75"
                            />
                            <p>
                              You have a total of {book.count} in your cart.
                            </p>
                            <p>Price: {book.pris}</p>
                            <p>Total: {(book.pris * book.count).toFixed(2)}</p>
                          </div>
                          <Button onClick={() => context.increase(book.id)}>
                            +
                          </Button>
                          <Button
                            onClick={() => context.removeFromCart(book.id)}
                          >
                            Delete
                          </Button>
                          <Button onClick={() => context.decrease(book.id)}>
                            -
                          </Button>
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </Modal>
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
