import React from "react";

const Body = () => {
    let logo = "benoni.png";
    let nombreLogo = "logoBenoni"
    let titulo = "BENONI TEAM - C.E.A.R.D.";
    let descripcion = "Bienvenidos a BENONI. Acá vas a poder explotar todo tu potencial y vos vas a decidir que orientación le vas a dar a tu planificación.";

    return(
        <div className= "contenedor">
        <div className="logo-benoni">
          <img src= {logo} alt={nombreLogo} className="logo"/>
        </div>
        <div className="contenido">
          <h1 className="titulo">{titulo}</h1>
          <p className="descripcion">{descripcion}</p>
        </div>
      </div>
    )
}

export default Body;