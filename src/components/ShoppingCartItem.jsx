import React from 'react';
import '@styles/ShoppingCartItem';
import PlayStation from '@icons/PlayStation.jpg';

const ShoppingCartItem = ()=> {
    return(
        <div className="ShoppingCartItem" >
            <img src={PlayStation} alt="play station" />
            <span>PlayStation</span>
            <p>$100.000</p>
        </div>
    );
}

export default ShoppingCartItem;