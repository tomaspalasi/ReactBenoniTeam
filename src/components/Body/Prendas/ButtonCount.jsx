import React,{ useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './css/boton.css'

function AgregadoAlCarrito (){
    return (
        Swal.fire ({
            title: "¡Producto agregado al carrito!",
            position: "top-end",
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: "black",
            background: "#f9333b",
        })
    )
}

const SuperButton = () => {

    let stock= 15;
    let [cantidad, setCantidad] = useState(0);;
    let cantidadRemeras = cantidad;
    
    return (
        <div>
            <div className='itemCount'> 
            <input className='btnCount' type="button" value="+" onClick={() => {
                if (cantidad !== stock) {setCantidad (cantidad + 1)}
            }}/>
            <h4>{cantidadRemeras}</h4>
            <input className='btnCount'type="button" value="-" onClick={() => {
                if (cantidad === 0) {cantidad = 0} else {setCantidad (cantidad - 1)}
            }}/>
            </div>
            <div className='itemCount'>
            <input className='btnCompra' type="button" value="Agregar al Carrito" onClick={AgregadoAlCarrito}/>
            </div>
        </div>
    )
}
export default SuperButton;