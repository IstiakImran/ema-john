import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { handleAddToCart } = props
    const { name, seller, ratings, price, img } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-name'>
                <p className='product-na'>
                    {name}
                </p>
                <p className='product-price'>
                    ${price}
                </p>
            </div>
            <div className='product-details' >
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div>
                <button onClick={() => handleAddToCart(props.product)} className='product-cart'>
                    <p>Add to Cart </p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;