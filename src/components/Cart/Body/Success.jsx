import React from "react";
import '../css/cart.css'
import Logo from '../../Header/img/benoni.png'
import Header from "../../Header/Header";
import Footer from "../../Footer/Foter";



const Success = ({id}) => {
    
        let titulo = '¡Muchas gracias por realizar tu pedido';
        let descripcion = "Pronto te estará llegando un email con los datos de entrega.";
        let subDescripcion = "Tu codigo de seguimiento es: " + id;
        return(
            <div>
                    <div className= "contenedorIndex">
                        <div>
                            <div className="textoIndex">
                                <h1 className="tituloIndex">{titulo}</h1>
                                    <div className="contLogoBodyIndex">
                                        <img className="logoBodyIndex"src={Logo} alt="logoBenoni"/>
                                    </div>
                                <h3 className="descripcionIndex">{descripcion}</h3>
                                <h3 className="descripcionIndex">{subDescripcion}</h3>
                            </div>
                        </div>
                    </div>
            </div>
        )
}

export default Success;