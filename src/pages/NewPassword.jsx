import React from "react";
import '../styles/NewPassword.scss';

const NewPassword = ()=> {
    return (
        <div className="new-password">
            <div className="new-password_container">
                <img src="../iconos-img/logo-conexa.png" alt="" className="new-password_logo" />
                <h1>¡Bienvenidos!</h1>
                <p className="subtitle">Ingresar una contraseña nueva</p>
                <form action="/" className="form">
                    <label for="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="**********" className="new-password_input-password" />
                    <label for="new-password" className="label">Nueva Contraseña</label>
                    <input type="password" id="new-password" placeholder="**********" className="new-password_input--new-password" />
                    <input type="submit" value="Confirmar" className="new-password_submit" />
                </form>
            </div>
        </div>
    );
}

export default NewPassword;