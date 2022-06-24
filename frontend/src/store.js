import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'

import {
  userLoginReducer,
  userDetailsReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : []

// initial state of the store...
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
}

const middleware = [thunk]

// 1. creation of store by passing the reducer..
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
