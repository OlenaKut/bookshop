import React from "react";
import Carousel from "better-react-carousel";
import bestcellers from "./data/BestcellersData";
import "./CarouselBest.css";
import Container from "react-bootstrap/Container";
import BookCard from "../../categories/BookCard";

const CarouselBestsellers = ({ eachBook }) => {
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
        {bestcellers.map((eachBook) => {
          return (
            <Carousel.Item className="m-5 m-auto"> 
              <BookCard
                id={eachBook.id}
                name={eachBook.name}
                image={eachBook.image}
                author={eachBook.author}
                descriptionShort={eachBook.descriptionShort}
                pris={eachBook.pris}
                description={eachBook.description}
                details={eachBook.details}
                aboutTheAuthor={eachBook.aboutTheAuthor}
                reviews1={eachBook.reviews1}
                authorReviews1={eachBook.authorReviews1}
                reviews2={eachBook.reviews2}
                authorReviews2={eachBook.authorReviews2}
                reviews3={eachBook.reviews3}
                authorReviews3={eachBook.authorReviews3}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default CarouselBestsellers;
