import React from 'react';
import '@styles/ProductList.scss'
import ProducItem from '@components/ProductItem'
const ProductList =()=> {
    return (
        <section class="ProductList">
            <div class="ProductList-cards">
                <ProducItem />
            </div>
        </section>
    );
}

export default ProductList;