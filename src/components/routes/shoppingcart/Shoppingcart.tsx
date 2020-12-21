import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { motion, MotionStyle } from "framer-motion"
import { IPageAnimations, IMotions, ICartItems } from "../../../Interfaces"
import Item from "./item/Item"
import CheckoutForm from "./checkout/CheckoutForm"
import Grid from "@material-ui/core/Grid/Grid"
import Typography from "@material-ui/core/Typography/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"
import useTheme from "@material-ui/core/styles/useTheme"

interface IProps {
  pageStyle: MotionStyle
  pageAnimations: IPageAnimations
  motions: IMotions
  cartItems: ICartItems[]
  cartTotal: number
}
const useStyles = makeStyles((theme) => ({
  root: {},
  sectionMargin: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "35px",
    },
  },
  heightOfContainer: {
    height: "100%",
  },
  header: {
    borderBottom: `2px solid ${theme.palette.common.antiqueWhite}`,
    padding: "0px 30px 30px",
    width: "190px",
    textAlign: "center",
    margin: "0 auto 70px",
  },
  shoppingcartContainer: {
    width: "95%",
    margin: "0px auto",
    maxWidth: "1150px",
    [theme.breakpoints.up("lg")]: {
      width: "85%",
    },
  },
  totalItems: {
    textAlign: "left",
    fontFamily: "Nunito",
    color: "rgba(54, 68, 92, 1)",
  },
  scrollOverflow: {
    overflow: "auto",
    height: "350px",
    marginTop: "20px",
    border: `1px solid ${theme.palette.common.dimegray}10`,
    backgroundColor: theme.palette.common.offWhite,
    borderRadius: "4px",
  },
  absolutePos: {
    position: "absolute",
    right: "30px",
    top: 0,
  },
  bottomBorder: {
    marginTop: "25px",
    border: `0.5px solid ${theme.palette.common.orange}`,
    width: "280px",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "450px",
    },
  },
}))

const Shoppingcart = (props: IProps) => {
  const classes = useStyles()
  const theme = useTheme()
  let [numberOfItems, setNumberOfItems] = useState(0)
  const matches = {
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  } // If query matches sm,md,lg or xl then we'll use the 'matches' object to change styles

  const getQtyTotal = () => {
    numberOfItems = 0

    for (let obj of props.cartItems) {
      numberOfItems += obj.quantity
    }
    setNumberOfItems(numberOfItems)
  }

  useEffect(() => {
    getQtyTotal()
  })

  return (
    <motion.div
      className={matches.md ? classes.heightOfContainer : ""}
      style={props.pageStyle}
      initial={props.motions.initial}
      animate={props.motions.animate}
      exit={props.motions.exit}
      variants={props.pageAnimations.variants}
      transition={props.pageAnimations.transition}
    >
      <div className={classes.sectionMargin} />
      <Grid container justify="center" className={classes.header}>
        <Typography variant="h3">Checkout</Typography>
      </Grid>
      <div className={classes.sectionMargin} />

      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.shoppingcartContainer}
        style={{ position: "relative" }}
      >
        {/*CONTAINER will hold the
         CART ITEM CARDS &
         CHECKOUTFORM  components
         */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            spacing={4}
          >
            {/* CART TOTAL */}

            <Grid
              item
              className={classes.totalItems}
              style={{ textAlign: "left" }}
            >
              {"Cart Total: $" + props.cartTotal.toFixed(2)}
              <br />
              {"Total Items in Cart: "}
                <span data-testid="cart-total-qty">{numberOfItems}</span>
                {" items"}
            </Grid>
            <div className={classes.bottomBorder} />
            <Grid item xs={12} style={{ width: "100%" }}>
              <div className={classes.scrollOverflow}>
                {/* Cart is either empty or has items */}
                {props.cartItems.length > 0 ? (
                  props.cartItems.map((item: ICartItems, index) => (
                    <Item
                      key={item.name + item.size + index}
                      getQtyTotal={getQtyTotal}
                      name={item.name}
                      quantity={item.quantity}
                      size={item.size}
                      price={item.price}
                      src={item.src}
                      id={item.id}
                    />
                  ))
                ) : (
                  <span className={classes.totalItems}>Your Cart Is Empty</span>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div className={classes.sectionMargin} />
        <div className={classes.sectionMargin} />
        {/* CHECKOUTFORM */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" alignContent="center">
            <CheckoutForm />
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  )
}

const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems,
  cartTotal: state.cart.cartTotal,
})

export default connect(mapStateToProps)(Shoppingcart)
