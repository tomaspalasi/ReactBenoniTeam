import React from "react";
import "../css/prendas.css";
import "../css/boton.css";
// import PrendaDetail from "../productos/PrendaDetail";



const Prenda = (item) => {
  setTimeout(() => {
    const loads = document.querySelectorAll("#loading");

    for (var i = 0; i < loads.length; i += 1) {
      loads[i].style.display = "none";
    }
  }, 1100);

  setTimeout(() => {
    const prods = document.querySelectorAll("#productos");

    for (var i = 0; i < prods.length; i += 1) {
      prods[i].style.visibility = "visible";
    }
  }, 1150);

  

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
        <figure id="productos">
          <img className="remerasBenoni" src={item.img2} alt="remeraImg" />
        </figure>
      </div>
      <h3 className="tituloRemera">{item.nombre}</h3>
      {/* <PrendaDetail /> */}
      <div className="itemCount">
        <input className="btnDetalle" type="button" value="Ver detalle del Producto" key={item.id}/>
      </div>
    </div>
  );
};

export default Prenda;
