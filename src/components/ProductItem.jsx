import React from 'react';
import '@styles/ProductItem.scss';
import PlayStation from '@icons/PlayStation.jpg';
import shoppingCart from '@icons/carrito-compras.png';

const ProductItem =() => {
    return (
        <div class="ProductItem">
            <img src={PlayStation} alt="play station" />
            <div class="ProductItem-description">
                <div>
                    <p class="ProductItem-price">$100.000</p>
                    <p class="ProductItem-description">PlayStation</p>
                </div>
                <figure>
                    <img src={shoppingCart} alt="shopping cart" />
                </figure>
            </div>
        </div>
    );
}
export default ProductItem;