import React from 'react'
import './login.css';
import logo from './img/login1.png';

import { MdOutlineEmail } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";

function Login() {
    return (
        <div className="login">
            <div className="login-logo">
                <img src= {logo} alt="Login App"/>
            </div>

            <div className="login-right">
                <h1>Login</h1>
                
                <div className="LoginInputEmail">
                    <MdOutlineEmail/>
                    <input type="text" placeholder="Digite seu e-mail"/>
                </div>

                <div className="LoginInputPassword">
                    <MdLockOpen/>
                    <input type="text" placeholder="Digite sua senha"/>
                </div>

                <button type="submit">Entrar</button>

                <h4>Não tem conta? <button>Cadastre-se!</button></h4>
            </div>
        </div>
    )
}

export default Login