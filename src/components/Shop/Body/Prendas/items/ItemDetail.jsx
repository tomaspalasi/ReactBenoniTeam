import React from "react";
import ItemCount from "./ItemCount";
import "../css/prendas.css";
import "../css/boton.css";

const ItemDetail = (dtl) => {

  return ( 
    <div className="itemCount" key={dtl.dtl.id}>
      <div className="prendaDetail">
        <div className="remerasBox">
          <div id="loading">
            <div className="lds-ringDetalle">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <figure id="productos">
            <img className="remerasBenoniDetail" src={dtl.dtl.img1} alt="remeraImg" />
            <img className="remerasBenoniDetail" src={dtl.dtl.img2} alt="remeraImg" />
          </figure>
        </div>
        <h3>{dtl.dtl.nombre}</h3>
        <h4>${dtl.dtl.precio}</h4>
        <h4>Tamaño: {dtl.dtl.size}</h4>
        <ItemCount stock={dtl.dtl.stock} initial={0} onAdd={0} />
      </div>
    </div>
  );
};

export default ItemDetail;
