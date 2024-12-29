import React from "react";
import { useParams } from "react-router";
import library from "../assets/Library.json";
import BookDescription from "../components/BookDescription/BookDescription";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const BookPage = () => {
  const { isbn } = useParams();
  const book = library.find((book) => book.ISBN === isbn);

  return (
    <div>
        <NavBar></NavBar>
        <ShoppingCart></ShoppingCart>
      {book ? <BookDescription book={book} /> : <p>Book not found</p>}
      <Footer></Footer>
    </div>
  );
};

export default BookPage;
