jest.mock("@material-ui/core/Hidden/Hidden", () => ({ children }: any) => (
  <div>{children}</div>
))
import React from "react"

import { render } from "./test-utils"
import Collections from "../components/routes/collections/Collections"

import { bracelets } from "../data/Data"

import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"

type CollectionsProps = React.ComponentProps<typeof Collections>



const baseProps: CollectionsProps = {
  setValue: () => {},
  setSelectedIndex: () => {},
  pageStyle: {},
  pageAnimations: { transition: {}, variants: {} },
  motions: { animate: "", initial: "", exit: "" },
  jumpTo: (jumpingTarget: string | number | Element): void => {},
}

/**
 *
 *
 * braceletKeys.includes(elem.category)
 *     return acc + 1 :
 */

const categoryCount = (category: string) =>
  bracelets.reduce(
    (acc, elem, index, arr): any =>
      category === elem.category ? acc + 1 : acc,
    0
  )

const renderUI = (props: Partial<CollectionsProps>) =>
  render(<Collections {...baseProps} {...props} />, {})

describe("When the desktop-view filter is clicked ", () => {

  beforeEach(() => {
    renderUI({})
  })
  // test('click on show mobile', async () => {  
  //   global.innerWidth = 1000;
  //   global.dispatchEvent(new Event('resize'));
  //   userEvent.click(screen.getByText(/Team Colors/));
  //   })

   test('all luxury items are show', () => {
     userEvent.click(screen.getByText(/Luxury/))
     expect(screen.getAllByTestId(/bracelet-card/).length).toEqual(categoryCount('Luxury'))
   })

   test("all luxury items are shown", () => {
     userEvent.click(screen.getByText(/Team Colors/))
     expect(screen.getAllByTestId("bracelet-card").length).toEqual(categoryCount('Team Colors'))
   })

   test('all frat and sorority items are show', () => {
     userEvent.click(screen.getByText(/Fraternity & Sorority/))
     expect(screen.getAllByTestId(/bracelet-card/).length).toEqual(categoryCount('Fraternity & Sorority'))
   })

})
