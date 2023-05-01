import React from "react";
import Card from "react-bootstrap/Card";
import "./Main.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import bestcellers from "./data/BestcellersData";

const Main = () => {
  return (
    <Container fluid className="m-auto text-center my-5">
      {bestcellers.slice(0, 6).map((bestceller) => {
        return (
          <Row
            className="d-inline-flex justify-content-around m-4"
            xs="auto"
            key={bestceller.id}
          >
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
                <Card.Text className="">
                  {bestceller.descriptionShort}
                </Card.Text>
              </Card.Body>

              <ButtonGroup aria-label="Basic example">
                <Button variant="link" className="buy-button fw-bold">
                  BUY NOW
                </Button>
                <Button variant="link" className="price-button fw-bold">
                  {bestceller.pris}
                </Button>
              </ButtonGroup>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default Main;
