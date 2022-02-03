import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {name, seller, stock, price, img} = props.product;
    return (
        <div className='all-products'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product'>
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;