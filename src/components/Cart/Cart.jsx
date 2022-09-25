import React, { useContext } from "react";
import Header from '../Header/Header'
import BodyCart from './Body/BodyCart'
import Footer from '../Footer/Foter'
import { CartContext } from "./CartContext";
import BodyCartEmpty from "./Body/BodyCartEmpty";

const Cart = () => {
    const {carrito} = useContext(CartContext)
 
    return (
    <div>
        <Header/>
            {carrito.length <= 0 ? <BodyCartEmpty/> : <BodyCart/>}
        <Footer/>
    </div>
    )
}

export default Cart;