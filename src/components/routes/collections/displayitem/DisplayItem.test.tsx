import React from "react"

import { fireEvent, render, within } from "../../../../../test/test-utils"
import DisplayItem from "./Displayitem"

import { bracelets } from "../../../../data/Data"

import { getByTestId, screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"

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

  fireEvent.mouseDown(screen.getByTestId(/select/))

  const listbox = within(screen.getByRole('listbox'))
  fireEvent.click(listbox.getByText(/5/))
//   expect(screen.getByRole('heading').toHaveTextContext
  })

  