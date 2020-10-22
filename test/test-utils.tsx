// test-utils.js
import React, { PropsWithChildren, ReactNode } from 'react'

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/styles';


const AllTheProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme="light">
      <Provider store={store}>
        {children}
        </Provider>
    </ThemeProvider>
  )
  
}

const customRender = (ui: JSX.Element, options: Pick<RenderOptions<typeof import("@testing-library/dom/queries")>, "container" | "baseElement" | "hydrate" | "wrapper"> | undefined) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }