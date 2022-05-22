import React from "react";
import '@styles/Login.scss';
import logo from '@icons/logo-conexa.png';

const Login = ()=> {
    return (
        <div className="login">
            <div className="login-contenedor">
                <img src={logo} alt="" className="login-logo" />

                <form action="/" className="form">
                    <label htmlFor="email" className="label">Dirección de Email</label>
                    <input type="text" id="email" placeholder="Correo@ejemplo.com" className="login-input_email" />
                    <label htmlFor="password" className="label"> Contraseña</label>
                    <input type="password" id="password" placeholder="**********" className="login-input_password"/>

                    <input type="submit" value="Ingresar" className="login-primary_button" />
                </form>
                <a href="/">Olvidaste tu contraseña?</a>
                <input type="submit" value="Registrate" className="login-secundary_button"/>
            </div>
        </div>
    );
}

export default Login;