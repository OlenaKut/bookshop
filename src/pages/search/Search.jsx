import React, { useState } from "react";
import SearchList from "./SearchList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredBooks = details.filter((eachBook) => {
    return (
      eachBook.name.toLowerCase().includes(searchField.toLowerCase()) ||
      eachBook.author.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <SearchList filteredBooks={filteredBooks} />;
    }
  }

  return (
    <div>
      {searchList()}

      <Form className="d-flex search-form mb-2 w-75">
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <Button variant="outline-primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Search;
