import React from "react"

import { render, testMaterial } from "./test-utils"
import Shoppingcart from "../components/routes/shoppingcart/Shoppingcart"

import { bracelets } from "../data/Data"

import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Elements } from "@stripe/react-stripe-js"
import { StripeProvider } from "react-stripe-elements"
import Collections from "../components/routes/collections/Collections"
import DisplayItem from "../components/routes/collections/displayitem/Displayitem"

type ShoppingcartProps = React.ComponentProps<typeof Shoppingcart>
type DisplayItemProps = React.ComponentProps<typeof DisplayItem>
type CollectionsProps = React.ComponentProps<typeof Collections>

const baseProps: ShoppingcartProps = {
  pageStyle: {},
  pageAnimations: { transition: {}, variants: {} },
  motions: { animate: "", initial: "", exit: "" },
}

const DisplayItemBaseProps: DisplayItemProps = {
  setValue: () => {},
  setSelectedIndex: () => {},
  pageStyle: {},
  pageAnimations: { transition: {}, variants: {} },
  motions: { animate: "", initial: "", exit: "" },
  addToCart: () => {},
  name: "",
  price: 0,
  id: 0,
  src: "",
  category: "",
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
const renderUI = (
  props: Partial<ShoppingcartProps & DisplayItemProps & CollectionsProps>
) =>
  render(
    <>
      <Shoppingcart {...baseProps} {...props} />
      <DisplayItem {...DisplayItemBaseProps} {...props} />
    </>,
    {}
  )
/**select one random item and add to cart - for testing qty in cart */
const addNewItem = () => {
  testMaterial.selectOption(screen.getByTestId(/quantity/), /5/)
  userEvent.click(screen.getByTestId(/add-to-cart/))
}

describe("When user clicks on add quantity", () => {
  let initialTotalQty: any
  beforeEach(() => {
    const { debug } = renderUI({})
  })

  test("the initial total to be 0 in Shoppingcart.tsx", () => {
    addNewItem()
    expect(screen.getByTestId(/cart-total-qty/)).toHaveTextContent(/0/)
  }) 
 
  test("the cart total is increased", () => {
    
    //  addNewItem()
    //  userEvent.click(screen.getByTestId(/add-qty-btn/)) 
    // //  screen.getByTestId(/price/)
    // //  const currentQuantity = screen.getByTestId(/cart-total-qty/)
    // //  expect(screen.getByTestId(/cart-total-qty/)).toHaveTextContent(/0.00/)
  })
}) 
