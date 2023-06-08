import React, { useEffect, useState, useContext  } from "react";
import Col from "react-bootstrap/Col";
import { BookContext } from "../../BookContext";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { allData } from "../pageHome/components/data/index";
import ReactSearchBox from "react-search-box";
import Modal from "react-modal";

const presentableAllData = allData.map(each => {
  each.value = each.name + " by " + each.author;
  return each;
})

const customStyles = {
  content: {
    top: "8%",
    left: "20%",
    right: "5%",
    bottom: "5%",
    padding: "5%",
    transition: "500ms",
  },
};
const Search = () => {
  const context = useContext(BookContext);
 
  const [modalIsOpen, setIsOpen] = useState(false);

  //const handleClick = () => {
    //setIsOpen(true);
  //};

  function closeModal() {
    setIsOpen(false);
  }

  function generateBookData() {
    return {
      id: chosenBook.id,
      name: chosenBook.name,
      image: chosenBook.image,
      author: chosenBook.author,
      pris: chosenBook.pris,
    };
  }
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return ({
      id: "default id",
      image: "default image",
      author: "default author",
      descriptionShort: "default descriptionShort",
      pris: null,
      description: "default ",
      details: "default reviews1",
      aboutTheAuthor: "default ",
      reviews1: "default ",
      authorReviews1: "default authorReviews1",
      reviews2: "default reviews2",
      authorReviews2: "default authorReviews2",
      reviews3: "default reviews3",
      authorReviews3: "default authorReviews3",
    });
    setProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  /*const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchResults(event.target.value);
  };
  const filteredResults = products.filter((product) => {
    return product.name.toLowerCase().includes(searchResults.toLowerCase());
  });*/

  const [chosenBook, setChosenBook] = useState(presentableAllData[0]);

  const ModalCard = () => {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="close-button">
          X
        </button>
        <Col md={12} key={chosenBook.id}>
          <Row>
            <Col md={4} className="card-main pt-3 ps-0 pe-0 d-block">
              <Card.Img
                variant="auto"
                src={chosenBook.image}
                alt={chosenBook.name}
                className="img-hover"
              />
              <h3 className="mt-4 text-center">Prise: ${chosenBook.pris.toFixed(2)}</h3>
              <Button
                variant="link"
                className="buy-button fw-bold mt-3 w-100"
                onClick={() => context.addToCart(generateBookData())}
              >
                BUY NOW
              </Button>
            </Col>

            <Col md={8} className="ps-4">
              <h1 className="card-title mb-3">{chosenBook.name}</h1>
              <h6>Author: {chosenBook.author}</h6>
              <p>{chosenBook.descriptionShort}</p>
              <p>{chosenBook.description}</p>
              <h6>Details:</h6>
              <ul>
                <li>
                  <i>publisher:</i> {chosenBook.details.publisher};
                </li>
                <li>
                  <i>publish date:</i> {chosenBook.details.publishDate};
                </li>
                <li>
                  <i>pages:</i> {chosenBook.details.pages};
                </li>
                <li>
                  <i>dimensions:</i> {chosenBook.details.dimensions};
                </li>
                <li>
                  <i>language:</i> {chosenBook.details.language};
                </li>
                <li>
                  <i>type cover:</i> {chosenBook.details.type}.
                </li>
              </ul>
              <h6>About the Author:</h6>
              <p>{chosenBook.aboutTheAuthor}</p>
            </Col>
          </Row>
          <Col>
            <hr />
            <p>
              {chosenBook.reviews1}{" "}
              <i>
                <b>{chosenBook.authorReviews1}</b>
              </i>
            </p>
            <p>
              {chosenBook.reviews2}{" "}
              <i>
                <b>{chosenBook.authorReviews2}</b>
              </i>
            </p>
            <p>
              {chosenBook.reviews3}{" "}
              <i>
                <b>{chosenBook.authorReviews3}</b>
              </i>
            </p>
          </Col>
        </Col>
      </Modal>
    );
  };

  return (
    <Col xxl="8" lg="6">
      <ReactSearchBox
        placeholder="Search for a book!"
        data={presentableAllData}
        fuseConfigs={{
          keys: ['id', 'author', 'name']
        }}
        onSelect={(record) => {
          setChosenBook(record.item);
          setIsOpen(true);
        }}
        onFocus={() => {
          console.log("This function is called when is focussed");
        }}
        onChange={(value) => console.log(value)}
        autoFocus
        leftIcon={<>📚</>}
        iconBoxSize="48px"
       />
      {ModalCard()}
    </Col>
  );
};

export default Search;
