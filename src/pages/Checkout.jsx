import React from "react";
import OrderItem from "@components/OrderItem";
import '@styles/Checkout.scss';
const Checkout = ()=> {
    return (
        <div class="Checkout" >
            <h1>My order</h1>
            <div class="Checkout-art" >
                <p>
                    <span>
                        13.04.22
                    </span>
                    <span>
                        6 articulos
                    </span>
                </p>
                <p>
                    $600.000
                </p>
                <OrderItem/>
            </div>
            
        </div>
    
    );

}

export default Checkout;