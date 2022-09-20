import React, { useContext } from "react";
import Search from '../img/search.svg'
import Remove from '../img/remove.svg'
import { CartContext } from "../CartContext";
import { useRef } from "react";
import '../css/cart.css'

const BodyCart = () => {
    const {setCarrito, carrito} = useContext(CartContext)

    const inputId = useRef(null);

    function isInCartId () {
        const idBuscado = inputId.current.value
        if (idBuscado === "1"){
            let check = carrito.some(remera => remera.id===1)
            console.log ("El resultado para el id buscado es: " + check)
        } else if (idBuscado === "2"){
            let check = carrito.some(remera => remera.id===2)
            console.log ("El resultado para el id buscado es: " + check)
        }else if (idBuscado === "3"){
            let check = carrito.some(remera => remera.id===3)
            console.log ("El resultado para el id buscado es: " + check)
        }
        else if (idBuscado === "4"){
            let check = carrito.some(remera => remera.id===4)
            console.log ("El resultado para el id buscado es: " + check)
        }else if (idBuscado === "5"){
            let check = carrito.some(remera => remera.id===5)
            console.log ("El resultado para el id buscado es: " + check)
        }
        else (
            console.log ("No se encuentra el ID buscado")
        )
    }

    const removeId = useRef(null);

    function removeItemId(){
        const idRemove = removeId.current.value
        if (idRemove === "1"){
            const remove = carrito.find(r => r.id === 1)
            if (remove){
                const removed = carrito.filter(f => f.id !== 1)
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        } else if (idRemove === "2"){
            const remove = carrito.find(r => r.id === 2)
            if (remove){
                const removed = carrito.filter(f => f.id !== 2)
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }else if (idRemove === "3"){
            const remove = carrito.find(r => r.id === 3)
            if (remove){
                const removed = carrito.filter(f => f.id !== 3)
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }else if (idRemove === "4"){
            const remove = carrito.find(r => r.id === 4)
            if (remove){
                const removed = carrito.filter(f => f.id !== 4)
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }else if (idRemove === "5"){
            const remove = carrito.find(r => r.id === 5)
            if (remove){
                const removed = carrito.filter(f => f.id !== 5)
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }
        else (
            console.log ("No se encuentra el ID buscado")
        )
    }

    console.log(carrito)

    return (
    <div>
        <div className="searchID">
            <h2>¿Querés saber si un ID se encuentra en tu carrito?</h2>
                <input ref={inputId} type="text" placeholder="ID del producto a buscar" id="lookForID"/>
                <button className="carritoTrash" onClick={isInCartId}>
                    <img className='logoTrash' src={Search} alt="searchCan"/>
                </button>
        </div>
        <div className="idRemove">
            <h2>¿Querés eliminar un item de tu carrito?</h2>
                <input ref={removeId} type="text" placeholder="ID del producto a borrar" id="removeID"/>
                <button className='carritoTrash' type='button'tittle='RemoveCarrito' onClick={removeItemId}>
                    <img className='logoTrash' src={Remove} alt="removeCan" />
                </button>
        </div>
    </div>
    )
}

export default BodyCart;