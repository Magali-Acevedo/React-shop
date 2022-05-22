import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/close_icon.svg';
import PlayStation from '@icons/PlayStation.jpg';

const OrderItem = () => {
    return (
        <div className="OrderItem" >
            <img src={PlayStation} alt="play station" />
            <span>PlayStation</span>
            <p>$100.000</p>
            <img src={close} alt="icon close" />
        </div>
    );

}
export default OrderItem;