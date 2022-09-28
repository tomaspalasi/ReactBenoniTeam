import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import "../css/prendas.css";
import "../css/boton.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Cart/CartContext";


const ItemDetail = ({remera}) => {

  // const remera = productos.find((rem) => rem.id === id)

  setTimeout(() => {
    const loads = document.querySelectorAll("#loading");

    for (var i = 0; i < loads.length; i += 1) {
      loads[i].style.display = "none";
    }
  }, 500);

  setTimeout(() => {
    const prods = document.querySelectorAll("#productos");

    for (var i = 0; i < prods.length; i += 1) {
      prods[i].style.visibility = "visible";
    }
  }, 500);

  const {addItem} = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(remera, cantidad);
}

  return ( 
    <div className="itemCount" key={remera.id}>
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
          <div className="hoverDetail">
          <figure id="productos">
            <img className="remerasBenoniDetail" src={remera.img1} alt="remeraImg" />
          </figure>
          <figure>
            <img className="remerasBenoniDetail" src={remera.img2} alt="remeraImg" />
          </figure>
          </div>
        </div>
        <hr />
        <h3>{remera.nombre}</h3>
        <h4>${remera.precio}</h4>
        <h4>Tamaño: {remera.tamaño}</h4>
        <ItemCount stock={remera.stock} initial={0} onAdd={onAdd} />
        <Link to={"/cart/"} className="linkFinCompra">
          <button className="btnFinCompra">FINALIZAR COMPRA</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
