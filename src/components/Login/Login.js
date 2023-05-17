import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("username", name);
        localStorage.setItem("cart", JSON.stringify([]));
        alert(`Logado com o usuário: ${localStorage.getItem("username")}`);
        navigate('/home');
    }
    return (
        <div className='login'>
            <div className='loginBox'>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>
                        <b>Usuário:</b>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <b>Senha:</b>
                        <input type="password" name="password" />
                    </label>
                    <button type="submit" > <b>Entrar</b> </button>
                </form>
                <span className="cadastroForms"><a href="/cadastro"><b>Ou cadastre-se</b></a></span>
            </div>
        </div>
    )
}

export default Login;