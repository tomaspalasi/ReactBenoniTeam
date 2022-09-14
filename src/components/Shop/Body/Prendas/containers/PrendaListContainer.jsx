import "../css/prendas.css";
import Prenda from "../productos/Prendas"

const PrendaListContainer = ({size}) => {
  return (
        <div className='boxRemeras'>
            {size.map(prenda => {
                return (
                    <div className='boxPrenda' key={prenda.id}>
                            <div className='remera'>
                                <Prenda 
                                    id={prenda.id}
                                    img1={prenda.img1}
                                    img2={prenda.img2}
                                    nombre={prenda.nombre}
                                    precio={prenda.precio}
                                    stock={prenda.stock}
                                    size={prenda.size}
                                />
                            </div>
                    </div>
                )
            })}
        </div>
  )
}

export default PrendaListContainer;