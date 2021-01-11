import React, { useState } from "react";
import axios from "axios";
import { ChangeEvent, FormEvent } from "../../../App";

import FormControl from "@material-ui/core/FormControl/FormControl";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

import {
  injectStripe,
  ReactStripeElements,
  CardElement,
} from "react-stripe-elements";
import Button from "@material-ui/core/Button/Button";
import { StateLocations } from "../../../../utils/States";
import { ICartItems } from "../../../../Interfaces";

const state = {
  controls: {
    email: {
      elementType: 'input',
      elementConfig: {
          type: 'email',
          placeholder: 'Mail Address'
      },
      value: '',
      validation: {
        required: true,
        isMail: true,
        minLength: 5,
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
          type: 'password',
          placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        isMail: true,
        minLength: 6,
      },
      valid: false,
      touched: false
    },

  },
  isSignup: true,
}

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "35px",
    },
  },
  formTextFields: {
    margin: "10px 0px",
    width: "240px",
    [theme.breakpoints.up("sm")]: {
      width: "260px",
    },
  },
  borderStyle: {
    border: `0.2px solid ${theme.palette.common.slateTan}`,
    padding: "3% 0.5% 3% 3%",
    borderRadius: "4px",
  },
  submitBtn: {
    marginBottom: "90px",
    textTransform: "none",
    color: theme.palette.common.orange,
    backgroundColor: theme.palette.common.offWhite,
  },
}));

interface IStripeProps extends ReactStripeElements.InjectedStripeProps {}
//Allow for props to be passed on to CheckoutForm from Stripe API wthout passing them in directly ourselves

interface IFormProps {
  cartTotal: number;
  cartItems: ICartItems[]
}

type IProps = IFormProps & IStripeProps;

interface State {
  name: string;
  email: string;
  stateLocation: string;
  streetAddress: string;
  zipcode: string;
}

export const CheckoutForm = (props: IProps) => {
  const [stateLocation, setStateLocation] = useState<string>("")
  const [formFinished, setFormFinished] = useState<boolean>(false)
  const [values, setValues] = React.useState<State>({
    name: "John Doe",
    email: "kcee403@gmail.com",
    stateLocation: "AL",
    streetAddress: "123 A Street",
    zipcode: "02300",
    // name: "",
    // email: "",
    // stateLocation: "",
    // streetAddress: "",
    // zipcode: "",
  });

  const classes = useStyles();

  const handleChange = (prop: keyof State) => (event: ChangeEvent) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      let token = await (props.stripe !== null
        ? props.stripe.createToken({ name: values.name })
        : null);
      console.log(token);
    } catch (e) {
      console.log("Error in Handle Sumbit, not Send: ", e);
    }
  };
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const send = async () => {
    /**
     * validate return true
     * if validate true the make call
     */
    let invalidMessage;
    let validated = validateEmail(values.email)

    if(validated) {
    await axios
      .post( 'http://127.0.0.1:3333/send-email', {
        name: values.name,
        email: values.email,
        streetAddress: values.streetAddress,
        stateLocation: values.stateLocation,
        zipcode: values.zipcode,
        total: props.cartTotal,
        bracelets: props.cartItems
      })
      .then((res) => {
        console.log("Response->Data->Name in Res: ", res.config);
      })
      .catch((err) => {
        console.log("Error in Send(): ", err);
      });
    }
      else {
        invalidMessage = 'Email format not valid'
      }
  };

  const handleClick = (value: any) => setStateLocation(value);

  return (
    <>
      <form onSubmit={(e: FormEvent) => handleSubmit(e)} data-testid="form">
        <Grid
          container
          direction="column"
          justify="space-around"
          alignContent="space-around"
        >
          {/*GRID ITEM 
           -- NAME INPUT */}
          <Grid item>
            <FormControl className={classes.formTextFields}>
              <TextField
                required
                id="name"
                label="First And Last Name"
                onChange={handleChange("name")}
                value={values.name}
              />
            </FormControl>
          </Grid>
          {/*GRID ITEM 
           -- NAME INPUT */}
          <Grid item>
            <FormControl className={classes.formTextFields}>
              <TextField
                required
                id="email"
                label="Email Address"
                onChange={handleChange("email")}
                value={values.email}
              />
            </FormControl>
          </Grid>

          {/*GRID ITEM 
           -- STREET ADDRESS INPUT */}
          <Grid item>
            <FormControl className={classes.formTextFields}>
              <TextField
                required
                id="streetaddress"
                label="Street Address"
                onChange={handleChange("streetAddress")}
                value={values.streetAddress}
              />
            </FormControl>
          </Grid>
          {/*GRID ITEM 
           -- STATE SELECTION INPUT */}
          <Grid item>
            <div
              style={{
                marginTop: "30px",
                marginBottom: "0px",
                textAlign: "left",
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={stateLocation} 
                helperText="Select your state"
                variant="outlined"
                size="small"
                style={{ width: "140px" }}
              >
                {/* Mapping the Constant Stateloactions, and the individual 
                values are of type {label:string, value:string} */}
                {StateLocations.map(
                  (location: { label: string; value: string }) => (
                    <MenuItem
                      key={location.value}
                      value={location.value}
                      onClick={() => handleClick(location.value)}
                      // onClick={() => handleChange("stateLocation")}
                    >
                      {location.label}
                    </MenuItem>
                  )
                )}
                {values.stateLocation}
              </TextField>
            </div>
          </Grid>
          {/*GRID ITEM
           */}
          <Grid item>
            <FormControl className={classes.formTextFields}>
              <TextField
                required
                id="zipcode"
                label="Zipcode"
                onChange={handleChange("zipcode")}
                value={values.zipcode}
              />
            </FormControl>
          </Grid>
          {/*GRID ITEM 
           -- STRIPE.JS CARD ELEMENT INPUT */}
          <Grid item xs={12}>
            <FormControl
              className={classes.formTextFields + " " + classes.borderStyle}
            >
              <CardElement />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={formFinished}
              data-testid="submit"
              variant="outlined"
              className={classes.submitBtn}
              onClick={() => send()}
            >
              Sumbit Payment
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default injectStripe(CheckoutForm);
