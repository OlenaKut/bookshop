import React from "react";

function Card({book}) {
  return (
    <div className="">
      <img
        className=""
        alt={book.name}
        src={process.env.PUBLIC_URL + book.image}
      />
      <div>
        <h2>{book.name}</h2>
        <p>{book.author}</p>
      </div>
    </div>
  );
}

export default Card;
