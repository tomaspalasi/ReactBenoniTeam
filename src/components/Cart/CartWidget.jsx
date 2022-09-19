import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import Cart from './img/cart.svg'
import Trash from './img/trash.svg'

function CartWidget () {
  const {cartTotal, clear} = useContext(CartContext)

  return (
    <div>
      <button className='carritoTrash' type='button'tittle='VaciarCarrito' onClick={()=> {clear()}}>
        <img className='logoCart' src={Trash} alt="trashCan" />
      </button>
      <button className='carritoTrash' type='button' tittle='IrAlCarrito' onClick={()=> {clear()}}>
        <img className='logoCart' src={Cart} alt="logoCarrito"/>
        <span className="logoCart">{cartTotal()}</span>
      </button>
      
    </div>
  )
}

export default CartWidget;
