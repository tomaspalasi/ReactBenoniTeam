import React, {useState} from 'react';
import Prenda from './Prendas/Prendas';
import '../Body/Prendas/css/prendas.css';



const Productos = () => {
    const [prendas] = useState ([
        {
            id: 1,
            nombre: "BENONI",
            precio: 2500,
            img1: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_1-logo_benoni-frente.png",
            img2: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_1-logo_benoni-dorso.png",
            stock: 25,
        },
        {
            id: 2,
            nombre: "BIELAS",
            precio: 2400,
            img1: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_2-bielas-frente.png",
            img2: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_2-bielas-dorso.png",
            stock: 20,
        },
        {
            id: 3,
            nombre: "DAVAI",
            precio: 2800,
            img1: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_3-davai-frente.png",
            img2: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_3-davai-dorso.png",
            stock: 12,
        },
        {
            id: 4,
            nombre: "DAVAI!!",
            precio: 3000,
            img1: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_4-davai_2-frente.png",
            img2: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_4-davai_2-dorso.png",
            stock: 14,
        },
        {
            id: 5,
            nombre: "MERENGUITOS",
            precio: 4000,
            img1: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_5-merenguitos-frente.png",
            img2: "https://tomaspalasi.github.io/BenoniGym/assets/img/remeras/remera_5-merenguitos-dorso.png",
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

export default Productos;