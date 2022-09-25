import React, { useContext} from "react";
import Search from '../img/search.svg'
import Remove from '../img/remove.svg'
import { CartContext } from "../CartContext";
import { useRef } from "react";
import '../css/cart.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import CartItems from "./CartItems"

const BodyCart = () => {
    const {setCarrito, carrito} = useContext(CartContext)

    const inputId = useRef(null);

    function isInCartId () {
        const idBuscado = inputId.current.value
        if (idBuscado === "1"){
            let check = carrito.some(remera => remera.id===1)
            if (check){
                let prenda = carrito.find(r => r.id === 1)
                Swal.fire ({
                    title: "¡Se encuentra la remera "+ prenda.nombre+ " en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#2c8b5f",
                })
                console.log ("El resultado para el id buscado es: " + check)
            }else {
                Swal.fire ({
                    title: "¡No se encuentra la remera buscada en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#f9333b",
                })
            }
        } else if (idBuscado === "2"){
            let check = carrito.some(remera => remera.id===2)
            if (check){
                let prenda = carrito.find(r => r.id === 2)
                Swal.fire ({
                    title: "¡Se encuentra la remera "+ prenda.nombre+ " en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#2c8b5f",
                })
                console.log ("El resultado para el id buscado es: " + check)
            }else {
                Swal.fire ({
                    title: "¡No se encuentra la remera buscada en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#f9333b",
                })
            }
        }else if (idBuscado === "3"){
            let check = carrito.some(remera => remera.id===3)
            if (check){
                let prenda = carrito.find(r => r.id === 3)
                Swal.fire ({
                    title: "¡Se encuentra la remera "+ prenda.nombre+ " en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#2c8b5f",
                })
                console.log ("El resultado para el id buscado es: " + check)
            }else {
                Swal.fire ({
                    title: "¡No se encuentra la remera buscada en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#f9333b",
                })
            }
        }
        else if (idBuscado === "4"){
            let check = carrito.some(remera => remera.id===4)
            if (check){
                let prenda = carrito.find(r => r.id === 4)
                Swal.fire ({
                    title: "¡Se encuentra la remera "+ prenda.nombre+ " en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#2c8b5f",
                })
                console.log ("El resultado para el id buscado es: " + check)
            }else {
                Swal.fire ({
                    title: "¡No se encuentra la remera buscada en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#f9333b",
                })
            }
        }else if (idBuscado === "5"){
            let check = carrito.some(remera => remera.id===5)
            if (check){
                let prenda = carrito.find(r => r.id === 5)
                Swal.fire ({
                    title: "¡Se encuentra la remera "+ prenda.nombre+ " en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#2c8b5f",
                })
                console.log ("El resultado para el id buscado es: " + check)
            }else {
                Swal.fire ({
                    title: "¡No se encuentra la remera buscada en tu carrito!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "#f9333b",
                })
            }
        }
        else (
            Swal.fire ({
                title: "¡El ID buscado, no corresponde a un producto!",
                position: "top",
                toast: true,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "black",
                background: "#f9333b",
            })
        )
    }

    const removeId = useRef(null);

    function removeItemId(){
        const idRemove = removeId.current.value
        if (idRemove === "1"){
            const remove = carrito.find(r => r.id === 1)
            if (remove){
                const removed = carrito.filter(f => f.id !== 1)
                Swal.fire ({
                    title: "¡Se borró del carrito la remera "+ remove.nombre +"!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "grey",
                })
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        } else if (idRemove === "2"){
            const remove = carrito.find(r => r.id === 2)
            if (remove){
                const removed = carrito.filter(f => f.id !== 2)
                Swal.fire ({
                    title: "¡Se borró del carrito la remera "+ remove.nombre +"!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "grey",
                })
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }else if (idRemove === "3"){
            const remove = carrito.find(r => r.id === 3)
            if (remove){
                const removed = carrito.filter(f => f.id !== 3)
                Swal.fire ({
                    title: "¡Se borró del carrito la remera "+ remove.nombre +"!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "grey",
                })
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }else if (idRemove === "4"){
            const remove = carrito.find(r => r.id === 4)
            if (remove){
                const removed = carrito.filter(f => f.id !== 4)
                Swal.fire ({
                    title: "¡Se borró del carrito la remera "+ remove.nombre +"!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "grey",
                })
                console.log ("Se borró del carrito la remera: " + remove.nombre)
                setCarrito(removed)
            } else {
                console.log("No se encuentra la remera en el carrito")
            }
        }else if (idRemove === "5"){
            const remove = carrito.find(r => r.id === 5)
            if (remove){
                const removed = carrito.filter(f => f.id !== 5)
                Swal.fire ({
                    title: "¡Se borró del carrito la remera "+ remove.nombre +"!",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "black",
                    background: "grey",
                })
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

    const precioTotal = () =>{
        return carrito.reduce((acumulador,elem) => acumulador + elem.precio * elem.cantidad, 0);
    }

    const checkOut = () => {
        if (carrito.length <= 0) {
            Swal.fire({
                title: '¡Tu carrito se encuentra vacío!',
                text: 'Date una vuelta por nuestro Shop y adquirí nuevos productos',
                icon: 'info',
                color: "whitesmoke",
                background: "rgb(32, 32, 32)",
                confirmButtonColor: "#e0383f",
                }) 
        } else {
            Swal.fire({
                title: '¡Muchas gracias por adquirir nuestra merch!',
                text: 'Pronto te estará llegando un mail con los datos de envio.',
                icon: 'success',
                color: "whitesmoke",
                background: "rgb(32, 32, 32)",
                confirmButtonColor: "#e0383f",
                })
            setCarrito([])
        }
    }

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
        <div>
            <h2 className="tituloItemsCarrito">Actualmente tu carrito cuenta con los siguientes productos:</h2>
            <div className='boxRemeras'>
                {carrito.map(prenda => {
                    return (
                        <div className='boxPrenda' key={prenda.id}>
                                <div className='remera'>
                                    <CartItems
                                        id={prenda.id}
                                        img1={prenda.img1}
                                        img2={prenda.img2}
                                        nombre={prenda.nombre}
                                        precio={prenda.precio}
                                        stock={prenda.stock}
                                        size={prenda.size}
                                        cantidad={prenda.cantidad}
                                    />
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h2 className="tituloTotalCarrito">Total de tu carrito: ${precioTotal()}</h2>
        </div>
        <div className="btnCheckOut">
            <button className="btnFinCompra" onClick={checkOut}>CHECK OUT</button>
        </div>
    </div>
    )
}

export default BodyCart;