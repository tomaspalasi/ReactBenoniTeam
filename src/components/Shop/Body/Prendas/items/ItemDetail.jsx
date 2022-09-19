import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import "../css/prendas.css";
import "../css/boton.css";
import { Link, useParams } from "react-router-dom";
import { remeras } from '../../../../../mock/remeras'
import { CartContext } from "../../../../Cart/CartContext";

const ItemDetail = () => {
  const {id} = useParams();
  let idRemera = parseInt(id)
  const remera = remeras.find((rem) => rem.id === idRemera)

  setTimeout(() => {
    const loads = document.querySelectorAll("#loading");

    for (var i = 0; i < loads.length; i += 1) {
      loads[i].style.display = "none";
    }
  }, 2000);

  setTimeout(() => {
    const prods = document.querySelectorAll("#productos");

    for (var i = 0; i < prods.length; i += 1) {
      prods[i].style.visibility = "visible";
    }
  }, 2000);

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
          <figure id="productos">
            <img className="remerasBenoniDetail" src={remera.img1} alt="remeraImg" />
            <img className="remerasBenoniDetail" src={remera.img2} alt="remeraImg" />
          </figure>
        </div>
        <h3>{remera.nombre}</h3>
        <h4>${remera.precio}</h4>
        <h4>Tamaño: {remera.size}</h4>
        <ItemCount stock={remera.stock} initial={0} onAdd={onAdd} />
        <Link to={"/cart/"} className="linkFinCompra">
          <button className="btnFinCompra">FINALIZAR COMPRA</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
