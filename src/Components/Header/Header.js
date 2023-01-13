import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/Orde">Order Review</a>
                <a href="/Orde">Manage Inventory</a>
                <a href="/Orde">Log In</a>
            </div>
        </nav>
    );
};

export default Header;