import React, {useState} from 'react'
import './login.css';
import logo from './img/login1.png';

import { MdOutlineEmail, MdLockOpen } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
            setShow(!show);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src= {logo} alt="Login App"/>
            </div>

            <div className="login-right">
                <h1>Lorem Ipsum Dolor</h1>
                
                <div className="LoginInputEmail">
                    <MdOutlineEmail
                        size= {20}
                    />
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail"
                        value= {email}
                        onChange= {e => setEmail(e.target.value)}
                    />
                </div>

                <div className="LoginInputPassword">
                    <MdLockOpen/>
                    <input 
                        type= {show ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value= {password}
                        onChange= {e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                size= {15}
                                onClick= {handleClick}
                            />
                        ) : (
                            <HiEyeOff
                                size= {15}
                                onClick= {handleClick}
                            />
                        )}
                    </div>
                </div>

                <button className="entrar" type="submit">Entrar</button>

                <h4>Não tem uma conta? <button className="cad" type="submit">Cadastre-se!</button></h4>
            </div>
        </div>
    )
}

export default Login