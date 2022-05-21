import React from "react";
import '../styles/Header.scss';

const Header =()=> {
    return (
        <nav>
        <img className="menu" src="../iconos-img/icon-menu.png" alt="icono menu"/>
        <div className="navbar-left" >
           
            <img src="../iconos-img/logo-conexa.png" alt="logo"/>
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
                    <img className="navbar-right_arrow" src="../iconos-img/icon-arrow - abajo.png" alt=""/>
                   </li>
                <li>
                    <img className="navbar-right_carrito" src="../iconos-img/icon-carrito-negro.png" alt=""/>
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