import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

const CarritoApp = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const key = Math.floor(Math.random()*1000)

    const addItem = (remera, cantidad, talle) => {

        const idNew = remera.id + key

        if (isKeyInCart(remera.id) && isTalleInCart(talle)){
            let producto = carrito.find(prod => prod.talle === talle);
            carrito[carrito.indexOf(producto)].cantidad += cantidad;
            setCarrito([...carrito]);
        } else{
            setCarrito([...carrito, {...remera, cantidad:cantidad, talle:talle, id: idNew, key: remera.id}])
        }
        console.log(carrito)
    }

    const isInCart = (id) => {
        return carrito.some(remera => remera.id===id)
    }

    const isKeyInCart = (key) => {
        return carrito.some(remera => remera.key===key)
    }

    const isTalleInCart = (talle) => {
        return carrito.some(remera => remera.talle===talle)
    }

    const clear = () => {
        setCarrito([])
    }

    const removeItem = (id) => {
        return carrito.find(remera => remera.id===id)
        }

    const cartTotal = () => {
        return carrito.reduce ((total, item) => total+=item.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{addItem, isInCart, clear, cartTotal,removeItem, carrito, setCarrito}}>{children}</CartContext.Provider>
    )
}

export default CarritoApp;
