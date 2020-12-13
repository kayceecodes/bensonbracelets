import React from "react"

import { render } from "./test-utils"
import Shoppingcart from "../components/routes/shoppingcart/Shoppingcart"

import { bracelets } from "../data/Data"

import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Elements } from "@stripe/react-stripe-js"
import { StripeProvider } from "react-stripe-elements"

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

const renderUI = (props: Partial<ShoppingcartProps>) =>
  render(
    <StripeProvider stripe={null}>
        <Shoppingcart {...baseProps} {...props} />
    </StripeProvider>,
    {}
  )

describe("When user clicks on add quantity", () => {
  beforeEach(() => {
    // renderUI({})
  })

  test("the cart total is increased", () => {
  
  })
})
