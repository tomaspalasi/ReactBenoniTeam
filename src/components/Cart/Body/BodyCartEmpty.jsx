import React from "react";
import Cart from '../img/carritoVacio.png'
import '../css/cart.css'
import { Link } from "react-router-dom";

const BodyCartEmpty = () => {
    return (
        <div>
            <div className="carritoEmptyText">
                <h1>¡Tu carrito se encuentra vacio!</h1>
                <h3>¡Corré a buscar tu merch!</h3>
            </div>
            <Link to={"/shop/"} className="carritoEmpty">
                <img src={Cart} alt="carrito" className="carritoVacio" />
            </Link>
        </div>
    )
}
export default BodyCartEmpty;