import { ICartItems } from "../../Interfaces"
import * as actionTypes from "../actions/actionTypes"
import { CartAction } from "../actions/cart"
import Bracelet1 from "../../images/bracelets/bracelet1.jpg"

const initialState: { cartTotal: number; cartItems: ICartItems[] } = {
  cartTotal: 0,
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
        cartTotal:
          action.cartItems.quantity * action.cartItems.price + state.cartTotal,
        cartItems: state.cartItems.concat(action.cartItems),
      }
    case actionTypes.ADD_QUANTITY_TO_ITEM:
      return {
        ...state,
        cartTotal:
          action.newItem.quantity * action.newItem.price + state.cartTotal,
        cartItems: state.cartItems.map((item, i) => {
          if (action.newItem.id === item.id) {
            /*if there's an id that matches, add quantities and return the item object back to cartItems */
            state.cartItems[i].quantity =
              item.quantity + action.newItem.quantity
            return item
          } else {
            /* Always return an item back into cartItems */
            return item
          }
        }),
      }
    default:
      return state
  }
}

export default cart_reducer
