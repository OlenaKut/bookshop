import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavMenu.css";

function NavMenu() {
  const [showDiv, setShowDiv] = useState(false);
  const expand = "md";

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <Navbar key={expand} expand={expand}>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggle"/>
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
                <a href="#" onClick={handleClick}>
                  Categories <i class="bi bi-chevron-down"></i>
                </a>
                {showDiv && (
                  <ul className="submenu" style={{ display: "block" }}>
                    <li>
                      <a href="#">Action and adventure</a>
                    </li>
                    <li>
                      <a href="#">Children's book</a>
                    </li>
                    <li>
                      <a href="#">Distopia</a>
                    </li>
                    <li>
                      <a href="#">Fantasy</a>
                    </li>
                    <li>
                      <a href="#">Fiction</a>
                    </li>
                    <li>
                      <a href="#">Graphic novel</a>
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
                      <a href="#">Thriller</a>
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
