import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavMenu.css";

function NavMenu() {
  const [showDiv, setShowDiv] = useState(false);
  const [buttonClick, setButtonClick] = useState(0);
  const expand = "md";

  useEffect(() => {
    if (showDiv) {
      return;
    }
  }, [buttonClick]);

  const handleClick = () => {
    setShowDiv(!showDiv);
    setButtonClick(buttonClick + 1);
  };

  return (
    <Navbar key={expand} expand={expand}>
      <Navbar.Toggle
        aria-controls={`offcanvasNavbar-expand-${expand}`}
        className="toggle"
      />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Col md={3} className="pt-3">
            <ul className="vertical-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <p class="mb-0" onClick={handleClick}>
                  Categories <i class="bi bi-chevron-down"></i>
                </p>
                {showDiv && (
                  <ul className="submenu" style={{ display: "block" }}>
                    <li>
                      <a href="#">Cooking&Wine</a>
                    </li>
                    <li>
                      <a href="#">Kids books</a>
                    </li>
                    <li>
                      <a href="#">Fantasy</a>
                    </li>
                    <li>
                      <a href="#">Historical fiction</a>
                    </li>
                    <li>
                      <a href="#">Comics</a>
                    </li>
                    <li>
                      <a href="#">Horror</a>
                    </li>
                    <li>
                      <a href="#">Poetry</a>
                    </li>
                    <li>
                      <a href="#">Novels</a>
                    </li>
                    <li>
                      <a href="#">Thrillers&Crime</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">Promotions</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </Col>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}
export default NavMenu;
