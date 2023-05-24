import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'
import Axios from '../../../infra/api/axios'

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
        try {
            const res = await Axios.post('/usuarios/login', valores);
            if (!res.data.error) {
              localStorage.setItem("username", username);
              localStorage.setItem("cart", JSON.stringify([]));
              alert(`Logado com o usuário: ${localStorage.getItem("username")}`);
              navigate('/home');
            } 
          } catch (error) {
            if (error.response && error.response.status === 402)  {
                alert("Usuário inválido");
            }
            if (error.response && error.response.status === 401)  {
                alert("Senha inválida");
            }
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