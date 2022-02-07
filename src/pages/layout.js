import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

function Layout(props) {
    let [active, setActive] = React.useState();
    {/* <nav className='Nav'>
        <Link to='/'>Entramado</Link>
        <Link to='/'>Inicio</Link>
        <Link to='/about'>Quienes somos</Link>
    </nav> */}
    const links = [
        {
            name: 'Inicio',
            link: '/'
        }, {
            name: 'Quienes somos',
            link: '/about'
        }
    ]
    return (
        <Menu className={'Nav'} fixed='top' inverted stackable borderless>
            <Container>
                <Menu.Header><Link to='/'>Entramado Social</Link></Menu.Header>
                <Menu.Item><Link to='/'>Inicio</Link></Menu.Item>
                <Menu.Item><Link to='/about'>Nosotros</Link></Menu.Item>
            </Container>
        </Menu>
    );
};

export default Layout;