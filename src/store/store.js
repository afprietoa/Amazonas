import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from 'redux-thunk'
import { itemsReducer } from "../reducers/itemsReducer";
import {loginReducer} from '../reducers/loginReducer'
import {registerReducer} from '../reducers/registerReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    item: itemsReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
