import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@icons/logo-conexa.png';
import email from '@icons/email.png';

const SendEmail =() => {
    return (
        <div className="send-email">
            <div className="send-email_container">
                <img src={logo} alt="logo" className="send-email_logo"/>
                <h1>The email has been sent!</h1>
                <p className="subtitle">Please follow the instructions sent to reset the password</p>
                <img src= {email} alt="correo" className="icon-email"/>
                <form action="/" className="form">
                    <input type="submit" value="Log in" className="send-email_submit"/>
                </form>
                <div className="paragraph">
                    <p >still haven't received the email?</p><a href="">send again</a>
                </div>
                
            </div>
        </div>
    );
}
export default SendEmail;