import React from "react";
import Carousel from "better-react-carousel";
import bestcellers from "./data/BestcellersData";
import "./CarouselBest.css";
import Container from "react-bootstrap/Container";

const CarouselBest = () => {
  return (
    <Container className="m-auto mb-5">
      <h1 className="mx-5 mt-5 carousel-best-title">Best Sellers</h1>
      <hr className="carousel-best-line mb-5" />
      <Carousel
        cols={4}
        rows={1}
        gap={0}
        loop
        autoplay={4000}
        mobileBreakpoint={768}
        className="carousel-best m-auto text-center"
      >
        {bestcellers.map((bestceller) => {
          return (
            <Carousel.Item key={bestceller.id} className="m-5 m-auto">
              <div className="carousel-best-container">
                <img
                  src={bestceller.image}
                  alt={bestceller.name}
                  className="carousel-best-img m-auto d-flex justify-content-between text-center mb-3"
                />
                <p className="carousel-best-pris">
                  {bestceller.pris}
                  <sup className="carousel-best-pris-sup m-1 fs-5">
                    {bestceller.prisSup}
                  </sup>
                </p>
              </div>
              <div className="m-auto text-center">
                <h5 className="carousel-best-author mx-4">{bestceller.name}</h5>
                <h5 className="card-author fs-6 fst-italic">
                  by {bestceller.author}
                </h5>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default CarouselBest;
