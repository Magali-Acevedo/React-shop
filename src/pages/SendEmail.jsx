import React from 'react';
import '../styles/SendEmail.scss'
const SendEmail =() => {
    return (
        <div className="send-email">
            <div className="send-email_container">
                <img src="../iconos-img/logo-conexa.png" alt="logo" className="send-email_logo"/>
                <h1>The email has been sent!</h1>
                <p className="subtitle">Please follow the instructions sent to reset the password</p>
                <img src="../iconos-img/pngwing.com (8).png" alt="correo" className="icon-email"/>
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