import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Category = ({ jsonData, setCounter }) => {
  //managing state of cart array
  const [cart, setCart] = useState([]);

  function addProduct(data) {
    //to add product in cart array
    setCart((cart) => [...cart, data]);

    console.log("Product Added to the cart :", data);
  }
  function removeProduct(data) {
    // to remove product from cart array

    const removeIndex = cart.findIndex((item) => item.name === data.name);
    // to get an index of item to be deleted

    if (removeIndex !== -1) {
      // checking if item is present in array
      const newCart = [...cart];
      newCart.splice(removeIndex, 1);
      setCart(newCart);

      console.log("Product removed from the cart :", data);
    }
  }

  useEffect(() => {
    console.log("List of product present in cart array :", cart);
    setCounter(cart.length);
  }, [cart]); // execute when cart value got changed

  return (
    <div className="catContainer">
      {jsonData &&
        jsonData.data.map((category, index) => (
          <div className="category">
            <div className="catgTitle">
              <h2>{category.name}</h2>
            </div>
            <hr className=""></hr>
            <div className="productContainer">
              {category.productList &&
                category.productList.map((product, index) => (
                  <div className="product">
                    <h4>Name : {product.name}</h4>
                    <h4>Price  : {product.price}</h4>
                    <div className="btnContainer">
                      <button
                        className="btn addBtn"
                        onClick={() => {
                          addProduct(product);
                        }}
                      >
                        ADD &nbsp;
                        <FaPlus />
                      </button>
                      <button
                        className="btn removeBtn"
                        onClick={() => {
                          removeProduct(product);
                        }}
                      >
                        REMOVE &nbsp; <FaMinus />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Category;
