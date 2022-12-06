
export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [ ...state.cart, { ...action.payload, qty: 1 } ] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((c) => c.id !==action.payload.id) };
        default:
            return state;
    }
};

export const currencyReducer = (state, action) => {
    switch (action.type) {
        case "USD":
            return {...state, currency:'$'};
        case "NGN":
            return {...state, currency:'₦'};
        default:
            return state;
    }
};