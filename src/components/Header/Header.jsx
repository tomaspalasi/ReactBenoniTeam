import React from "react";
import Logo from '../../components/Header/img/benoni.png'
import Cart from '../../components/Header/img/carritoVacio.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBackground">
                <div className="container-fluid">
                    <a href="#">
                        <img className="logoNav"src={Logo} alt="logoBenoni"/>
                    </a>
                    <a className="navbar-brand" href="#">
                        BENONI TEAM MERCH
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">
                               SHOP
                            </a>
                            <a href="#">
                            <img className="logoCart"src={Cart} alt="logoCarrito"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
