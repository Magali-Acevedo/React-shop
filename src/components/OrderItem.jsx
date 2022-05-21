import React from 'react';
import '../styles/OrderItem.scss'
const OrderItem = () => {
    return (
        <div className="OrderItem" >
            <img src="/iconos-img/pexels-jéshoots-21067.jpg" alt="" />
            <span>PlayStation</span>
            <p>$100.000</p>
            <img src="../iconos-img/close_icon.svg" alt="" />
        </div>
    );

}
export default OrderItem;