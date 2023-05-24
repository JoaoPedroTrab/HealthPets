import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CalendarioSubPage() {
    const { data } = useParams();

    return (
        <div className='menuContainer'>
           teste SubPageCalendario
        </div>
    )

}

export default CalendarioSubPage;