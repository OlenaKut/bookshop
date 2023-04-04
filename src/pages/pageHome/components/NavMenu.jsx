import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavMenu.css";

function NavMenu() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <Col sm={3} className="pt-3">
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
  );
}
export default NavMenu;
