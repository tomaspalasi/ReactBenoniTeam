import "../css/prendas.css";
import Item from "../items/Item"

const ItemListContainer = ({size}) => {
  return (
        <div className='boxRemeras'>
            {size.map(prenda => {
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
                                    size={prenda.size}
                                />
                            </div>
                    </div>
                )
            })}
        </div>
  )
}

export default ItemListContainer;