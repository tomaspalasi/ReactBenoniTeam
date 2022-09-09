import React from "react";
import { remeras } from "../../../../mock/remeras";
import "../css/prendas.css";
import Prenda from "../productos/Prendas"

const PrendaListContainer = () => {
    const promesa = new Promise ((resolve) => {
        setTimeout (()=>{
            resolve (remeras)
        }, 2000);
    })

    promesa.then((respuesta) =>{
        console.log (respuesta)
    })

  return (
    <div className='boxRemeras'>
        {remeras.map((prenda) => {
            return (
                <div className='boxPrenda' key={prenda.id}>
                        <div className='remera'>
                            <Prenda
                            img1={prenda.img1}
                            img2={prenda.img2}
                            nombre={prenda.nombre}
                            precio={prenda.precio}
                            stock={prenda.stock}
                            />
                        </div>
                </div>
            )
        })}
    </div>
  )
}

export default PrendaListContainer;
