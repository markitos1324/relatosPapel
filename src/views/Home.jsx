import { useContext, useState } from "react";
import "./Home.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Book from "../components/Book/Book";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import library from "../assets/Library.json";
import { CarShoppingContext } from "../components/CarShoppingContext";
import { TYPE_CAR_MODIFY_ADD, TYPE_CAR_MODIFY_REMOVE } from "../Helpers/Constanst";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 6;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const filteredBooks = library.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { addToCar, addCarItem } = useContext(CarShoppingContext);

  const handleAddToCar = (book) => {
    addCarItem(TYPE_CAR_MODIFY_ADD, book);
  };
  const handleRemoveToCar = (book) => {
    addCarItem(TYPE_CAR_MODIFY_REMOVE, book);
  };

  return (
    <>
      <div className="container">
        <NavBar setSearchQuery={setSearchQuery}></NavBar>
        <ShoppingCart remove={handleRemoveToCar}></ShoppingCart>
        <div className="main">
          <div className="content">
            <div className="book-grid">
              {currentBooks.map((book) => (
                <Book key={book.ISBN} book={book} add={handleAddToCar} remove={handleRemoveToCar}></Book>
              ))}
            </div>
            <div className="pagination">
              {Array.from(
                { length: Math.ceil(filteredBooks.length / booksPerPage) },
                (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};
