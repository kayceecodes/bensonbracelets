import React from "react"

import { fireEvent, render, testMaterial, within } from "./test-utils"
import DisplayItem from "../components/routes/collections/displayitem/Displayitem"

import { bracelets } from "../data/Data"

import { getByTestId, screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { debug } from "console"

type DisplayItemProps = React.ComponentProps<typeof DisplayItem>

const baseProps: DisplayItemProps = {
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

const renderUI = (props: Partial<DisplayItemProps>) =>
  render(<DisplayItem {...baseProps} {...props} />, {})

describe("When a Selection - Option is clicked", () => {
  beforeEach(() => {
    renderUI({})
  })
  test("select value updates text for sizes", () => {
    testMaterial.selectOption(screen.getByTestId(/quantity/), /4/)
    expect(screen.getByTestId(/quantity-select-btn/)).toHaveTextContent(/4/)
  })

  test("select value updates text for sizes", () => {
    testMaterial.selectOption(screen.getByTestId(/size/), /4.5"/)
    expect(screen.getByTestId(/size-select-btn/)).toHaveTextContent(/4.5"/)
  })
})
