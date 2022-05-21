import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';

const Checkout = () => {
    return (
        <aside>
            <div className="checkout" >
                <div className="checkout-title">
                    <img className="arrow" src="../iconos-img/flecha.png" alt="" />
                    <h1>Carrito de Compras</h1>
                </div>
                <div className="checkout_container-art" >
                    <p>
                        <span>
                            Total
                        </span>
                    </p>
                    <p>
                        $600.000
                    </p>
                </div>
            </div>
            <OrderItem />
            <div>
                <button className="primary-button">
                    <span>Checkout</span>
                </button>
            </div>
        </aside>
    );
}

export default Checkout;