import { ADD_TO_CART, REMOVE_FROM_CART } from "../types"

export const addToCart = (item) => async (dispatch, getState) => {
    var hasItem = false
    const cartItems = getState().cart.cartItems.slice()

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
            cartItems
        },
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

export const removeFromCart = (item) => async (dispatch, getState) => {
    const currCart = getState().cart.cartItems.slice()
    const cartItems = currCart.filter(each => each.id !== item.id)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            cartItems
        },
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}