import Header from "../../../../Header/Header";
import Footer from '../../../../Footer/Foter'
import ItemListContainer from "./ItemListContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { remeras } from "../../../../../mock/remeras";

const ItemCategoryContainer = () => {
    const titulo = "BENONI TEAM - C.E.A.R.D.";
    const descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";

    const {size} = useParams();
    const [prendas, setPrendas] = useState([]);
    
    
    useEffect(() => {
        const promsFetch = new Promise ((resolve) => {
            setTimeout (()=>{
                resolve (remeras)
            }, 500);
        })
        
        promsFetch.then((respuesta) =>{
            console.log (respuesta)
        })

        if (!size){
            promsFetch.then(respuesta =>{
                setPrendas (respuesta)
            })
        } else {
            promsFetch.then(respuesta =>{
                setPrendas (respuesta.filter(tm => tm.size === size))
            })
        }
    },[size])

    return (
        <div>
            <Header/>
                <div className= "contenedor">
                    <div className="contenido">
                    <h1 className="titulo">{titulo}</h1>
                    <p className="descripcion">{descripcion}</p>
                        <ul>
                            <ItemListContainer size={prendas}/>
                        </ul>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}


export default ItemCategoryContainer;