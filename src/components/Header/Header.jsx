import React from "react";
import Logo from '../../components/Header/img/benoni.png'
import Carrito from "./Carrito";


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBackground">
                <div className="container-fluid">
                    <p>
                        <img className="logoNav"src={Logo} alt="logoBenoni"/>
                    </p>
                    <p className="navbar-brand">
                        BENONI TEAM MERCH
                    </p>
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
                            <p className="nav-link active" aria-current="page">
                               SHOP
                            </p>
                            <Carrito/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
