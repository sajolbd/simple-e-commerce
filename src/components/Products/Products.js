import React from 'react';
import './Products.css'
const Products = (props) => {
    const { img, name, category, price, seller, stock, ratings } = props.product;
    return (
        <div className='container-products'>
            <img className='card-img' src={img} alt="" />
            <h6 className='card-name'>{name}</h6>
            <p className='card-price'>Price: ${price}</p>
            <p>Manufacturar: {seller}</p>
            <p>Rating: {ratings} star</p>
        </div>
    );
};

export default Products;