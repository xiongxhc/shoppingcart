const { ADD_TO_CART, REMOVE_FROM_CART } = require("../types");

export const cartReducer = ( state = { cartItems: [] }, action ) => {

    switch(action.type) {
        case ADD_TO_CART: 
            return {
                cartItems: action.payload.items
            }

        case REMOVE_FROM_CART: 
            return {
                cartItems: action.payload.items
            }

        default: 
            return state;
    }

} 