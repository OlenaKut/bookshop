import React, { useState, useEffect } from "react";
import NavLink from "react-bootstrap/NavLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Footer.css";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [buttonClick, setButtonClick] = useState(0);

  useEffect(() => {
    if (showContactForm) {
      return;
    }
  }, [buttonClick]);

  const handleClick = () => {
    setShowContactForm(!showContactForm);
    setButtonClick(buttonClick + 1);
  };

  return (
    <Col xs={12}>
      {showContactForm && <ContactForm />}
      <Row className="footerBox justify-content-evenly p-2">
        <Col sm={6} lg={4}>
          <h3 className="footerTitle p-2">Contacts</h3>
          <p>
            Thanks for reaching out to Bookshop. In order to ensure you receive
            a quick reply, please fill out our
            <span>
              <Button className="btnContactUs p-0" onClick={handleClick}>
                Contact Us
              </Button>
            </span>{" "}
            form.
          </p>
          <h1>Social media</h1>
        </Col>
        <Col sm={6} lg={4} className="">
          <h3 className="footerTitle p-2">Store</h3>
          <NavLink href="#" className="footerLink p-2">
            Home
          </NavLink>
          <NavLink href="#" className="footerLink p-2">
            Special offers
          </NavLink>
          <NavLink href="#" className="footerLink p-2">
            Login
          </NavLink>
          <NavLink href="#" className="footerLink p-2">
            Basket
          </NavLink>
        </Col>
        <Col sm={6} lg={4} className="">
          <h3 className="footerTitle p-2">Newsletter</h3>
        </Col>
      </Row>
      <Row className="footerBottom p-3 text-center">
        <h6>
          For partnerships, promotional opportunities, and advertising
          inquiries, please email us at: promotions@bookshop.com
        </h6>
      </Row>
    </Col>
  );
};

export default Footer;
