import React from "react"

import { fireEvent, render } from '../../../../test/test-utils'
import Collections, { IProps } from "./Collections"

import { bracelets } from '../../../data/Data' 

import { queryHelpers } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import {IMotions} from '../../../Interfaces'

export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  'bracelet-card', //the id I'm looking for
  'data-test-id' // the custom attribute
)

console.log(queryAllByTestId.length);

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
  let {getByTestId, getByText, queryAllByText, debug} = renderUI({})
  //screen.debug
  //debug()

    // test('items shown are only related to the picked Category', () => {
    //   userEvent.click(getByText('Team Colors'))
    // })  
}) 