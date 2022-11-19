// import React from 'react'
import { createContext, useReducer, useContext } from 'react';
// import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
import Bestsellproducts from '../components/BestsellingApi';
import { useState } from 'react';

// import { useContext } from 'react/cjs/react.production.min';

 
const Cart = createContext()


const Context = ({ children }) => {
    const [ products, setProducts ] = useState(Bestsellproducts);

    const [ state, dispatch ] = useReducer(cartReducer, {
        products: products,
        cart:[ ]
    }) 
    
    // console.log(products)

    // const products = [ ...Array(20) ].map(() => ({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.productName(),
    //     price: faker.commerce.price(),
    //     image: faker.image.food(),
    // }))

  return (
      <Cart.Provider value={{state, dispatch}}>
          {children}
    </Cart.Provider>
  )
}
export default Context;

export const CartState = () => {
    return useContext(Cart); 
}

