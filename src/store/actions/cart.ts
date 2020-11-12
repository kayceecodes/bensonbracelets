import { ICartItems } from '../../Interfaces';
import * as actionTypes from './actionTypes';

export interface AddToCart {
    type: actionTypes.ADD_TO_CART;
    item: ICartItems;
}
export interface RemoveFromCart {
    totalPriceRemoved: number;
    removedId: number;
    type: actionTypes.REMOVE_FROM_CART;
}

export type CartAction = AddToCart | RemoveFromCart;

export const addToCart = (item: any) => {
  return {
      type: actionTypes.ADD_TO_CART,
      item: item,
  };
}

export const removeFromCart = (removedId: number, totalPriceRemoved: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    removedId,
    totalPriceRemoved,
  };
}