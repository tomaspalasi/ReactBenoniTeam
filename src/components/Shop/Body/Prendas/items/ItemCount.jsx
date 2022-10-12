import React,{ useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import '../css/boton.css'

const ItemCount = ({stock, initial, onAdd, remera}) => {
    const [cantidad, setCantidad] = useState (initial);
    const [itemStock, setItemStock] = useState (stock);
    const [talle, setTalle] = useState ('');


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
        if(cantidad === 0) {
            Swal.fire ({
                title: "¡Debes agregar productos al carrito!",
                position: "top",
                toast: true,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                color: "black",
                background: "grey",
            })
            console.log ("Quedan " + (itemStock - cantidad) + " remeras")
        } else if (cantidad <= itemStock) {
            onAdd(cantidad)
            setItemStock(itemStock - cantidad);
            setCantidad(0)
            Swal.fire ({
                title: "¡Agregaste " + cantidad + " productos, talle " + talle + ", al carrito!",
                position: "top",
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

    const talleSelect = (e) => {
        setTalle(e.target.value)
    }

    return (
        <div>
            <div>
                <h4>Talles disponibles:</h4>
                    <button onClick={talleSelect} type="button" id='botonTalle' className="btn btn-primary" value={remera.talle1}>{remera.talle1}</button>
                    <button onClick={talleSelect} type="button" id='botonTalle' className="btn btn-primary" value={remera.talle2}>{remera.talle2}</button>
                    <button onClick={talleSelect} type="button" id='botonTalle' className="btn btn-primary botontalle" value={remera.talle3}>{remera.talle3}</button>
            </div>
            <div>
                <h4>Stock disponible: {itemStock}</h4>
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
