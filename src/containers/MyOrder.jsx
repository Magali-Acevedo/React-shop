import React from "react";
import OrderItem from "../components/OrderItem";
import '../styles/MyOrder.scss';
const MyOrder = ()=> {
    return (
        <div class="order_container" >
            <h1>Mi orden</h1>
            <div class="order_container-art" >
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

export default MyOrder;