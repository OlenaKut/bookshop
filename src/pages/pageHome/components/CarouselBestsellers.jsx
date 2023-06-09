import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bestcellers from "../../pageHome/components/data/BestcellersData";
import BookCardCarousel from "../../categories/BookCardCarousel";
import Container from "react-bootstrap/Container";
import Carousel from "better-react-carousel";
import "../components/CarouselBest.css";


const CarouselBestcellers = ({ eachBook }) => {
  function renderBook(_props) {
    return bestcellers.map((eachBook) => {
      return (
        <BookCardCarousel
          id={eachBook.id}
          name={eachBook.name}
          image={eachBook.image}
          author={eachBook.author}
          descriptionShort={eachBook.descriptionShort}
          pris={eachBook.pris}
          prisSup={eachBook.prisSup}
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
      );
    });
  }
  return (
    <Col md={9} xl={10} className="m-auto pb-5 pt-5">
     
      <Container>
      <div  className="m-auto mb-5 p-0">
      <h1 className="mx-5 mt-5 carousel-best-title">Best Sellers</h1>
      <hr className="carousel-best-line mb-5" />
      </div>
      
        <Carousel
        cols={4}
        rows={1}
        gap={12}
        loop
        autoplay={4000}
        mobileBreakpoint={768}
          className="carousel-best m-auto text-center">
          <Carousel.Item>
            {renderBook()}
          </Carousel.Item>
        </Carousel>
       </Container>
     </Col>
  );
};
export default CarouselBestcellers;