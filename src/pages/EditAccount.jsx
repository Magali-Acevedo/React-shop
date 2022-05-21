import React from "react";
import '../styles/EditAccount.scss';

const EditAccount = ()=> {
    return (
        <div className="edit-account">
            <div className="edit-account_container">
                
                <h1>Mi cuenta</h1>

                <form action="/" className="form">
                    <div>
                        <label htmlFor="nombre" className="label">Nombre</label>
                        <p className="value">Maria</p>
                        <label htmlFor="email" className="label">Email</label>
                        <p className="value">correo@ejemplo.com</p>
                        <label htmlFor="password" className="label">Contraseña</label>
                        <p className="value">**********</p>
                    
                    </div>
                    
                
                </form>

            </div>
            <input type="submit" value="Editar" className="edit-account_submit" />
        </div>
    );
}

export default EditAccount;