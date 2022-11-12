import React from 'react';
import './Product.css'

const Product = (props) => {
    // const {handleAddToCart,product}=props
    const {name,img,seller,price,ratings}=props.product

    
    return (
        <div className='product'>
    <img src={img} alt="" />   
    <div className='product-info'>
    <p className='product-name'>{name}</p>
    <p>Price:${price}</p>  
    <p>Seller:{seller}</p>
    <p>Ratings:{ratings}</p>
    </div>
        <button onClick={()=>props.handleAddToCart(props.product)}  className='btn-cart'>
        <p>Add To Cart</p>
        </button>
        </div>
    );
};


export default Product;