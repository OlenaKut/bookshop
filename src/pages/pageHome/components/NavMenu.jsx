import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";


function NavMenu() {
  const [showDiv, setShowDiv] = useState(false);
  const [buttonClick, setButtonClick] = useState(0);
  const expand = "md";

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    //setButtonClick(buttonClick + 1);
  };

  const handleShow = () => setShow(true);



  useEffect(() => {
    if (showDiv) {
      return;
    }
  }, [showDiv]);

  const handleClick = () => {
    setShowDiv(!showDiv);
    setButtonClick(buttonClick + 1);
  };

  

  return (
    <Col xl={2} md={3}>
      <Navbar key={expand} expand={expand}>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="toggle"
          onClick={handleShow} 
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="offcanvas"
          data-bs-dismiss="offcanvas"
          show={show} onHide={handleClose}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Col className="pt-3">
              <ul className="vertical-menu">
                <li>
                  <NavLink to="/" onClick={handleClose}>Home</NavLink>
                </li>
                <li>
                  <p class="mb-0" onClick={handleClick}>
                    Categories <i class="bi bi-chevron-down"></i>
                  </p>
                  {showDiv && (
                    <ul className="submenu" style={{ display: "block" }}>
                      <li>
                        <NavLink to="/cookingWine" onClick={handleClose}>Cooking&Wine</NavLink>
                      </li>
                      <li>
                        <NavLink to="/kidsBooks" onClick={handleClose}>Kids books</NavLink>
                      </li>
                      <li>
                        <NavLink to="/fantasy" onClick={handleClose}>Fantasy</NavLink>
                      </li>
                      <li>
                        <NavLink to="/historicalFiction" onClick={handleClose}>
                          Historical fiction
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/comics" onClick={handleClose}>Comics</NavLink>
                      </li>
                      <li>
                        <NavLink to="/horror" onClick={handleClose}>Horror</NavLink>
                      </li>
                      <li>
                        <NavLink to="/poetry" onClick={handleClose}>Poetry</NavLink>
                      </li>
                      <li>
                        <NavLink to="/novels" onClick={handleClose}>Novels</NavLink>
                      </li>
                      <li>
                        <NavLink to="/thrillers" onClick={handleClose}>Thrillers&Crime</NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink to="/promotions" onClick={handleClose}>Promotions</NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleClose}>About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={handleClose}>Contacts</NavLink>
                </li>
              </ul>
            </Col>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Col>
  );
}
export default NavMenu;
