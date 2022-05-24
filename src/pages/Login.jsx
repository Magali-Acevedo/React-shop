import React, { useRef } from "react";
import '@styles/Login.scss';
import logo from '@icons/logo-conexa.png';


const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login">
            <div className="login-contenedor">
                <img src={logo} alt="" className="login-logo" />

                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">email address</label>
                    <input type="text" name="email" placeholder="Correo@ejemplo.com" className="login-input_email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="**********" className="login-input_password"/>

                    <button className="login-primary_button" onClick={handleSubmit}>
                        Log in
                    </button>
                </form>
                <a href="/">Forgot my password</a>
                <button className="login-secundary_button">
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Login;