import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../Context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flecha.png';

const MyOrder = () => {
    const {state} = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (acumalator, currentValue) => acumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;

    }
    return (
        <aside>
            <div className="MyOrder" >
                <div className="MyOrder-title">
                    <img className="arrow" src={arrow} alt="arrow" />
                    <h1>My Order</h1>
                </div>
                
                {state.cart.map(product => (
                    <OrderItem product= {product} key= {`orderItem-${product.id}`} />
                ))}
                <div className="MyOrder_container-art" >
                    <p>
                        <span>Total</span>
                    </p>
                    <p>
                        $ {sumTotal()}
                    </p>
                </div>
                
            </div>
            <div>
                <button className="primary-button">
                    <span>Ckeckout</span>
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;