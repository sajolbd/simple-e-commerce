import React from 'react';
import './Products.css'
const Products = (props) => {
  const { cartHandler, product } = props;
    const { img, name,  price, seller, ratings } = product;
    // console.log(product);
    return (
      <div className="container-products">
        <div className="card-body">
          <img className="card-img" src={img} alt="" />
          <h6 className="card-name">{name}</h6>
          <h3 className="card-price">Price: ${price}</h3>
          <p>Manufacturar: {seller}</p>
          <p className="card-rating">Rating: {ratings} star</p>
        </div>
        <button onClick={() => cartHandler(product)} className="card-button">
          <p>Add to Cart</p>
        </button>
      </div>
    );
};

export default Products;