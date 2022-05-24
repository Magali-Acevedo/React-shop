import React, {useContext} from 'react';
import AppContext from '../Context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/close_icon.svg';
;


const OrderItem = ( {product} ) => {
    const {removeFromCart} = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }
    return (
        <div className="OrderItem" >
            <img src={product.images [0] } alt={product.title} />
            <span>{product.title}</span>
            <p>$ {product.price} </p>
            <img src={close} alt="close" onClick={() => handleRemove(product)}/>
        </div>
    );

}
export default OrderItem;