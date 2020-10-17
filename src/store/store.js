import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { productsReducer } from '../reducers/productReducers'

const initialState = {

}

const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    compose(applyMiddleware(thunk))
)

export default store

