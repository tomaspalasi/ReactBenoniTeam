import React from "react";
import '../css/cart.css'
import Logo from '../../Header/img/benoni.png'
import Header from "../../Header/Header";
import Footer from "../../Footer/Foter";

const Success = () => {
 
        let titulo = "¡Muchas gracias por realizar tu pedido";
        let descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";
    
        return(
            <div>
                <Header/>
                <div className= "contenedorIndex">
                    <div>
                        <div className="textoIndex">
                            <h1 className="tituloIndex">{titulo}</h1>
                                <div className="contLogoBodyIndex">
                                    <img className="logoBodyIndex"src={Logo} alt="logoBenoni"/>
                                </div>
                            <h3 className="descripcionIndex">{descripcion}</h3>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
}

export default Success;