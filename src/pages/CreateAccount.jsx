import React from 'react';
import '../styles/CreateAccount.scss'
const CreateAccount = ()=> {
    return (
        <div className="create-account">
            <div className="create-account_container">
                
                <h1>Mi cuenta</h1>

                <form action="/" className="form">
                    <div>
                        <label for="nombre" className="label">Nombre</label>
                        <input type="text" id="nombre" placeholder="Maria" className="create-account_name"/>
                        <label for="email" className="label">Email</label>
                        <input type="email" id="email" placeholder="correo@ejemplo.com" className="create-account_email"/>
                        <label for="password" className="label">Contraseña</label>
                        <input type="password" id="password" placeholder="**********" className="create-account_password"/>
                    
                    </div>
                    <input type="submit" value="Create" className="create-account_button"/>
                
                </form>

            </div>
        </div>
    );
}
export default CreateAccount;