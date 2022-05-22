import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
import arrow from '@icons/flecha.png';

const Checkout = () => {
    return (
        <aside>
            <div className="checkout" >
                <div className="checkout-title">
                    <img className="arrow" src={arrow} alt="arrow" />
                    <h1>Shopping Cart</h1>
                </div>
                <div className="checkout_container-art" >
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        $600.000
                    </p>
                </div>
                <OrderItem />
            </div>
            <div>
                <button className="primary-button">
                    <span>Checkout</span>
                </button>
            </div>
        </aside>
    );
}

export default Checkout;