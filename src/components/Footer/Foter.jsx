import React from "react";
import LogoTJP from './img/tjp-logo.png'
import './css/footer.css'

const Footer = () => {
    return(
        <div>
            <hr />
            <div className="contenedorLogo"><img className="logoTJP" src={LogoTJP} alt="logoTJP"/></div>
        </div>
    )
}

export default Footer;