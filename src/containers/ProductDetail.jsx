import React from "react";
import '@styles/ProductDetail.scss'
import ProductInfo from '@components/ProductInfo';
import close from '@icons/close_icon.svg';

const ProductDetail = () => {
    return (
        <aside>
            <div className="icon-close">
                <img src={close} alt="close icon"/>
            </div>
            <ProductInfo />
        </aside>
    );

}
export default ProductDetail;