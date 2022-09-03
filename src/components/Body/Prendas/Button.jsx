import React from 'react'
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
            color: "whitesmoke",
            background: "rgb(32, 32, 32)",
        })
    )
}

const SuperButton = () => {
    return (
        <input type="button" value="Agregar al Carrito" onClick={AgregadoAlCarrito}/>
    )
}
export default SuperButton;