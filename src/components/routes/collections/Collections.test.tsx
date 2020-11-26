import React from "react"
import { render } from '../../../../test/test-utils'
import Collections from "./Collections"
import userEvent from '@testing-library/user-event'
import mediaQuery from 'css-mediaquery'

function createMatchMedia(width: any) {
  return (query: string): any => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

type CollectionsProps = React.ComponentProps<typeof Collections>

const baseProps: CollectionsProps = {
  setValue: () => {},
  setSelectedIndex: () => {},
  pageStyle: {},
  pageAnimations: {transition : {}, variants: {}},
  motions: {animate:'', initial: '', exit: ''},
  jumpTo: (jumpingTarget: string | number | Element): void => {}
}

const renderUI = (props: Partial<CollectionsProps>) =>
     render(<Collections {...baseProps} {...props} />, {}) 

describe('When a filter is clicked', () => {

  beforeAll( () => {
    window.matchMedia = createMatchMedia(window.innerWidth)
  })

  let { getByText } = renderUI({})

    test('items shown are only related to the picked Category', () => {
      userEvent.click(getByText(/Team Colors/))
    })  
}) 