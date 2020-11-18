import { ICartItems } from '../../Interfaces';
import * as actionTypes from './actionTypes';

export interface AddToCart {
    type: actionTypes.ADD_TO_CART;
    payload: ICartItems;
}
export interface RemoveFromCart {
    totalPriceRemoved: number;
    removedId: number;
    type: actionTypes.REMOVE_FROM_CART;
}

export interface AddQuantityToItem {
  type: actionTypes.ADD_QUANTITY_TO_ITEM
  payload: ICartItems
} 

export type CartAction = AddToCart | RemoveFromCart | AddQuantityToItem;

export const addToCart = (cartItems: any) => {
  return {
      type: actionTypes.ADD_TO_CART,
      cartItems: cartItems,
      quantity: cartItems.quantity,
      price: cartItems.price,
  }
}

export const removeFromCart = (removedId: number, totalPriceRemoved: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    removedId,
    totalPriceRemoved,
  };
}

// export const addQuantityToItem = (newCartItems: ICartItems[]) => {
//   return {
//     type: actionTypes.ADD_QUANTITY_TO_ITEM,
//     payload: newCartItems
//   }
// }

export const addQuantityToItem = (newItem: ICartItems) => {
  return {
    type: actionTypes.ADD_QUANTITY_TO_ITEM,
    newItem,
  }
}