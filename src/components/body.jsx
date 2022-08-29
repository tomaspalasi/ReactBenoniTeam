import React from "react";
import Remera from './Productos';

const Body = () => {
    let titulo = "BENONI TEAM - C.E.A.R.D.";
    let descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";
    
    const prendas = ["BENONI", "BIELAS", "DAVAI", "DAVAI!!", "MERENGUITOS"];

    const remera = prendas.map(remera => (
      <Remera nombre={remera}/>
    ))

    return(
        <div className= "contenedor">
        <div className="contenido">
          <h1 className="titulo">{titulo}</h1>
          <p className="descripcion">{descripcion}</p>
          <ul>
            {remera}
          </ul>
        </div>
      </div>
    )
}

export default Body;