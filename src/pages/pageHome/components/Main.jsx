import React from "react";
import "./MainBlock.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import bestcellers from "./data/BestcellersData";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Main = () => {
  return (
    <Container className="m-auto text-center my-5">
      {bestcellers.slice(0, 6).map((bestceller) => {
        return (
          <Row
            className="d-inline-flex justify-content-around m-4"
            xs="auto"
            key={bestceller.id}
          >
            <Col>
              <Card className="card-main p-0 d-flex mb-3">
                <Card.Img
                  variant="top"
                  src={bestceller.image}
                  className="rounded m-auto image-best"
                />
                <Card.Body className="text-start p-3 overflow-y-auto mb-2">
                  <Card.Title className="card-title">
                    {bestceller.name}
                    <br />
                    <span className="card-author fs-6 fst-italic">
                      by {bestceller.author}
                    </span>
                  </Card.Title>
                  <Card.Text>{bestceller.descriptionShort}</Card.Text>
                </Card.Body>
                <Card.Body className="m-0 p-0 d-flex align-items-end">
                  <ButtonGroup className="w-100">
                    <Button
                      variant="link"
                      className="buy-button fw-bold bg-dark text-white"
                    >
                      BUY NOW
                    </Button>
                    <Button
                      variant="link"
                      className="price-button fw-bold bg-primary text-white"
                    >
                      {bestceller.pris}
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Main;
