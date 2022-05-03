import React from "react";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App =() => {
    return(
        <Layout>
            <Login /> {/*Tiene esta forma de cierre ya que no va a tener Hijos*/}
        </Layout>
    );
}
export default App;
