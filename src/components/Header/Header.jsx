import React from "react";
import Logo from '../../components/Header/img/benoni.png'
import Carrito from "./Carrito";
import './css/header.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBackground">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <img className="logoNav"src={Logo} alt="logoBenoni"/>
                    </Link>
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
                            <Link className="nav-link" to={"/"} aria-current="page">
                               INICIO
                            </Link>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={"/shop/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SHOP
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/shop/"}>INICIO</Link></li>
                                    <li><Link className="dropdown-item" to={"/shop/categoria/Niño"}>NIÑOS</Link></li>
                                    <li><Link className="dropdown-item" to={"/shop/categoria/Adulto"}>ADULTOS</Link></li>
                                </ul>
                            </li>
                            <Link className="nav-link" to={"/carrito/"}>
                                <Carrito/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
