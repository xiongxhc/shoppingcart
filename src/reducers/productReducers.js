const { FETCH_PRODUCTS, SEARCH_PRODUCTS, SORT_PRODUCTS } = require("../types");

export const productsReducer = ( state = {}, action ) => {

    switch(action.type) {
        case SEARCH_PRODUCTS: 
            return {
                ...state,
                text: action.payload.text,
                filterItems: action.payload.items
            }

        case SORT_PRODUCTS: 
            return {
                ...state,
                sort: action.payload.sort,
                filterItems: action.payload.items
            }

        case FETCH_PRODUCTS:
            return {
                items: action.payload,
                filterItems: action.payload,
            };
        default: 
            return state;
    }

} 