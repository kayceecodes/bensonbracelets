import React, { Dispatch } from "react"
import { motion, MotionStyle } from "framer-motion"
import { IPageAnimations, IMotions, ICartItems } from "../../../Interfaces"
import { connect } from "react-redux"
import * as actionTypes from "../../../store/actions/index"
import Cartcard from "./cartcard/Cartcard"
import CheckoutForm from "./checkout/CheckoutForm"
import Grid from "@material-ui/core/Grid/Grid"
import Typography from "@material-ui/core/Typography/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"

interface IProps {
  pageStyle: MotionStyle
  pageAnimations: IPageAnimations
  motions: IMotions
  cartItems: ICartItems[]
  addItem: () => any
  removeItem: () => any
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
  header: {
    borderBottom: `2px solid ${theme.palette.common.antiqueWhite}`,
    padding: '0px 30px 30px',
    width: '190px',
    textAlign: 'center',
    margin: '0 auto 70px',
  },
  shoppingcartContainer: {
    width: "95%",
    margin: "0px auto",
    maxWidth: '1150px',
    [theme.breakpoints.up("lg")]: {
      width: "85%",
    },
  },
}))

const Shoppingcart = (props: IProps) => {
  const classes = useStyles()

  return (
    <motion.div
      style={props.pageStyle}
      initial={props.motions.initial}
      animate={props.motions.animate}
      exit={props.motions.exit}
      variants={props.pageAnimations.variants}
      transition={props.pageAnimations.transition}
    >
      <div className={classes.sectionMargin} />
      <Grid container justify="center" className={classes.header} >
        <Typography variant="h3">Checkout</Typography>
      </Grid>
      <div className={classes.sectionMargin} />

      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.shoppingcartContainer}
      >
        <Grid item xs={12} md={6}>
          <Grid container justify='center'>
          {props.cartItems.map((item: ICartItems) => (
            <Cartcard
              key={item.name + item.size}
              name={item.name}
              quantity={item.quantity}
              size={item.size}
              price={item.price}
              src={item.src}
            />
          ))}
          </Grid>
        </Grid>

        <div className={classes.sectionMargin} />
        <div className={classes.sectionMargin} />

        <Grid item xs={12} md={6}>

          <CheckoutForm />
        </Grid>
      </Grid>
    </motion.div>
  )
}

const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addItem: () => dispatch({ type: actionTypes.addToCart }),
  removeItem: () => dispatch({ type: actionTypes.removeFromCart }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shoppingcart)
