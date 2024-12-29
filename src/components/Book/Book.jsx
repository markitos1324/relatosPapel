import React from "react";
import "./Book.css";
import { useNavigate } from "react-router";

const Book = ({ book, add, remove, isInCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/${book.ISBN}`);
  };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <img src={book.imageURL} alt={book.title} className="book-card__image" />
      <div className="book-card__content">
        <h2 className="book-card__title">{book.title}</h2>
        <h3 className="book-card__author">{book.author}</h3>
        <p className="book-card__description">{book.description}</p>
        <p className="book-card__price">${book.price}</p>
        {isInCart ? (
          <button className="book-card__cart-button" onClick={(e) => { e.stopPropagation(); remove(book); }}>Remove</button>
        ) : (
          <button className="book-card__cart-button" onClick={(e) => { e.stopPropagation(); add(book); }}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Book;
