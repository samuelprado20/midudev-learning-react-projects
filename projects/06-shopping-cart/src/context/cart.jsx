import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const checkProductInCart = product => {
    return state.some(item => item.id === product.id)
  }

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  return { state, addToCart, clearCart, removeFromCart, checkProductInCart }
}
export function CartProvider ({ children }) {
  const { state, addToCart, clearCart, removeFromCart, checkProductInCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      checkProductInCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
