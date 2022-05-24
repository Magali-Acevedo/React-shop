import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Layout from '@containers/Layout';
import Home from "@pages/Home";
import Login from '@pages/Login';
import EditAccount from "@pages/EditAccount";
import NewPassword from "@pages/NewPassword";
import CreateAccount from "@pages/CreateAccount";
import SendEmail from "@pages/SendEmail";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
import AppContext from "../Context/AppContext";
import useInitialState from "../hooks/useInitialState";
import '@styles/global.css';

function App () {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value = {initialState} >
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path ="/" element = {<Home /> } />
                        <Route path="/Login" element= {<Login /> } />
                        <Route path ="/new-password" element = {<NewPassword /> } />
                        <Route path="/create-account" element={<CreateAccount/>} />
                        <Route path="/send-email" element= {<SendEmail/>} />
                        <Route path = "/edit-account" element= {<EditAccount /> } />
                        <Route path="/checkout" element = {<Checkout/>} />
                        <Route path="/orders" element = {<Orders/>} />
                        <Route path= "*" element = {<NotFound /> } />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;
