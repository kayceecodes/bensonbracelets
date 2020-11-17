import { ICartItems } from "../../Interfaces"
import * as actionTypes from "../actions/actionTypes"
import { CartAction } from "../actions/cart"
import Bracelet1 from '../../images/bracelets/bracelet1.jpg'

const initialState: {cartTotal: number, numberOfItems: number, cartItems: ICartItems[]} = {
  cartTotal: 0,
  numberOfItems: 0,
  cartItems: [
    // {
    //   name: "Bracelet 1 Gold",
    //   src: Bracelet1,
    //   size: 2,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Blue",
    //   src: Bracelet1,
    //   size: 4,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Black",
    //   src: Bracelet1,
    //   size: 6,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Green",
    //   src: Bracelet1,
    //   size: 1,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Pink",
    //   src: Bracelet1,
    //   size: 9,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Blue",
    //   src: Bracelet1,
    //   size: 4,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Black",
    //   src: Bracelet1,
    //   size: 6,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Green",
    //   src: Bracelet1,
    //   size: 1,
    //   quantity: 2,
    //   price: 32.85,
    // },
    // {
    //   name: "Bracelet 1 Pink",
    //   src: Bracelet1,
    //   size: 9,
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
        cartTotal: action.payload.quantity * action.payload.price + state.cartTotal,
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


