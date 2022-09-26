import "../css/prendas.css";
import Item from "../items/Item"
import {getFirestore,collection, getDocs, where, query} from "firebase/firestore"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {tamanio} = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        const db = getFirestore();
        const catCollection = collection(db, "items");
        if (tamanio) {
            const categoryFilter = query(catCollection, where("tamaño", "==", tamanio));
            getDocs(categoryFilter)
                .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))));
        } else {
            getDocs(catCollection)
                .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))));
        }

    }, [tamanio]);
    
  return (
        <div className='boxRemeras'>
            {productos.map(prenda => {
                return (
                    <div className='boxPrenda' key={prenda.id}>
                            <div className='remera'>
                                <Item
                                    id={prenda.id}
                                    img1={prenda.img1}
                                    img2={prenda.img2}
                                    nombre={prenda.nombre}
                                    precio={prenda.precio}
                                    stock={prenda.stock}
                                    tamaño={prenda.tamaño}
                                />
                            </div>
                    </div>
                )
            })}
        </div>
  )
}

export default ItemListContainer;