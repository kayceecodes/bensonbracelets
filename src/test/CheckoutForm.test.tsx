import React from "react"

import { render } from "./test-utils"
import CheckoutForm from "../components/routes/shoppingcart/checkout/CheckoutForm"

import { bracelets } from "../data/Data"

import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Elements } from "@stripe/react-stripe-js"
import { StripeProvider } from "react-stripe-elements"
import { debug } from "console"

type CheckoutFormProps = React.ComponentProps<typeof CheckoutForm>

const baseProps: CheckoutFormProps = {
  setValue: () => {},
  setSelectedIndex: () => {},
  pageStyle: {},
  pageAnimations: { transition: {}, variants: {} },
  motions: { animate: "", initial: "", exit: "" },
  jumpTo: (jumpingTarget: string | number | Element): void => {},
}

const categoryCount = (category: string) =>
  bracelets.reduce(
    (acc, elem, index, arr): any =>
      category === elem.category ? acc + 1 : acc,
    0
  )

const renderUI = (props: Partial<CheckoutFormProps>) =>
  render(
    <StripeProvider apiKey="pk_test_G9lapOcMCey2HEiGguvpqIi1">
    <Elements stripe={null}>
      <CheckoutForm {...baseProps} {...props} />
    </Elements>
    </StripeProvider>,
    {}
  )

  describe("When user clicks on add quantity", () => {
    beforeEach(() => {
      // renderUI({})
    })
  
    test('empty', () => {
      
    })
  })
  