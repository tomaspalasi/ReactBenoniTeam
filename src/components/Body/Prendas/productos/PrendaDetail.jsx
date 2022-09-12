import React from "react";
import ItemCount from "./PrendasCount";
import { remeras } from "../../../../mock/remeras";
import "../css/prendas.css";
import "../css/boton.css";

const PrendaDetail = () => {
  
  const remeraDetalle = remeras.find(p => p.id === 5)
  

  return ( 
    <div className="itemCount" key={remeraDetalle.id}>
      <div className="prendaDetail">
        <div className="remerasBox">
          <div id="loading">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <figure id="productos">
            <img className="remerasBenoniDetail" src={remeraDetalle.img1} alt="remeraImg" />
            <img className="remerasBenoniDetail" src={remeraDetalle.img2} alt="remeraImg" />
          </figure>
        </div>
        <h3>{remeraDetalle.nombre}</h3>
        <h4>${remeraDetalle.precio}</h4>
        <h4>Tamaño: {remeraDetalle.tamaño}</h4>
        <ItemCount stock={remeraDetalle.stock} initial={0} onAdd={0} />
      </div>
    </div>
  );
};

export default PrendaDetail;
