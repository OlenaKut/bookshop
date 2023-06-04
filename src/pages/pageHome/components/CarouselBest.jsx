import React from "react";
import Carousel from "better-react-carousel";
import bestcellers from "./data/BestcellersData";
import "./CarouselBest.css";
import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
//import Card from "react-bootstrap/Card";
//import Row from "react-bootstrap/Row";
//import Button from "react-bootstrap/Button";
//import Modal from "react-modal";
//import "../../categories/BookCard.css";
//import { BookContext } from "../../../BookContext";
//import { ModalCard } from "../../categories/BookCard";
import { NavLink } from "react-router-dom";

const CarouselBest = () => {
  return (
    <Container className="m-auto mb-5 p-0">
      <h1 className="mx-5 mt-5 carousel-best-title">Best Sellers</h1>
      <hr className="carousel-best-line mb-5" />
      <Carousel
        cols-md={2}
        cols-xl={3}
        cols={4}
        rows={1}
        gap={12}
        loop
        autoplay={4000}
        mobileBreakpoint={768}
        className="carousel-best m-auto text-center"
      >
        {bestcellers.map((bestceller) => {
          return (
            <Carousel.Item key={bestceller.id} className="m-5 m-auto">
              <NavLink to="/promotions">
                <div className="carousel-best-container">
                  <img
                    src={bestceller.image}
                    alt={bestceller.name}
                    className="carousel-best-img m-auto d-flex justify-content-between text-center mb-3"
                  />

                  <p className="carousel-best-pris">
                    ${bestceller.pris}
                    <sup className="carousel-best-pris-sup m-1">
                      {bestceller.prisSup}
                    </sup>
                  </p>
                </div>
                <div className="m-auto text-center">
                  <h5 className="carousel-best-author mx-4">
                    {bestceller.name}
                  </h5>
                  <h5 className="card-author fs-6 fst-italic">
                    by {bestceller.author}
                  </h5>
                </div>
              </NavLink>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default CarouselBest;
