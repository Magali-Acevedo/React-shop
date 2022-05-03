import React from "react";
import '../styles/Login.scss';

const Login = ()=> {
    return (
        <div className="login">
            <div className="login-contenedor">
                <img src="../iconos-img/logo-conexa.png" alt="" className="logo" />
                <h1>¡Bienvenidos!</h1>
                <p className="subtitle">Ingresar una contraseña nueva</p>
                <form action="/" className="form">
                    <label for="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="**********" className="input input-password" />
                    <label for="new-password" className="label">Nueva Contraseña</label>
                    <input type="password" id="new-password" placeholder="**********" className="input input-new-password" />
                    <input type="submit" value="Confirmar" className="primary-button login-submit" />
                </form>
            </div>
        </div>
    );
}

export default Login;