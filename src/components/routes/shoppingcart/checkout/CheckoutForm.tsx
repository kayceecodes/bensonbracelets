import React, { useState } from "react"

import { ChangeEvent, FormEvent } from "../../../App"

import FormControl from "@material-ui/core/FormControl/FormControl"
import Grid from "@material-ui/core/Grid/Grid"
import TextField from "@material-ui/core/TextField/TextField"
import makeStyles from "@material-ui/core/styles/makeStyles"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"

import {
  injectStripe,
  ReactStripeElements,
  CardElement,
} from "react-stripe-elements"
import Button from "@material-ui/core/Button/Button"

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
    margin: "15px 0px",
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
    textTransform: 'none',
    color: theme.palette.common.orange,
    backgroundColor: theme.palette.common.offWhite
  },
}))

interface State {
  name: string
  stateLocation: string
  streetAddress: string
  zipcode: string
}

const stateLocations = [
  { value: "Alabama", label: "AL" },
  { value: "Alaska", label: "AK" },
  { value: "Arizona", label: "AZ" },
  { value: "Arkansas", label: "AR" },
  { value: "California", label: "CA" },
  { value: "Colorado", label: "CO" },
  { value: "Connecticut", label: "CT" },
  { value: "Delaware", label: "DE" },
  { value: "Florida", label: "FL" },
  { value: "Georgia", label: "GA" },
  { value: "Hawaii", label: "HI" },
  { value: "Idaho", label: "ID" },
  { value: "Illinois", label: "IL" },
  { value: "Indiana", label: "IN" },
  { value: "Iowa", label: "IA" },
  { value: "Kansas", label: "KS" },
  { value: "Kentucky", label: "KY" },
  { value: "Louisiana", label: "LA" },
  { value: "Maine", label: "ME" },
  { value: "Maryland", label: "MD" },
  { value: "Massachusetts", label: "MA" },
  { value: "Michigan", label: "MI" },
  { value: "Minnesota", label: "MN" },
  { value: "Mississippi", label: "MS" },
  { value: "Missouri", label: "MO" },
  { value: "Montana", label: "MT" },
  { value: "Nebraska", label: "NE" },
  { value: "Nevada", label: "NV" },
  { value: "New Hampshire", label: "NH" },
  { value: "New Jersey", label: "NJ" },
  { value: "New Mexico", label: "NM" },
  { value: "New York", label: "NY" },
  { value: "North Carolina", label: "NC" },
  { value: "North Dakota", label: "ND" },
  { value: "Ohio", label: "OH" },
  { value: "Oklahoma", label: "OK" },
  { value: "Oregon", label: "OR" },
  { value: "Pennsylvania", label: "PA" },
  { value: "Rhode Island", label: "RI" },
  { value: "South Carolina", label: "SC" },
  { value: "South Dakota", label: "SD" },
  { value: "Tennessee", label: "TN" },
  { value: "Texas", label: "TX" },
  { value: "Utah", label: "UT" },
  { value: "Vermont", label: "VT" },
  { value: "Virginia", label: "VA" },
  { value: "Washington", label: "WA" },
  { value: "West Virginia", label: "WV" },
  { value: "Wisconsin", label: "WI" },
  { value: "Wyoming", label: "WY" },
]

export const CheckoutForm = (props: IFormProps) => {
  const [name, setName] = useState<string>("")
  const [stateLocation, setStateLocation] = useState<string>("")
  const [streetAddress, setStreetAddress] = useState<string>("")
  const [zipcode, setZipcode] = useState<number | string>("")
  const [amount, setAmount] = useState<number>()

  const [values, setValues] = React.useState<State>({
    name: "",
    stateLocation: "",
    streetAddress: "",
    zipcode: "",
  })

  const classes = useStyles()

  const handleChange = (prop: keyof State) => (event: ChangeEvent) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    try {
      let token = await (props.stripe !== null 
        ? props.stripe.createToken({ name: name }) : null)
      console.log(token)
    } catch (e) {
      throw e
    }
  }

  const handleClick = (value: any) => setStateLocation(value)

  return (
    <>
      <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
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
                {/* stateloaction map() objects to each menu item for this Select-Textfield  */}
                {stateLocations.map(
                  (stateObj: { label: string; value: string }) => (
                    <MenuItem
                      key={stateObj.value}
                      value={stateObj.value}
                      onClick={() => handleClick(stateObj.value)}
                    >
                      {stateObj.label}
                    </MenuItem>
                  )
                )}
                {stateLocation}
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
          <Button variant='outlined' className={classes.submitBtn}>
            Sumbit Payment
          </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps {
}
//Allow for props to be passed on to CheckoutForm from Stripe API wthout passing them in directly ourselves

export default injectStripe(CheckoutForm)
