import React from "react";
import '@styles/Header.scss';

import menu from '@icons/icon-menu.png';
import logo from '@icons/logo-conexa.png';
import arrow from '@icons/icon-arrow.png';
import shoppingCart from '@icons/icon-carrito-negro.png';

const Header =()=> {
    return (
        <nav>
        <img className="menu" src={menu} alt="icono menu"/>
        <div className="navbar-left" >
           
            <img src={logo} alt="nav-logo"/>
            <ul>
                <li>
                    <a href="">Ver todo</a>
                </li>
                <li>
                    <a href="">Ropa</a>
                </li>
                <li>
                    <a href="">Electronica</a>
                </li>
                <li>
                    <a href="">Muebles</a>
                </li>
                <li>
                    <a href="">Juguetes</a>
                </li>
                <li>
                    <a href="">Otros</a>
                </li>
            </ul>


        </div>
        <div className="navbar-right" >
            <ul>
                <li>
                    correo@ejemplo.com
                </li>
                <li>
                    <img className="navbar-right_arrow" src={arrow} alt="arrow"/>
                   </li>
                <li>
                    <img className="navbar-right_carrito" src={shoppingCart} alt="shopping cart"/>
                </li>
  
                <li>
                    <p>2</p>
                </li>
            </ul>

        </div>
    </nav>
    );
}

export default Header;