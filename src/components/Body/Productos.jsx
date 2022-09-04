import React, {useState} from 'react';
import Prenda from './Prendas/Prendas';
import '../Body/Prendas/css/prendas.css';



const Productos = () => {
    const [prendas] = useState ([
        {
            id: 1,
            nombre: "BENONI",
            precio: 2500,
            img: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_1-logo_benoni-dorso.png",
            stock: 25,
        },
        {
            id: 2,
            nombre: "BIELAS",
            precio: 2400,
            img: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_2-bielas-dorso.png",
            stock: 20,
        },
        {
            id: 3,
            nombre: "DAVAI",
            precio: 2800,
            img: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_3-davai-dorso.png",
            stock: 12,
        },
        {
            id: 4,
            nombre: "DAVAI!!",
            precio: 3000,
            img: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_4-davai_2-dorso.png",
            stock: 14,
        },
        {
            id: 5,
            nombre: "MERENGUITOS",
            precio: 4000,
            img: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_5-merenguitos-dorso.png",
            stock: 10,
        }
    ]
    )

  return (
    <div className='boxRemeras'>
        {prendas.map((prenda) => {
            return (
                    <div className='boxPrenda' key={prenda.id}>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    <div className='remera'>
                        <Prenda
                        img={prenda.img}
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

export default Productos;