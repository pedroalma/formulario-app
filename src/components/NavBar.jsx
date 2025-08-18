import React from 'react';
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Home
                </a>
            </div>
            <div className="nav-certer">
                <ul className="nav-links">
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/sobre-nos">Sobre-nos</a></li>
                    <li><a href="/contato">Contato</a></li> 
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/cart" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                </a>
                <a href="/" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>

            </div>
        </nav>
    );
}
export default NavBar;