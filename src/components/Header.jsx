import React, {useState, useContext} from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon-menu.png';
import MyOrder from '@containers/MyOrder';
import logo from '@icons/logo-conexa.png';
import arrow from '@icons/icon-arrow.png';
import shoppingCart from '@icons/icon-carrito-negro.png';
import AppContext from "../Context/AppContext";

const Header =()=> {
    const [toggle,setToggle] = useState (false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }
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
                    <li onClick={handleToggle}>
                        correo@ejemplo.com
                    </li>
                    <li>
                        <img className="navbar-right_arrow" src={arrow} alt="arrow"/>
                        </li>
                    <li onClick={()=> setToggleOrders(!toggleOrders)}>
                        <img className="navbar-right_carrito" src={shoppingCart} alt="shopping cart"/>
                    </li>
                    <li >
                        <p> {state.cart.length > 0 ? state.cart.length: null } </p>
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;