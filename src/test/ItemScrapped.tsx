jest.mock('')
import React from "react";
import { create, render } from "./test-utils";
import Item from "../components/routes/shoppingcart/item/Item";
import { Matcher, MatcherOptions, screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { ICartItems } from "../Interfaces";
import * as actionTypes from '../store/actions/actionTypes'

type ItemProps = React.ComponentProps<typeof Item>;

let baseProps: ItemProps & ICartItems = {
  getQtyTotal: () => {},
  name: "TestBracelet1",
  quantity: 2,
  size: 5,
  price: 10,
  src: "",
  id: "0000",
};


const renderUI = (props: Partial<ItemProps>) =>
  render(
  <Item {...baseProps} {...props} />
  , {});


describe("When user clicks on add quantity", () => {
        let wrapper: HTMLElement, getByTestId: 
        { (arg0: string): any; (text: Matcher, options?: MatcherOptions | undefined, waitForElementOptions?: unknown): HTMLElement; };
        let mockAddQtyToItem: any;
  beforeEach( () => {
        mockAddQtyToItem = jest.fn
        const utils = renderUI({})
        getByTestId = utils.getByTestId;
      })  
    it('dispatches addQuantityToItem with an increased quantity of 1', () => {
      create()  
      const button = getByTestId('add-qty-btn') 
        userEvent.click(button) 
        // userEvent.click(screen.getByTestId(/add-qty-btn/))
        // expect(mockAddQtyToItem).toHaveBeenCalled()

        // expect(addQuantityToItem).toHaveBeenCalledWith(addQuantityToItem({...baseProps, quantity: 1 }))
      })
});
