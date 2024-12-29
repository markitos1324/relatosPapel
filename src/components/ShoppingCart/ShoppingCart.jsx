import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCart.css";
import { CarShoppingContext } from "../CarShoppingContext";
import Book from "../Book/Book";
import { useNavigate } from "react-router";

const ShoppingCart = ({ remove }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const { addToCar, addCarItem } = useContext(CarShoppingContext);
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleRemove = (book) => {
    remove(book);
  };

  return (
    <div className="shopping-cart">
      <button className="shopping-cart__button" onClick={toggleCart}>
        🛒 Cart ({(addToCar?.length) ? addToCar.length : 0})
      </button>
      {isOpen && (
        <div className="shopping-cart__modal">
          <div className="shopping-cart__modal-overlay" onClick={toggleCart}>
            <div className="shopping-cart__modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="shopping-cart__close" onClick={toggleCart}>
                &times;
              </span>
              <h2 className="shopping-cart__title">Shopping Cart</h2>
              {addToCar?.length === 0 || addToCar?.length === undefined ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <ul>
                    {showAll ? (
                      addToCar.map((item, index) => (
                        <div key={index} className="shopping-cart__item">
                          <Book book={item} remove={handleRemove} isInCart={true} />
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="shopping-cart__item">
                          <Book book={addToCar[0]} remove={handleRemove} isInCart={true} />
                        </div>
                        {addToCar.length > 1 && (
                          <button className="shopping-cart__show-all-button" onClick={toggleShowAll}>
                            +{addToCar.length - 1} more product{addToCar.length - 1 > 1 ? 's' : ''}
                          </button>
                        )}
                      </>
                    )}
                  </ul>
                  {showAll && (
                    <button className="shopping-cart__show-all-button" onClick={toggleShowAll}>
                      Show less
                    </button>
                  )}
                  <button className="shopping-cart__checkout-button" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
