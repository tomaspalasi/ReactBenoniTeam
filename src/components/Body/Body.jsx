import React from "react";
import PrendaDetailContainer from "./Prendas/containers/PrendaDetailContainer";
import PrendaListContainer from './Prendas/containers/PrendaListContainer';


const Body = () => {
    let titulo = "BENONI TEAM - C.E.A.R.D.";
    let descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";

    return(
        <div className= "contenedor">
        <div className="contenido">
          <h1 className="titulo">{titulo}</h1>
          <p className="descripcion">{descripcion}</p>
          <ul>
            <PrendaListContainer />
            <PrendaDetailContainer />
          </ul>
        </div>
      </div>
    )
}

export default Body;