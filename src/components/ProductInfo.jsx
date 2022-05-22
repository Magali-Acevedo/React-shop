import React from 'react';
import '@styles/ProductInfo.scss'
import productPlay from '@icons/PlayStation.jpg';
import shoppingCartWhithe from '@icons/icon-arrow.png';

const ProductInfo = () => {
    return (
        <><div className="container-card">
            <img src={productPlay} alt="" />
            <div className="card-puntos">
                <a href="/"></a>
                <a href="/"></a>
                <a href="/"></a>
            </div>
            <div className="container-card_description">
                <span>$100.000</span>
                <span>PlayStation</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit provident, temporibus autem commodi quia beatae est, harum sed, molestias quas quisquam eum similique excepturi non quasi voluptatem. Ut, ab placeat!</p>
            </div>
        </div><button className="primary-button">
                <img src={shoppingCartWhithe} alt="Carrito de compras" />
                <span>add to cart</span>
            </button></>
    );

}
export default ProductInfo;
