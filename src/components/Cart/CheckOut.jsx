import React, { useContext, useState } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Foter'
import { CartContext } from "./CartContext";
import CheckOutItems from "./Body/CheckOutItems"
import './css/cart.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { Link } from "react-router-dom";
import Success from "./Body/Success";
import Cart from '../Cart/img/carritoVacio.png'



const CheckOut = () => {
    
    const {carrito, clear} = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [pedidoId, setPedidoId] = useState("")
 
    const enviarPedido = () => {
        const buyer = {name: nombre, email: email, phone: telefono};
        const productos = [];
        carrito.forEach((item) =>{
            productos.push({id: item.id, title: item.nombre, price: item.precio})
        })
        const date = new Date();
        const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        
        const orden = {buyer: buyer, items: productos, date: now,total: precioTotal()*1.21}

        const db = getFirestore()
        const ordenCollection = collection (db, "pedidos");

        addDoc(ordenCollection, orden).then(({id}) => {
            setPedidoId(id);
            clear();
        });

        if (productos.length === 0){
            Swal.fire({
                title: '¡Carrito Vacío!',
                text: 'Tu carrito está vacío. ¡Corré a buscar nuestra merch!.',
                icon: 'error',
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
        }
    }

    let precioTotal = () =>{
        return carrito.reduce((acumulador,elem) => acumulador + elem.precio * elem.cantidad, 0);
    }

    return (
        <div>
        <Header/>
            {carrito.length > 0 ?
            <form id="formCheckout">
                <div>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombreInput" onInput={(e) => setNombre (e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="telefonoInput" onInput={(e) => setTelefono (e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="emailInput"  onInput={(e) => setEmail (e.target.value)}/>
                    </div>
                        <Link id="enviarPedido" className="btn btn-primary" onClick={enviarPedido} to="/success/">Enviar Pedido</Link>
                </div>
                <div id="carritoCheckOut">
                    {carrito.map(prenda => {
                        return (
                            <div className='boxPrenda' id="prendaCheckout" key={prenda.id}>
                                    <div className='remera'>
                                        <CheckOutItems
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
                <div>
                    <h3 className="tituloTotalCarrito" id="">Total de tu carrito: ${precioTotal()*1.21}</h3>
                    <p className="ivaCheckOut">*IVA incluído</p>
                </div>
                </div>
            </form>
            :
                <div>
                    <div className="carritoEmptyText">
                        <h1>¡Tu carrito se encuentra vacio!</h1>
                        <h3>¡Corré a buscar tu merch!</h3>
                    </div>
                    <Link to={"/shop/"} className="carritoEmpty">
                        <img src={Cart} alt="carrito" className="carritoVacio" />
                    </Link>
                </div>
            }
        <Footer/>
    </div>
    )
}

export default CheckOut;