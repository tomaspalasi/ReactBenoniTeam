import React, { useContext } from "react";
import "../../Shop/Body/Prendas/css/prendas.css";
import "../../Shop/Body/Prendas/css/boton.css";
import {Link} from 'react-router-dom'
import { CartContext } from "../CartContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import '../css/cart.css'

const CartItems = (prendas) => {

    const {setCarrito, carrito} = useContext(CartContext)

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

  const eliminarPrenda = () =>{
    const remove = carrito.filter(f => f.id !== prendas.id)
    Swal.fire ({
        title: "¡Se borró del carrito la remera "+ prendas.nombre +"!",
        position: "top",
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: "black",
        background: "grey",
    })
    console.log ("Se borró del carrito la remera: " + prendas.nombre)
    setCarrito(remove)
  }

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
        <div id="productos">
          <img className="remerasBenoni" src={prendas.img2} alt="remeraImg" />
        </div>
      </div>
      <h3 className="tituloRemera">{prendas.nombre}</h3>
      <p className="tituloRemera">{prendas.size}</p>
      <p className="tituloRemera">${prendas.precio}</p>
      <p className="tituloRemera">Cantidad: {prendas.cantidad}</p>
      <p className="tituloRemera" id="totalPrice">Total: ${prendas.cantidad * prendas.precio}</p>
      <div className="itemCount">
        <Link to={"/shop/prendadetalle/" + prendas.id} className="linkDetalle">
          <button className="btnDetalle">VER DETALLE</button>
        </Link>
      </div>
      <div className="btnEliminar">
        <button className="btnDetalle" onClick={eliminarPrenda}>ELIMINAR PRODUCTO</button>
      </div> 
    </div>
  );
};

export default CartItems;
