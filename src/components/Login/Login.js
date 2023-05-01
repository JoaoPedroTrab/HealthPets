import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    return (
        <div className='login'>

        </div>
    )
}

export default Login;