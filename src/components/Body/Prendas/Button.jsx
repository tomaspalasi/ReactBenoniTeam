import React,{ useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

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

    let stock= 20;
    let [cantidad, setCantidad] = useState(0);;
    let cantidadRemeras = cantidad;
    
    return (
        <div>
            <input type="button" value="+" onClick={() => {
                if (cantidad !== stock) {setCantidad (cantidad + 1)}
            }}/>
            <h4>{cantidadRemeras}</h4>
            <input type="button" value="-" onClick={() => {
                if (cantidad === 0) {cantidad = 0} else {setCantidad (cantidad - 1)}
            }}/>
            <div>
            <input type="button" value="Agregar al Carrito" onClick={AgregadoAlCarrito}/>
            </div>
        </div>
    )
}
export default SuperButton;