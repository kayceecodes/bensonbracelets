import { ICartItems } from "../../Interfaces"
import * as actionTypes from "../actions/actionTypes"
import { CartAction } from "../actions/cart"
import Bracelet1 from "../../images/bracelets/bracelet1.jpg"

const initialState: {cartTotal: number, cartItems: ICartItems[]} = {
  cartTotal: 12,
  cartItems: [
    // {
    //   name: "Bracelet 1 Gold",
    //   src: Bracelet1,
    //   size: 5,
    //   quantity: 2,
    //   price: 32.85,
    // },
  ],
}

const cart_reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartTotal: action.payload.price,
        cartItems: state.cartItems.concat(action.payload),
      }
    case actionTypes.ADD_QUANTITY_TO_ITEM:
      return {
        ...state,
        cartItems: action.payload
      }
    default:
      return state
  }
}

export default cart_reducer


