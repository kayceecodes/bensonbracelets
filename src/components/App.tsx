import React, { useState } from "react";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type InputEvent = React.FormEvent<HTMLInputElement>;
export type MouseEvent = React.MouseEvent<HTMLElement>;

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Home />
              </div>
            )}
          />
           <Route exact path="/collections" component={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          S
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/about"
            component={() => (
              <About setValue={setValue} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <Contact
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>

        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
