import React from "react";
import './css/bodyIndex.css'
import Logo from '../../Header/img/benoni.png'
import BIron from '../BodyIndex/img/black_iron.png'
import Dickens from '../BodyIndex/img/dickens.png'
import FFitness from '../BodyIndex/img/full_fitness.png'
import Gerseg from '../BodyIndex/img/gerseg.png'


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
                    <hr />
                    <h4>NUESTROS SPONSORS</h4>
                        <div className="sponsors">
                            <img className="logoSponsors" src={BIron} alt="logoBIron"/>
                            <img className="logoSponsors"src={Gerseg} alt="logoBIron"/>
                            <img className="logoSponsors"src={Dickens} alt="logoBIron"/>
                            <img className="logoSponsorsFf"src={FFitness} alt="logoBIron"/>
                        </div>
                    <hr />
                    <div className="contLogoBodyIndex">
                        <img className="logoBodyIndex"src={Logo} alt="logoBenoni"/>
                    </div>
                </div>
            </div>
        )
}

export default BodyIndex;