import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Link } from "react-router-dom"
import { IRoute, IMenuOption } from "../Header"
import { MouseEvent } from "../../../App"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import Grid from "@material-ui/core/Grid/Grid"
import { connect } from "react-redux"
import { ICartItems } from "../../../../Interfaces"

interface IProps {
  value: number
  setValue: (value: number) => number
  selectedIndex: number
  routes: IRoute[]
  anchorEl?: HTMLElement
  openMenu: boolean
  menuOptions: IMenuOption[]
  handleClose: () => void
  handleMenuItemClick: (e: MouseEvent, i: number) => void
  handleChange: () => any,
  cartItems: ICartItems[]
}

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    ...theme.typography,
    marginLeft: "auto", //pushes the tab container to the right as much as possible
  },
  tab: {
    ...theme.typography,
    minWidth: 10,
    marginRight: "55px",
    fontFamily: "Raleway",
    // color: 'white',
    fontSize: "1.1rem",
    // fontWeight: 500,
    textTransform: "none", // Remove the button transformation styles
    "&:hover": {
      color: "white",
    },
  },
  indicator: {
    height: "3.7px",
  },
  shoppingcart: {
    left: "0",
    color: theme.palette.common.antiqueWhite,
    marginTop: "auto",
    marginBottom: "auto",
    padding: "5px 15px",
    borderLeft: `2.7px solid ${theme.palette.common.dimegray}`,
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.common.orange,
      borderLeft: "2.7px solid white",
    },
  },
  shopcartBtn: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    height: "45px",
    color: "white",
  },
  menu: {
    backgroundColor: theme.palette.common.antiqueWhite,
    color: theme.palette.common.brown,
    // boxShadow: "0px 0px 0px transparent",
  },
  menuItem: {
    ...theme.typography,
    fontWeight: 400,
    opacity: 0.7,
    fontSize: "1rem",
    textTransform: "none",
    "&:hover": {
      opacity: 1,
    },
  },
}))

function Headertabs(props: IProps) {
  const classes = useStyles() //useStyles is a funct that will build the classes object

  const handleChange = (e: any, value: number) => props.setValue(value)

  const shoppingcartIcon = (
    <Grid container justify='center' alignContent='flex-start'>
        <ShoppingCartIcon className={classes.shoppingcart} /><div style={{marginLeft: '-12px', color: '#fff'}}>{props.cartItems.length}</div>
    </Grid>
  )

  return (
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        classes={{ indicator: classes.indicator }}
      >
        {props.routes.map((route: IRoute) => (
          <Tab
            key={`${route.link} ${classes.tab}`}
            aria-owns={route.ariaOwns}
            aria-haspopup={props.anchorEl ? "true" : undefined}
            className={classes.tab}
            component={Link}
            to={route.link}
            onMouseOver={route.mouseOver}
            label={route.name === "Cart" ? shoppingcartIcon : route.name}
          />
          // {route.link === "'/shoppingcart'" ? shoppingcartIcon : null}
        ))}
      </Tabs>
    </>
  )
}
const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(Headertabs)
