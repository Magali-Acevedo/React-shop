import React, { useContext} from 'react';
import '@styles/ProductItem.scss';
import PlayStation from '@icons/PlayStation.jpg';
import shoppingCart from '@icons/carrito-compras.png';
import AppContext from '../Context/AppContext';

const ProductItem =( {product} ) => {
    const { addToCart} = useContext(AppContext);
    const handleClick = item=> {
        addToCart(item);
    }
    return (
        <div className="ProductItem">
            <img src={product.images [0]} alt= {product.title}  />
            <div className="ProductItem-description">
                <div>
                    <p className="ProductItem-price">$ {product.price}</p>
                    <p className="ProductItem-description">{product.title}</p>
                </div>
                <figure onClick = {()=> handleClick(product)}>
                    <img src={shoppingCart} alt="shopping cart" />
                </figure>
            </div>
        </div>
    );
}
export default ProductItem;