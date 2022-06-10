import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

// 2nd step. creation of the product list reducer function by passsing the state and action..
// the state have the property called products..
export const productListReducer = (state = { products: [] }, action) => {

  // the action should be the synchronous function 
  // we should not be mutate the original state

  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = ( state = { product: { reviews: [] } },action ) => {
  switch (action.type) {
    
    case PRODUCT_DETAILS_REQUEST:
      return { 
        loading: true, 
        ...state
      }

    case PRODUCT_DETAILS_SUCCESS:
      return { 
        loading: false, 
        product: action.payload 
      }

    case PRODUCT_DETAILS_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }

    default:
      return state
  }
}