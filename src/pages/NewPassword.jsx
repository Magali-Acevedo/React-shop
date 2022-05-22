import React from "react";
import '@styles/NewPassword.scss';
import logo from '@icons/logo-conexa.png';

const NewPassword = ()=> {
    return (
        <div className="new-password">
            <div className="new-password_container">
                <img src={logo} alt="logo" className="new-password_logo" />
                <h1>Welcome!</h1>
                <p className="subtitle">Enter the new password</p>
                <form action="/" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="**********" className="new-password_input-password" />
                    <label for="new-password" className="label">New password</label>
                    <input type="password" id="new-password" placeholder="**********" className="new-password_input--new-password" />
                    <input type="submit" value="Confirmar" className="new-password_submit" />
                </form>
            </div>
        </div>
    );
}

export default NewPassword;