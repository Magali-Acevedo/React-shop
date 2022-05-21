import React from 'react';
import '../styles/Order.scss'

const Order = () => {
    return (
        <div className="order" >
            <p>
                <span>
                    10.07.22
                </span>
                <span>
                    6 articulos
                </span>
            </p>
            <p>
                $600.000
            </p>
            <figure>
                <img src="../iconos-img/icon-arrow.png" alt=""/>
            </figure>
        </div>
    );
}
export default Order;