import React from "react";
import { render } from "./test-utils";
import Item from "../components/routes/shoppingcart/item/Item";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { ICartItems } from "../Interfaces";
import {Provider} from 'react-redux'
import { Dispatch } from "redux"
import store from '../store/store'
import * as actionTypes from '../store/actions/actionTypes'
import { addQuantityToItem } from "../store/actions/cart";

type ItemProps = React.ComponentProps<typeof Item>;

let quantity = 2

let baseProps: ItemProps & ICartItems = {
  getQtyTotal: () => {},
  name: "TestBracelet1",
  quantity: quantity,
  size: 5,
  price: 10,
  src: "",
  id: "0000",
};


const thunk = ({ dispatch, getState }:{dispatch: Dispatch, getState: any}) => (next: any) => (action: any) => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
  
    return next(action)
  }

  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = (action: any) => thunk(store)(next)(action)
  
    return { store, next, invoke }
  }

const renderUI = (props: Partial<ItemProps>) =>
  render(
  <Item {...baseProps} {...props} />
  , {});


describe("When user clicks on add quantity", () => {
    it('passes dispatch and getState', () => {
        renderUI({})
        const { store, invoke } = create()
        invoke((dispatch: any, getState: any) => {
          dispatch(actionTypes.ADD_QUANTITY_TO_ITEM)
          getState()
        })
        userEvent.click(screen.getByTestId(/add-qty-btn/))
        expect(store.dispatch).toHaveBeenCalledWith(addQuantityToItem({...baseProps, quantity: 1 }))
        expect(store.getState).toHaveBeenCalled()
      })
});
