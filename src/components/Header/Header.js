import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="" />
            <nav className='navbar'>
                <a href="/home">Home</a>
                <a href="/order review">Order Review</a>
                <a href="/manage inventory here">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;