jest.mock("../components/routes/collections/displayitem/Displayitem")
import React from "react"

import { render, testMaterial } from "./test-utils"
import Shoppingcart from "../components/routes/shoppingcart/Shoppingcart"

import { bracelets } from "../data/Data"

import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Elements } from "@stripe/react-stripe-js"
import { StripeProvider } from "react-stripe-elements"
import Collections from "../components/routes/collections/Collections"

type ShoppingcartProps = React.ComponentProps<typeof Shoppingcart>

const baseProps: ShoppingcartProps = {
  pageStyle: {},
  pageAnimations: { transition: {}, variants: {} },
  motions: { animate: "", initial: "", exit: "" },
}

const categoryCount = (category: string) =>
  bracelets.reduce(
    (acc, elem, index, arr): any =>
      category === elem.category ? acc + 1 : acc,
    0
  )
/** Renders Stripe Provider and Shoppingcart
 * @param {props?: Partial<ShoppingcartProps>}
 * @return void 
 */
const renderUI = (props: Partial<ShoppingcartProps>) =>
  render(<Shoppingcart {...baseProps} {...props} />, {})

describe("When user clicks on add quantity", () => {
  const {debug} = renderUI({})
  let initialTotalQty: any
  beforeEach(() => {
    /* Look for value and store it */
  })

  test("the initial total to be 0 in Shoppingcart.tsx", () => {
    initialTotalQty = screen.getByTestId(/cart-total-qty/).innerHTML
    expect(initialTotalQty).toBe("0")
  })

  test("the cart total is increased", () => {
    testMaterial.selectOption(screen.getByTestId(/size-select-btn/), /5/)
    debug()
  })
})
