import React from "react";
import './css/bodyIndex.css'
import Logo from '../../Header/img/benoni.png'


const BodyIndex = () => {
 
        let titulo = "BENONI TEAM - C.E.A.R.D.";
        let descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";
    
        return(
            <div className= "contenedorIndex">
                <div>
                    <div className="textoIndex">
                        <h1 className="tituloIndex">{titulo}</h1>
                        <h3 className="descripcionIndex">{descripcion}</h3>
                    </div>
                    <div className="contLogoBodyIndex">
                        <img className="logoBodyIndex"src={Logo} alt="logoBenoni"/>
                    </div>
                </div>
            </div>
        )
}

export default BodyIndex;