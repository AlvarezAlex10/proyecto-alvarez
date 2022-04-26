import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <h1 className='logo'>Duopack</h1>
            <ul className='nav'>
               <a href="#">alex</a>
               <a href="#">leandro</a>
               <a href="#">alvarez</a>
            </ul>
        </div>
    );
}

export default NavBar;