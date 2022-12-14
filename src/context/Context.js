import { createContext, useReducer, useContext } from 'react';
import { cartReducer, currencyReducer } from './Reducers';
import Bestsellproducts from '../components/BestsellingApi';
import { useState } from 'react';


const Cart = createContext()
const Currency = createContext()


export const CurrencyContext = ({ children }) => {
    //set the currency state manager
    const [ currency, setCurrency ] = useState(localStorage.getItem('currency') === 'USD' ? '$' : '₦');
    console.log(setCurrency)

    //set reducer to update the currency state
    const [ state, dispatch ] = useReducer(currencyReducer, {
        currency: currency,
        currencies: [ "USD", "NGN" ],
        rate: 444
    })

    // return a curency provider, use to wrap the whole app to provide state for all child components
    return (
        <Currency.Provider
            value={{
                state, dispatch
            }}
        >
            {children}
        </Currency.Provider>
    )
}

const Context = ({ children }) => {
    const [ products, setProducts ] = useState(Bestsellproducts);
    console.log(setProducts)
    const [ state, dispatch ] = useReducer(cartReducer, {
        products: products,
        cart: [],

    })


    return (
        <Cart.Provider
            value={{
                state, dispatch
            }}
        >
            {children}
        </Cart.Provider>
    )
}
export default Context;

export const CartState = () => {
    return useContext(Cart);
}

//export currency state and call it as hoks where needed
export const CurrencyState = () => {
    return useContext(Currency);
}

