import React from "react"
 
import { render } from "./test-utils"
import CheckoutForm from "../components/routes/shoppingcart/checkout/CheckoutForm"

import { bracelets } from "../data/Data"

import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Elements } from "@stripe/react-stripe-js"
import { StripeProvider } from "react-stripe-elements"

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
      <CheckoutForm {...baseProps} {...props} />
    ,{}
  )

  test('empty', () => {})


  