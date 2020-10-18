import { ADD_TO_CART, REMOVE_FROM_CART } from "../types"

export const addToCart = (currCart, item) => async (dispatch) => {
var hasItem = false
    const cartItems = currCart.slice()
    cartItems.forEach( each => {
        if (each.id === item.id) {
            hasItem = true
            each.count++
        }
    });
    if(!hasItem) {
        cartItems.push({
            ...item, 
            count: 1
        })
    }
    dispatch({
        type: ADD_TO_CART,
        payload: {
            items: cartItems
        },
    })
}

export const removeFromCart = (currCart, item) => async (dispatch) => {
    const cartItems = currCart.slice().filter(each => each.id !== item.id)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            items: cartItems
        },
    })
}