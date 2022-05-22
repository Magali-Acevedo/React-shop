import React from 'react';
import Order from '@components/Order'
import '@styles/Orders.scss'
const Orders = () => {
    return (
        <div className="orders" >
            <h1>Mis ordenes</h1>
            <Order/>
        </div>
     
    );
}
export default Orders;