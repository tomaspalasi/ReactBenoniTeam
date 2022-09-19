import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Cart from './img/cart.svg'
import Trash from './img/trash.svg'

function CartWidget () {
  const {cartTotal, clear} = useContext(CartContext)

  return (
    <div>
      <Link to={"/cart/"} className='carritoTrash' type='button' tittle='IrAlCarrito'>
        <img className='logoCart' src={Cart} alt="logoCarrito"/>
        <span className="cartText">{cartTotal()}</span>
      </Link>
      <button className='carritoTrash' type='button'tittle='VaciarCarrito' onClick={()=> {clear()}}>
        <img className='logoTrash' src={Trash} alt="trashCan" />
      </button>
    </div>
  )
}

export default CartWidget;
