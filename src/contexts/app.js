import React, {createContext, useState} from 'react'

export const AppContext = createContext({})

const ContextProvider = ({children}) => {
  const [user, setUser] = useState({})

  const [cart, setCart] = useState([])

  const addToCart = product => {
    const existendIndex = cart?.findIndex(p => p.id === product.id)
    let oldCart = cart

    if (existendIndex !== -1) {
      oldCart[existendIndex] = product
    } else {
 
      oldCart.push(product)
    }

    setCart(oldCart)
  }
  const removeFromCart = () => {}
  return (
    <AppContext.Provider
      value={{user, setUser, cart, addToCart, removeFromCart}}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
