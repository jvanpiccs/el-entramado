import React from 'react';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <nav className='Nav'>
            <Link to='/'>Entramado</Link>
            <Link to='/'>Inicio</Link>
            <Link to='/about'>Quienes somos</Link>
        </nav>
    );
};

export default Layout;