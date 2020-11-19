import React, { CSSProperties, useEffect } from "react"
import { useHistory } from "react-router-dom"

import {
  IBraceletData,
  IPageAnimations,
  IMotions,
  ICartItems,
} from "../../../../Interfaces"

import makeStyles from "@material-ui/core/styles/makeStyles"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"
import Grid from "@material-ui/core/Grid/Grid"
import Icon from "@material-ui/core/Icon/Icon"
import Typography from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

import { motion } from "framer-motion"

import theme from "../../../ui/Theme"
import * as actionTypes from "../../../../store/actions/actionTypes"
import { ChangeEvent } from "../../../App"
import { connect, useDispatch } from "react-redux"

import { Dispatch } from "redux"
import { addToCart } from "../../../../store/actions"
import { addQuantityToItem } from "../../../../store/actions/cart"
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

interface IDisplayItemProps {
  setValue: React.Dispatch<React.SetStateAction<number>>
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  pageStyle: CSSProperties
  pageAnimations: IPageAnimations
  motions: IMotions
  addToCart?: (cartItems: ICartItems) => any
}

interface IGlobalState {
  cartItems: ICartItems[]
}

// interface IProps {
//   setValue: React.Dispatch<React.SetStateAction<number>>
//   setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
//   pageStyle: CSSProperties
//   pageAnimations: IPageAnimations
//   motions: IMotions
//   addToCart?: (cartItems: ICartItems) => any

//   name: IBraceletData["name"]
//   price: IBraceletData["price"]
//   src: IBraceletData["src"]
//   category: IBraceletData["category"]

//   cartItems: ICartItems[]
// }

//Create an intersection instead of a type that takes only one interface at a time.
//Intersections truly combines types for a component
type IProps = IDisplayItemProps & IBraceletData & IGlobalState

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },
  arrow: {
    fontSize: "1.6rem",
  },
  boxShadows: {
    boxShadow: "0px 0px 8px 10px #efefef50",
  },
  itemImg: {
    width: "120px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 85,
    [theme.breakpoints.up("sm")]: {
      width: 100,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  quantityControl: {
    marginTop: "15px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  addShoppingcartBtn: {
    marginTop: "5px",
    padding: "7px 12px",
  },
  goToCartBtn: {
    marginTop: "5px",
    fontSize: "0.6rem",
    textTransform: "none",
    color: theme.palette.common.slateTan,
  },
  itemDetailsOptions: {
    // height: '320px',
  },
  itemName: {
    width: "100%",
    marginTop: "8px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "6px",
    },
  },
  itemDescription: {
    maxWidth: 180,
    textAlign: "right",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 270,
    },
  },
  outlined: {
    color: theme.palette.common.dimegray,
  },
}))

function DisplayItem(props: IProps) {
  const classes = useStyles()
  const dispatch: Dispatch<any> = useDispatch()
  const matches = {
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  } // If query matches sm,md,lg or xl then we'll use the 'matches' object to change styles
  const [loading, setLoading] = React.useState(false)
  const [values, setValues] = React.useState<ICartItems>({
    name: props.name,
    size: 0,
    quantity: 0,
    price: props.price,
    src: props.src,
    id: "",
  })

  const history = useHistory() //History obj from react-router

  const goBackHandle = () => {
    history.push("/collections")
  }

  const handleChange = (prop: keyof ICartItems, event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }
 
  const onAddToCart = (newItem: ICartItems) => {
    newItem = {
      ...newItem,
      id:
        values.name +
        values.size /*JS automatically adds as if size is a string */,
    }
    /*Pull all current ids in cartItems*/
    const ids = props.cartItems.map((item) => item.id)

    /*Add quantities through dispatch(addQty) only if ids match, 
    if not then dispatch(addToCart) for a new item with a different size */
    ids.includes(newItem.id) ? dispatch(addQuantityToItem(newItem)) : dispatch(addToCart(newItem))
  }

  const setProgress = () => setTimeout(() => setLoading(false), 1000)

  useEffect(() => {
    props.setValue(1)
  })

  return (
    <>
      <motion.div
        style={props.pageStyle} // Style of the page as a container
        initial={props.motions.initial}
        animate={props.motions.animate}
        exit={props.motions.exit}
        variants={props.pageAnimations.variants} //pageAnimations obj broken up to 2 nested objs, variant & transitions
        transition={props.pageAnimations.transition}
      >
        <Grid container alignItems="center" direction="column">
          <div className={classes.sectionMargin} />
          <Grid item style={{ flexGrow: 1 }} xs={12}>
            <Grid
              container
              direction="row"
              spacing={matches.sm ? 8 : 3}
              justify="space-between"
            >
              <Grid item xs={1} sm={1}>
                {/*Left Side of container - the Back Arrow */}
                <Typography variant="caption">
                  <Button onClick={() => goBackHandle()}>
                    <Icon className={classes.arrow}>arrow_back_ios</Icon>
                  </Button>
                </Typography>
              </Grid>
              <Grid
                item
                xs={10}
                sm={9}
                style={{
                  borderBottom: `3px solid ${theme.palette.common.antiqueWhite}`,
                }}
              >
                {/* Right Side of Cantainer - The Item's Name */}
                <Typography variant="h3" className={classes.itemName}>
                  {props.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.sectionMargin} />{" "}
          {/*Separate Name from item's img and details*/}
          <Grid item>
            {/* Second Item in the main container of Displayitem component - img left & details/options right */}
            <Grid container direction="row" alignItems="center">
              <Grid item sm={6}>
                {/* LEFT SIDE OF ITEM - Img Of Bracelet */}
                <img
                  src={props.src}
                  className={classes.itemImg}
                  alt="bracelet displayed"
                />{" "}
                {/* Img Of Item - Bracelet */}
              </Grid>
              <Grid item sm={4}>
                {/* RIGHT SIDE OF ITEM - Details/Options */}
                <Grid
                  container
                  alignItems="flex-end"
                  justify="space-around"
                  direction="column"
                  className={classes.itemDetailsOptions}
                >
                  <Grid item>
                    <div className={classes.sectionMargin} />
                  </Grid>
                  {/* PRICE - CALCULATED */}
                  <Grid item>
                    <Typography variant="body1">
                      Price: {props.price}
                    </Typography>
                  </Grid>
                  {/* SIZE - CHOOSE SIZE*/}
                  <Grid item>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Size
                      </InputLabel>
                      <Select
                        labelId="size-label-id"
                        id="size"
                        value={values.size}
                        onChange={(event: any) => handleChange("size", event)}
                        label="Size"
                        className={classes.outlined + " " + classes.boxShadows}
                      >
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={4.5}>4.5"</MenuItem>
                        <MenuItem value={5}>5"</MenuItem>
                        <MenuItem value={5.5}>5.5"</MenuItem>
                        <MenuItem value={6}>6"</MenuItem>
                        <MenuItem value={6.5}>6.5"</MenuItem>
                        <MenuItem value={7}>7"</MenuItem>
                        <MenuItem value={7.5}>7.5"</MenuItem>
                        <MenuItem value={8}>8"</MenuItem>
                        <MenuItem value={8.5}>8.5"</MenuItem>
                        <MenuItem value={9}>9"</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    {/* QUANTITY - INPUT */}
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Qty
                      </InputLabel>
                      <Select
                        labelId="quantity-label-id"
                        id="quantity"
                        value={values.quantity}
                        onChange={(
                          event: React.ChangeEvent<{ value: unknown }>
                        ) => handleChange("quantity", event)}
                        label="Qty"
                        className={classes.outlined + " " + classes.boxShadows}
                      >
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* SHOPPING CART - BTN - ADD TO CART FUNCTION
                      ADDS CART ITEMS TO REDUCER
                  */}

                  <Grid item>
                    {loading === true ? (
                      <Button
                        className={classes.addShoppingcartBtn}
                        variant="outlined"
                        color="primary"
                      >
                        <CircularProgress size={24} />
                      </Button>
                    ) : (
                      <Button
                        className={classes.addShoppingcartBtn}
                        variant="outlined"
                        color="primary"
                        disabled={
                          values.size === 0 || values.quantity === 0
                            ? true
                            : false
                        }
                        onClick={() => {
                          onAddToCart(values)
                          setLoading(true)
                          setProgress()
                        }}
                      >
                        <Icon>add_shopping_cart</Icon>
                      </Button>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.goToCartBtn}
                      onClick={() => {
                        history.push("/shoppingcart")
                        props.setValue(3)
                      }}
                    >
                      Go to <Icon>shopping_cart</Icon>
                    </Button>
                  </Grid>
                  {/* QUANTITY CONTROLS */}
                  {/* <Grid item className={classes.quantityControl}>
                    <Typography variant="body1">
                      <Grid container>
                        <Grid item onClick={() => addOneToQty()}>
                          <Icon>arrow_left</Icon>
                        </Grid>
                        <Grid item>Qty: {quantity}</Grid>
                        <Grid item onClick={() => addOneToQty()}>
                          <Icon>arrow_right</Icon>
                        </Grid>
                      </Grid>
                    </Typography>
                  </Grid> */}
                  <div className={classes.sectionMargin} />
                  <Grid item>
                    <Typography variant="body1">
                      <strong>{props.category}</strong>
                    </Typography>
                  </Grid>
                  <Grid container justify="flex-end">
                    <Grid item xs={12}>
                      <Typography
                        className={classes.itemDescription}
                        variant="body1"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus ullam, ipsum deleniti asperiores
                        dignissimos harum? Totam, provident sed.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.sectionMargin} />
          <div className={classes.sectionMargin} />
          <div className={classes.sectionMargin} />
          <div className={classes.sectionMargin} />
        </Grid>
      </motion.div>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(DisplayItem)
