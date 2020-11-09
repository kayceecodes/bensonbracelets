import React, { Dispatch } from "react"
import { motion, MotionStyle } from "framer-motion"
import { IPageAnimations, IMotions, ICartItems } from "../../../Interfaces"
import { connect } from "react-redux"
import * as actionTypes from "../../../store/actions/index"
import Cartcard from "./cartcard/Cartcard"

interface IProps {
  // value: number,
  // setValue: React.Dispatch<React.SetStateAction<number>>
  // selectedIndex: number,
  // setSelectedIndex: (value: number) => void
  // routes?: IRoute[]
  // anchorEl?: HTMLElement,
  // openMenu: boolean,
  // menuOptions: IMenuOption[],
  // handleClose: () => void,
  // handleMenuItemClick:  (e: MouseEvent, i: number) => void,
  // handleChange: () => any,
  pageStyle: MotionStyle
  pageAnimations: IPageAnimations
  motions: IMotions
  cartItems: ICartItems[]
  addItem: () => any
  removeItem: () => any
}

const Shoppingcart = (props: IProps) => {
  return (
    <motion.div
      style={props.pageStyle}
      initial={props.motions.initial}
      animate={props.motions.animate}
      exit={props.motions.exit}
      variants={props.pageAnimations.variants}
      transition={props.pageAnimations.transition}
    >
      {props.cartItems.map((item: ICartItems) => (
        <Cartcard
          key={item.name + item.size}
          name={item.name}
          quantity={item.quantity}
          size={item.size}
          price={item.price}
        />
      ))}
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
