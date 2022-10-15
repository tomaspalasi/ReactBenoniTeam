import React, { useContext} from "react";
import Search from '../img/search.svg'
import Remove from '../img/remove.svg'
import { CartContext } from "../CartContext";
import { useRef } from "react";
import '../css/cart.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import CartItems from "./CartItems"
import { Link } from "react-router-dom";

const BodyCart = () => {
    const {setCarrito, carrito} = useContext(CartContext)

    const inputId = useRef(null);

    function isInCartId () {
        const idBuscado = inputId.current.value.toUpperCase()
        if (idBuscado === "DAVAI"){
            let check = carrito.some(remera => remera.nombre==="DAVAI")
            if (check){
                let prenda = carrito.find(r => r.nombre ==="DAVAI")
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
        } else if (idBuscado === "DAVAI!!"){
            let check = carrito.some(remera => remera.nombre==="DAVAI!!")
            if (check){
                let prenda = carrito.find(r => r.nombre === "DAVAI!!")
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
        }else if (idBuscado === "BENONI"){
            let check = carrito.some(remera => remera.nombre==="BENONI")
            if (check){
                let prenda = carrito.find(r => r.nombre === "BENONI")
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
        else if (idBuscado === "BIELAS"){
            let check = carrito.some(remera => remera.nombre==="BIELAS")
            if (check){
                let prenda = carrito.find(r => r.nombre === "BIELAS")
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
        }else if (idBuscado === "MERENGUITOS"){
            let check = carrito.some(remera => remera.nombre==="MERENGUITOS")
            if (check){
                let prenda = carrito.find(r => r.nombre === "MERENGUITOS")
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
                title: "¡El nombre ingresado, no corresponde a un producto!",
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
        const idRemove = removeId.current.value.toUpperCase()
        if (idRemove === "DAVAI"){
            const remove = carrito.find(r => r.nombre === "DAVAI")
            if (remove){
                const removed = carrito.filter(f => f.nombre !== "DAVAI")
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
        } else if (idRemove === "DAVAI!!"){
            const remove = carrito.find(r => r.nombre ==="DAVAI!!")
            if (remove){
                const removed = carrito.filter(f => f.nombre !=="DAVAI!!")
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
        }else if (idRemove === "BENONI"){
            const remove = carrito.find(r => r.nombre === "BENONI")
            if (remove){
                const removed = carrito.filter(f => f.nombre !== "BENONI")
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
        }else if (idRemove === "BIELAS"){
            const remove = carrito.find(r => r.nombre === "BIELAS")
            if (remove){
                const removed = carrito.filter(f => f.nombre !== "BIELAS")
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
        }else if (idRemove === "MERENGUITOS"){
            const remove = carrito.find(r => r.nombre === "MERENGUITOS")
            if (remove){
                const removed = carrito.filter(f => f.nombre !== "MERENGUITOS")
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
            console.log ("No se encuentra el producto buscado")
        )
    }

    console.log(carrito)

    const precioTotal = () =>{
        return carrito.reduce((acumulador,elem) => acumulador + elem.precio * elem.cantidad, 0);
    }

    return (
    <div>
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
                                        talle={prenda.talle}
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
            <p className="ivaCart">*IVA no incluído</p>
        </div>
        <hr />
        <div id="searchRemove">
            <div className="searchID">
                <h2>¿Querés saber si una remera se encuentra en tu carrito?</h2>
                    <input ref={inputId} type="text" placeholder="Nombre del producto a buscar" id="lookForID"/>
                    <button className="carritoTrash" onClick={isInCartId}>
                        <img className='logoTrash' src={Search} alt="searchCan"/>
                    </button>
            </div>
            <div className="idRemove">
                <h2>¿Querés eliminar un item de tu carrito?</h2>
                    <input ref={removeId} type="text" placeholder="Nombre del producto a borrar" id="removeID"/>
                    <button className='carritoTrash' type='button'tittle='RemoveCarrito' onClick={removeItemId}>
                        <img className='logoTrash' src={Remove} alt="removeCan" />
                    </button>
            </div>
        </div>
        <hr />
        <div className="btnCheckOut">
            <Link to={"/checkout/"} className="btnFinCompra" id="checkOutContinue">CHECK OUT</Link>
        </div>
    </div>
    )
}

export default BodyCart;