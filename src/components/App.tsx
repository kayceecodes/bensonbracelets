import React, { useState, CSSProperties, SyntheticEvent } from "react";
import Header from '../components/ui/header/Header';
// import Footer from '../components/ui/footer/Footer';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { Switch, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '../components/routes/home/Home';
import Contact from './routes/contact/Contact';
import Shoppingcart from './routes/shoppingcart/Shoppingcart';
import Collections from './routes/collections/Collections';
import Displayitem from './routes/collections/displayitem/Displayitem';

// import Luxury from './routes/collections/luxury/Luxury';
// import Fraternitysorority from './routes/collections/fraternitysorority/Fraternitysorority';
// import Teamcolors from './routes/collections/teamcolors/Teamcolors';
import ScrollToTop from './ui/scrolltotop/ScrollToTop';

import { bracelets } from '../data/Data';

import { easeInOutCubic } from '../utils/Easing';
import jump from "jump.js";
import { IMotions } from "../Interfaces";

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type InputEvent = React.FormEvent<HTMLInputElement>;
export type MouseEvent = React.MouseEvent<HTMLElement>;

const pageStyle: CSSProperties = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  overflow: 'hidden',
};

const pageAnimations: any = {
  variants: {
    initial: {
      opacity: 0,
      x: '0vw',
      // scale: 0.95,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: '0px',
      // scale: 1.3,
    },
  },
  transition: {
    type: 'tween', // Tween: animation that looks like it's evolving/transforming into something else
    ease: 'linear',
    duration: 0.35,
  },
};

const motions: IMotions = {
  initial: 'initial',
  animate: 'in',
  exit: 'out',
};

function convertToRoute(itemName: string) {
  let spaces = new RegExp("[ ]+", "g");
  let namedRoute = itemName.replace(spaces, "");
  // return namedRoute;
  let uppercase = new RegExp("[A-Z]", "g");
  return namedRoute.replace(uppercase, (x: string) => x.toLowerCase());
}

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  // const location = useLocation<string>();

  const scrollEvent = (event: SyntheticEvent) => {
    const target = event.target as HTMLTextAreaElement;
    console.log('Current Scroll Position: ', target.scrollTop);
  }

  const setJump = (
    jumpingTarget: string | number | Element // Jump based on where the jump() is called from
  ) =>
    jump(jumpingTarget, {
      duration: 800,
      offset: -55,
      easing: easeInOutCubic,
    });

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <div
        style={{
          // position: "relative",
          // position: "absolute",
          //  overflow: "hidden",
          // backgroundColor: `${ location.pathname === '/collections' ? 'rgb(240,240,240)' : '#fff' }`,
          // height: "100vh",
        }}
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
              );
            })}
            {/* <Route
              exact
              path="/collections/luxury"
              component={() => (
                <Luxury
                  pageStyle={pageStyle}
                  pageAnimations={pageAnimations}
                  motions={motions}
                />
              )}
            />
            <Route
              exact
              path="/collections/fraternitysorority"
              component={() => (
                <Fraternitysorority
                  pageStyle={pageStyle}
                  pageAnimations={pageAnimations}
                  motions={motions}
                />
              )}
            />
            <Route
              exact
              path="/collections/teamcolors"
              component={() => (
                <Teamcolors
                  pageStyle={pageStyle}
                  pageAnimations={pageAnimations}
                  motions={motions}
                />
              )}
            /> */}
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
          </Switch>
        </AnimatePresence>
      </div>
      {/* <Footer 
        setValue={setValue}
        setSelectedIndex={setSelectedIndex}
        
      /> */}
    </ThemeProvider>
  );
}

export default App;
