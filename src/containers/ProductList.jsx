import React from 'react';
import '@styles/ProductList.scss';
import ProducItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList =() => {
    const products = useGetProducts(API);
    
    return (
        <section className="ProductList">
            <div className="ProductList-cards">
                {products.map(product => (
                    <ProducItem product= {product} key= {product.id}   />
                ))}
            </div>
        </section>
    );
}

export default ProductList;