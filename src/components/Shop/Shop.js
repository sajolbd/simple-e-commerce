import React from 'react';
import { useEffect,useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json'   )
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className='container-shop'>
            <div className="container-product">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                    ></Products>)
                } 
            </div>
            <div className="container-cart">
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;