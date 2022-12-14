import React from "react";
import "../css/prendas.css";
import "../css/boton.css";
import {Link} from 'react-router-dom'

const Item = (prendas) => {
  setTimeout(() => {
    const loads = document.querySelectorAll("#loading");

    for (var i = 0; i < loads.length; i += 1) {
      loads[i].style.display = "none";
    }
  }, 100);

  setTimeout(() => {
    const prods = document.querySelectorAll("#productos");

    for (var i = 0; i < prods.length; i += 1) {
      prods[i].style.visibility = "visible";
    }
  }, 100);

  return (
    <div>
      <div className="remerasBox">
        <div id="loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div id="productos" className="hoverDetail">
          <figure>
            <img className="remerasBenoni" src={prendas.img2} alt="remeraImg" />
          </figure>
        </div>
      </div>
      <h3 className="tituloRemera">{prendas.nombre}</h3>
      <p className="tituloRemera">{prendas.tamaño}</p>
      <div className="itemCount">
        <Link to={"/shop/prendadetalle/" + prendas.id} className="linkDetalle">
          <button className="btnDetalle">VER DETALLE</button>
        </Link>
      </div> 
    </div>
  );
};

export default Item;
