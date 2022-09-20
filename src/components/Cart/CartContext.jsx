import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

const CarritoApp = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (remera, cantidad) => {
        if (isInCart(remera.id)){
            let producto = carrito.find(prod => prod.id === remera.id);
            carrito[carrito.indexOf(producto)].cantidad +=cantidad;
            setCarrito([...carrito]);
        } else{
            setCarrito([...carrito, {...remera, cantidad:cantidad}])
        }
        console.log(carrito)
    }

    const isInCart = (id) => {
        return carrito.some(remera => remera.id===id)
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
