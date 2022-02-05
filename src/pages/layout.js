import React from 'react';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <nav className='Nav'>
            <ul>
                <li><Link to='/'>Entramado</Link></li>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/about'>Quienes somos</Link></li>
            </ul>
        </nav>
    );
};

export default Layout;