import React, { useContext } from "react";
import "./BookDescription.css";
import { CarShoppingContext } from "../CarShoppingContext";
import { TYPE_CAR_MODIFY_ADD } from "../../Helpers/Constanst";

const BookDescription = ({ book }) => {
    const {addCarItem} = useContext(CarShoppingContext);

  return (
    <div className="book-description">
      <div className="book-description__image">
        <img src={book.imageURL} alt={book.title} />
      </div>
      <div className="book-description__details">
        <h1 className="book-description__title">{book.title}</h1>
        <h2 className="book-description__author">by {book.author}</h2>
        <p className="book-description__price">${book.price}</p>
        <p className="book-description__description">{book.description}</p>
        <p className="book-description__detail"><strong>Release Date:</strong> {book.releaseDate}</p>
        <p className="book-description__detail"><strong>Publisher:</strong> {book.publisher}</p>
        <p className="book-description__detail"><strong>Genre:</strong> {book.genre}</p>
        <p className="book-description__detail"><strong>Pages:</strong> {book.pages}</p>
        <p className="book-description__detail"><strong>Language:</strong> {book.language}</p>
        <p className="book-description__detail"><strong>ISBN:</strong> {book.ISBN}</p>
        <button className="book-description__cart-button" onClick={() => addCarItem(TYPE_CAR_MODIFY_ADD, book)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookDescription;
