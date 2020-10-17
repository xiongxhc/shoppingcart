import { FETCH_PRODUCTS } from "../types"

import data from '../db/products.json'

export const fetchProducts = () => async (dispatch) => {
    // const res = await fetch("")
    // const data = await res.json()
    console.log(data.Products)
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data.Products,
    })
}