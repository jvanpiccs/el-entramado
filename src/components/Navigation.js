import React from "react"
import { Breadcrumb } from 'semantic-ui-react';


function Navigation(props) {
    const sections = [
        { key: 'Home', content: 'Inicio', link: true },
        { key: 'Store', content: 'Store', link: true },
        { key: 'Shirt', content: 'T-Shirt', active: true },
    ]
    return (
        <div>
            <Breadcrumb icon='right angle' sections={sections} />
        </div>
    );
}

export default Navigation;