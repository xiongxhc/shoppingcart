import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { productsReducer } from '../reducers/productReducers.js'
import { cartReducer } from '../reducers/cartReducers.js'
import { userReducer } from '../reducers/userReducers.js'

const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
        user: userReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store

