import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Cadastro.css'
import Axios from '../../api/axios'

function Cadastro() {
    const [nome, setNome] = useState("");
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    async function handleSubmit (e) {
        e.preventDefault();
        const ativo = 1
        const valores = {
            nome,
            username,
            senha,
            ativo
        }
        try {
          const res = await Axios.post('/usuarios/cadastro', valores);
          if (!res.data.erro) {
            alert("Usuario cadastrado")
            navigate('/');
          } 
        } catch (error) {
            console.error(error);
            alert("Insira todos os campos para realizar o cadastro!")
        }
    }
    return (
        <div className='login'>
            <div className='loginBox'>
            <span className="cadastroForm"><b>Cadastro</b></span>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label>
                        <b>Nome:</b>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </label>
                    <label>
                        <b>Insira um usuário:</b>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                    <label>
                        <b>Insira uma senha:</b>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </label>
                    <button type="submit" > <b>Entrar</b> </button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;