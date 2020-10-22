import { IBraceletData } from "../../Interfaces";
import * as actionTypes from "../actions/actionTypes";
import { CartAction } from "../actions/cart";

const initialState: { cartTotal: number; cartItems: Array<IBraceletData> } = {
  cartTotal: 0,
  cartItems: [],
};

const cart_reducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartTotal: action.item.price + state.cartTotal,
        cartItems: state.cartItems.concat(
          action.item
        ) /*cartItems state should be ary of IBraceletData for it to concat it to an array of items*/
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartTotal: state.cartTotal - action.totalPriceRemoved,
        cartItems: state.cartItems.filter(
          (item: IBraceletData) => item.id !== action.removedId
        ),
      };
    default:
      return state;
  }
};
export default cart_reducer;
