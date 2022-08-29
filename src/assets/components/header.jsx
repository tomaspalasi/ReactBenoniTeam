import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBackground">
                <div className="container-fluid">
                    <a href="#">
                        <img className="logoNav"src="benoni.png" alt="logoBenoni"/>
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
                            <a className="nav-link" href="#">
                                CARRITO
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
