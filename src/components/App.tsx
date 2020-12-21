import React, { useState, CSSProperties } from "react"
import Header from "../components/ui/header/Header"
// import Footer from '../components/ui/footer/Footer';
import { ThemeProvider } from "@material-ui/styles"
import theme from "./ui/Theme"
import { Switch, Route } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import Home from "../components/routes/home/Home"
import Contact from "./routes/contact/Contact"
import Shoppingcart from "./routes/shoppingcart/Shoppingcart"
import Collections from "./routes/collections/Collections"
import Displayitem from "./routes/collections/displayitem/Displayitem"

// import Luxury from './routes/collections/luxury/Luxury';
// import Fraternitysorority from './routes/collections/fraternitysorority/Fraternitysorority';
// import Teamcolors from './routes/collections/teamcolors/Teamcolors';
import ScrollToTop from "./ui/scrolltotop/ScrollToTop"

import { bracelets } from "../data/Data"

import { easeInOutCubic } from "../utils/Easing"
import jump from "jump.js"
import { IMotions } from "../Interfaces"

import { Elements, StripeProvider } from "react-stripe-elements"

export type FormEvent = React.FormEvent<HTMLFormElement>
export type InputEvent = React.FormEvent<HTMLInputElement>
export type MouseEvent = React.MouseEvent<HTMLElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

const pageStyle: CSSProperties = {
  position: "absolute",
  width: "100%",
  textAlign: "center",
  overflow: "hidden",
}

const pageAnimations: any = {
  variants: {
    initial: {
      opacity: 0,
      x: "0vw",
      // scale: 0.95,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "0px",
      // scale: 1.3,
    },
  },
  transition: {
    type: "tween", // Tween: animation that looks like it's evolving/transforming into something else
    ease: "linear",
    duration: 0.35,
  },
}

const motions: IMotions = {
  initial: "initial",
  animate: "in",
  exit: "out",
}

function convertToRoute(itemName: string) {
  let spaces = new RegExp("[ ]+", "g")
  let namedRoute = itemName.replace(spaces, "")
  // return namedRoute;
  let uppercase = new RegExp("[A-Z]", "g")
  return namedRoute.replace(uppercase, (x: string) => x.toLowerCase())
}

export const parsePrice = (price: number) => {
  return parseFloat(price.toFixed(2))
}

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  const setJump = (
    jumpingTarget: string | number | Element // Jump based on where the jump() is called from
  ) =>
    jump(jumpingTarget, {
      duration: 800,
      offset: -55,
      easing: easeInOutCubic,
    })

  return (
    <>
      <StripeProvider apiKey="pk_test_G9lapOcMCey2HEiGguvpqIi1">
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <div
          >
            <AnimatePresence>
              <Switch>
                
              <Route
                  exact
                  path="/"
                  component={() => (
                    <Home
                      
                      pageStyle={pageStyle}
                      pageAnimations={pageAnimations}
                      motions={motions}
                      value={value}
                      setValue={setValue}
                      setSelectedIndex={setSelectedIndex}
                      jumpTo={setJump}
                    />
                  )}
                />
                <Route
                  exact
                  path="/bensonbracelets"
                  component={() => (
                    <Home
                      pageStyle={pageStyle}
                      pageAnimations={pageAnimations}
                      motions={motions}
                      value={value}
                      setValue={setValue}
                      setSelectedIndex={setSelectedIndex}
                      jumpTo={setJump}
                    />
                  )}
                />
                <Route
                  exact
                  path="/collections"
                  component={() => (
                    <Collections
                      pageStyle={pageStyle}
                      pageAnimations={pageAnimations}
                      motions={motions}
                      setValue={setValue}
                      setSelectedIndex={setSelectedIndex}
                      jumpTo={setJump}
                    />
                  )}
                />
                {bracelets.map((item) => {
                  return (
                    <Route
                      key={item.name + item.category}
                      exact
                      path={"/collections/" + convertToRoute(item.name)}
                      component={() => (
                        <Displayitem
                          name={item.name}
                          price={item.price}
                          category={item.category}
                          src={item.src}
                          pageStyle={pageStyle}
                          pageAnimations={pageAnimations}
                          motions={motions}
                          setValue={setValue}
                          setSelectedIndex={setSelectedIndex}
                        />
                      )}
                    />
                  )
                })}
               
                <Route
                  exact
                  path="/contact"
                  component={() => (
                    <Contact
                      pageStyle={pageStyle}
                      pageAnimations={pageAnimations}
                      motions={motions}
                    />
                  )}
                />
                <Elements>
                  <Route
                    exact
                    path="/shoppingcart"
                    component={() => (
                      <Shoppingcart
                        pageStyle={pageStyle}
                        pageAnimations={pageAnimations}
                        motions={motions}
                      />
                    )}
                  />
                </Elements>
              </Switch>
            </AnimatePresence>
          </div>
          {/* <Footer 
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        
      /> */}
        </ThemeProvider>
      </StripeProvider>
    </>
  )
}

export default App
