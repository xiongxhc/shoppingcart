import React from 'react';
import './index.scss';
import Title from './Title.js'

const Header = () => {
    return ( 
        <header className="header">
            <Title text={"EStore"}/>
        </header>
     );
}
 
export default Header;