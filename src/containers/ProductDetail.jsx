import React from "react";
import '../styles/ProductDetail.scss'
const ProductDetail = () => {
    return (
        <aside>
        <div className="icon-close">
            <img src="../iconos-img/close_icon.svg" alt=""/>
        </div>
        <div className="container-card">
            <img src="../iconos-img/pexels-jéshoots-21067.jpg" alt=""/>
            <div className="card-puntos" >
                <a href="/"></a>
                <a href="/"></a>
                <a href="/"></a>
            </div>
            <div className="container-card_description">
                <span>$100.000</span>
                <span>PlayStation</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit provident, temporibus autem commodi quia beatae est, harum sed, molestias quas quisquam eum similique excepturi non quasi voluptatem. Ut, ab placeat!</p>
            </div>

        </div>
        <button className="primary-button">
            <img src="../iconos-img/carrito-blanco.png" alt=""/>
            <span>Agregar al carrito</span>
        </button>
    </aside>
    );

}
export default ProductDetail;