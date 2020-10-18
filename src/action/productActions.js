import { FETCH_PRODUCTS, SEARCH_PRODUCTS, SORT_PRODUCTS } from "../types"

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("http://localhost:3000/Products")
    const data = await res.json()
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}

export const searchProducts = (products, text) => async (dispatch) =>  {
    dispatch({
        type: SEARCH_PRODUCTS,
        payload: {
            text: text,
            items: products.filter(each => each.name.toString().toLowerCase().includes(text)) 
        }
    })
}

export const sortProducts = (products, sort) => async (dispatch) => {
    let sortedItems = products.slice()
    if (sort === "low") {
        sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    }
    if (sort === "high") {
        sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    }
    dispatch({
        type: SORT_PRODUCTS,
        payload: {
            sort: sort,
            items: sortedItems
        }
    })
}