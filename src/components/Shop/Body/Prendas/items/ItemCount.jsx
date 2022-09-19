import React,{ useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import '../css/boton.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState (initial);
    const [itemStock, setItemStock] = useState (stock);


    const restarCantidad =(valor) => {
        if (valor > -1) {
            setCantidad(valor)
        }
    }

    const sumarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCantidad (valor)
        }
    }

    const agregarItems = () => {
        if(cantidad <= itemStock) {
            onAdd(cantidad)
            setItemStock(itemStock - cantidad);
            setCantidad(itemStock - cantidad)
            Swal.fire ({
                title: "¡Agregaste " + cantidad + " productos al carrito!",
                position: "top-end",
                toast: true,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "black",
                background: "#f9333b",
            })
            console.log ("Quedan " + (itemStock - cantidad) + " remeras")
        }
    }

    useEffect(()=>{
        setItemStock(stock)
    },[stock]);

    return (
        <div>
            <div>
                <h4>Stock disponible: {itemStock - cantidad}</h4>
            </div>
            <div className='itemCount'>
                <input className='btnCount' type="button" value="-" onClick={() => {
                    restarCantidad(cantidad - 1)}}/>
                <h5 className='textoCant'>{cantidad}</h5>
                <input className='btnCount' type="button" value="+" onClick={() => {
                    sumarCantidad(cantidad + 1)}}/>
            </div>
            <div className='itemCount'>
                <input className='btnCompra' type="button" value="AGREGAR AL CARRITO" onClick={()=>{agregarItems()}}/>
            </div>
        </div>
    )
}

export default ItemCount;
