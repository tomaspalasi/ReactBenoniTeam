import React, { useContext } from "react";
import "../../Shop/Body/Prendas/css/prendas.css";
import "../../Shop/Body/Prendas/css/boton.css";
import { CartContext } from "../CartContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "../css/cart.css";
import Remove from "../img/remove.svg";

const CheckOutItems = (prendas) => {
  const { setCarrito, carrito } = useContext(CartContext);

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

  const eliminarPrenda = () => {
    const remove = carrito.filter((f) => f.id !== prendas.id);
    Swal.fire({
      title: "¡Se borró del carrito la remera " + prendas.nombre + "!",
      position: "top",
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      color: "black",
      background: "grey",
    });
    console.log("Se borró del carrito la remera: " + prendas.nombre);
    setCarrito(remove);
  };

  return (
    <div>
      <div className="remerasBoxCheckOut">
        <div id="loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div id="boxCheckOut">
          <div id="productosCheckOut" className="contenidoBox">
          <img
              className="remerasBenoniCheckOut"
              src={prendas.img1}
              alt="remeraImg"
            />
            <img
              className="remerasBenoniCheckOut"
              src={prendas.img2}
              alt="remeraImg"
            />
          </div>
          <div className="contenidoBox">
            <h3 className="tituloRemeraCheckOut">{prendas.nombre}</h3>
          </div>
          <div className="contenidoBox">
            <p className="tituloRemeraCheckOut">{prendas.size}</p>
          </div>
          <div className="contenidoBox">
            <p className="tituloRemeraCheckOut">${prendas.precio} x {prendas.cantidad}</p>
          </div>
          <div className="contenidoBox">
            <p className="tituloRemeraCheckOut" id="totalPrice">
              Total: ${prendas.cantidad * prendas.precio}
            </p>
          </div>
          <div className="btnEliminarPrenda">
            <button onClick={eliminarPrenda}>
              <img className="logoTrashCheckOut" src={Remove} alt="removeCan" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
