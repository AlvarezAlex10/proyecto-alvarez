import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';


function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
               <a href="#">alex</a>
               <a href="#">leandro</a>
               <a href="#">alvarez</a>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;