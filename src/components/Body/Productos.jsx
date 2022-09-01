import React, {useState} from 'react';
import Prenda from './Prendas/Prendas';
import '../Body/Prendas/prendas.css';

const Productos = () => {
    const [prendas] = useState ([
        {
            id: 1,
            nombre: "BENONI",
            precio: 2500,
            img: "https://benoniteamgym.netlify.app/assets/img/remeras/remera_1-logo_benoni-dorso.png",
        },
        {
            id: 2,
            nombre: "BIELAS",
            precio: 2400,
            img: "https://benoniteamgym.netlify.app/assets/img/remeras/remera_2-bielas-dorso.png",
        },
        {
            id: 3,
            nombre: "DAVAI",
            precio: 2800,
            img: "https://benoniteamgym.netlify.app/assets/img/remeras/remera_3-davai-dorso.png",
        },
        {
            id: 4,
            nombre: "DAVAI!!",
            precio: 3000,
            img: "https://benoniteamgym.netlify.app/assets/img/remeras/remera_4-davai_2-dorso.png",
        },
        {
            id: 5,
            nombre: "MERENGUITOS",
            precio: 4000,
            img: "https://benoniteamgym.netlify.app/assets/img/remeras/remera_5-merenguitos-dorso.png",
        }
    ]
    )
    

  return (
    <div>
        {prendas.map((prenda) => {
            return (
                <Prenda
                key={prenda.id}
                img={prenda.img}
                nombre={prenda.nombre}
                precio={prenda.precio}
                />
            )
        })}
    </div>
  )
}

export default Productos;