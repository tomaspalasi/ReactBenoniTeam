import React from "react";

const Body = () => {
    // let logo = "benoni.png";
    // let nombreLogo = "logoBenoni"
    let titulo = "BENONI TEAM - C.E.A.R.D.";
    let descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";

    return(
        <div className= "contenedor">
        {/* <div className="logo-benoni">
          <img src= {logo} alt={nombreLogo} className="logo"/>
        </div> */}
        <div className="contenido">
          <h1 className="titulo">{titulo}</h1>
          <p className="descripcion">{descripcion}</p>
        </div>
      </div>
    )
}

export default Body;