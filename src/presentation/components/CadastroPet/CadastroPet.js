import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CadastroPet.css'
import Axios from '../../../infra/api/axios'


function CadastroPet() {
        const [nomePet, setNomePet] = useState("");
        const [racaPet, setRacaPet] = useState("");
        const [nascimentoPet, setNascimentoPet] = useState("");
        const [pesoPet, setPesoPet] = useState("");
        const navigate = useNavigate();
        async function handleSubmit (e) {
            e.preventDefault();
            const valores = {
                nomePet,
                racaPet,
                nascimentoPet,
                pesoPet
            }
            try {
              const res = await Axios.post('/pet/adicionar', valores);
              if (!res.data.erro) {
                alert("Pet cadastrado")
                navigate('/home');
              } 
            } catch (error) {
                console.error(error);
                console.log(valores);
                alert("Insira todos os campos para realizar o cadastro!")
            }
        }
        return (
            <div className='login'>
                <div className='loginBox'>
                <span className="cadastroForm"><b>Cadastro de Pets</b></span>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <label>
                            <b>Nome do Pet:</b>
                            <input type="text" value={nomePet} onChange={(e) => setNomePet(e.target.value)} required />
                        </label>
                        <label>
                            <b>Raça do Pet:</b>
                            <input type="text" value={racaPet} onChange={(e) => setRacaPet(e.target.value)} required />
                        </label>
                        <label>
                            <b>Peso do Pet:</b>
                            <input type="text" value={pesoPet} onChange={(e) => setPesoPet(e.target.value)} required />
                        </label>
                        <label>
                            <b>Nascimento do Pet:</b>
                            <input type="text" value={nascimentoPet} onChange={(e) => setNascimentoPet(e.target.value)} required />
                        </label>
                        <button type="submit" > <b>Adicionar</b> </button>
                    </form>
                </div>
            </div>
        )
    }

export default CadastroPet;