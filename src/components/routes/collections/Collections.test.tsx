import React from "react";

import { render } from '../../../../test/test-utils';
import Collections, { IProps } from "./Collections";

type CollectionsProps = React.ComponentProps<typeof Collections>;

const baseProps: CollectionsProps = {
  setValue: () => {},
  setSelectedIndex: () => {},
  pageStyle: {},
  pageAnimations: {transition : {}, variants: {}},
  motions: '',
  jumpTo: (jumpingTarget: string | number | Element) => void;
}

const renderUI = (props: Partial<CollectionsProps>) =>
     render(<Collections {...props} />, {}); 

describe('When the Filter is Clicked', () => {
  let {getByText} = renderUI();

  test('items shown are only related to the picked Category', () => {
    const braceletCards = getBy
    expect(braceletCards.length).toBe(3);
  })

}); 