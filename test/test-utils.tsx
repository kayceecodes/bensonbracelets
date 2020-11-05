// test-utils.js
import React, { PropsWithChildren, ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";

import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";

import theme from '../src/components/ui/Theme';

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: JSX.Element,
  options:any
    | undefined
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };