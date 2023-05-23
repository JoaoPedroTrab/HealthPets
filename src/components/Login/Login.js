import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'
import Axios from "../../api/axios"

function Login() {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const  handleSubmit  = async (event) => {
        event.preventDefault();
        const valores = {
            senha,
            username,
        }
        const res = await Axios.post('/usuarios/login', valores)
        try {
            if (!res.data.error) {
                console.log("Usuário não encontrado ou senha incorreta.")
            }
            else{

                localStorage.setItem("username", username);
                localStorage.setItem("cart", JSON.stringify([]));
                alert(`Logado com o usuário: ${localStorage.getItem("username")}`);
                navigate('/home');
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    return (
        <div className='login'>
            <div className='loginBox'>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>
                        <b>Usuário:</b>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <b>Senha:</b>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </label>
                    <button type="submit" > <b>Entrar</b> </button>
                </form>
                <span className="cadastroForms"><a href="/cadastro"><b>Ou cadastre-se</b></a></span>
            </div>
        </div>
    )
}

export default Login;