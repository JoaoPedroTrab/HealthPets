import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Cadastro.css'
import Axios from '../../api/axios'

function Cadastro() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleSubmit (e) {
        e.preventDefault();

        try {
          const res = await Axios.post('/cadastro', {
            name,
            username,
            password,
          });
          if (!res.data.erro) {
            const token = res.data.token;
            alert("Usuario cadastrado")
            navigate('/');
          } 
        } catch (error) {
          alert("erro")
        }
    }
    return (
        <div className='login'>
            <div className='loginBox'>
            <span className="cadastroForm"><b>Cadastro</b></span>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>
                        <b>Nome:</b>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <b>Insira um usuário:</b>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <b>Insira uma senha:</b>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit" > <b>Entrar</b> </button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;