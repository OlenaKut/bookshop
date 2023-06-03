import React from "react";
import Bestsellers from "../categories/Bestsellers";
//import Modal from "react-bootstrap/Modal";

function SearchList({ filteredBooks }) {
  const filtered = filteredBooks.map((eachBook) => (
    <Bestsellers key={eachBook.id} eachBook={eachBook.name} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
