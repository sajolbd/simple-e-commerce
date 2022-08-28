import React from "react";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";



const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add to card handler
  const cartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  console.log(cart);
  return (
    <div className="container-shop">
      <div className="container-product">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            cartHandler={cartHandler}
          ></Products>
        ))}
      </div>
      <div className="container-cart">
        <Cart
          cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
