import React from 'react';
import './Calendario.css';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import Calendar from 'react-calendar';
import { Link, useNavigate } from 'react-router-dom';

export function dataRota(data) {
    console.log("teste aaa");
    return data.toISOString().slice(0, 10);
}

function Calendario() {
    const [dataSelecionada, setDataSelecionada] = React.useState(new Date());
    const navigate = useNavigate();

    const handleOnClick = (data) => {
        setDataSelecionada(data);
    }
    
    const handleDateClick = (data) => { 
        const dataFormatada = data.toISOString().slice(0, 10);
        navigate(`/compromissos/${dataFormatada}`);
    }
    return (
        <div className='menuContainer'>
                <h1>NÃO SE ESQUEÇA! SEU PET *PETNAME TEM *QNT COMPROMISSOS PARA A SEMANA!</h1> {/* pegar do bd quantidade de eventos programados para os proximos 7 dias ----- verificar se nao tem vacina, senao tiver nao aparece essa msg*/} 
                <div className="containerBotoes">
                    <span className="b1"><button className="botaoOp" type="submit" > <b> < MdOutlineAddCircleOutline />  Vacinação </b> </button></span>
                    <span className="b2"><button className="botaoOp" type="submit" > <b> < MdOutlineAddCircleOutline />  Consulta </b> </button></span>
                </div>
                <Calendar onClick={handleOnClick} value={dataSelecionada} onClickDay={handleDateClick}/>


        </div>
    )

}

export default Calendario;