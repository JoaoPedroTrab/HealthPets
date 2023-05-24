import { FaArrowLeft } from "react-icons/fa";
import ProfileBox from "./ProfileBox";
import { GiSittingDog } from "react-icons/gi";
import { FaPaw } from "react-icons/fa"
import { HiUser } from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import './sideBar.css'
import 'react-calendar/dist/Calendar.css';

import { useNavigate } from 'react-router-dom';

function SideBar(props) {

    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    const admin = (e) => {
        e.preventDefault();
        navigate('/admin');
    };
    const inicio = (e) => { 
        e.preventDefault();
        navigate('/home');
    };
    const perfil = (e) => {
        e.preventDefault();
        navigate('/pets');
    }
    const cadastro = (e) => {
        e.preventDefault();
        navigate('/pets/adicionar');
    }
    
    return (
        <div className="sideBarCcontainer">
            <ProfileBox />
            <button className={`sideBarButton ${props.option1}`} onClick={inicio}> Inicio </button>
            <button className={`sideBarButton ${props.option2}`} onClick={perfil}> <HiUser /> Perfil </button>
            <button className={`sideBarButton ${props.option3}`} onClick={cadastro}> <FaPaw /> Cadastro </button>
            <button className="returnButton" onClick={logout}> <FaArrowLeft /> Sair </button>
            {localStorage.getItem("username").endsWith("admin") ? <button className={`sideBarButton ${props.option4}`} onClick={admin}> <FaCog /> Admin </button> : <></>}
        </div>
    )
}

export default SideBar;