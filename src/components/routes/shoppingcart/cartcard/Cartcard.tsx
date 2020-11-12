import React from "react"

import Seashells from "../../../../images/bracelets/bracelet1.jpg"

import { ICartItems } from "../../../../Interfaces"

import Grid from "@material-ui/core/Grid/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button"
import Icon from "@material-ui/core/Icon/Icon"

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
  cartCardContainer: {
    border: "0.5px solid lightGray",
    borderRadius: "4px",
    boxShadow: "0px 0px 8px 10px #efefef50",
    height: "118px",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      maxWidth: "750px",
    },
  },
  cartItemImgContainer: {
    height: "100%",
  },
  cartItemImg: {
    width: "50px",
    [theme.breakpoints.up("md")]: {
      width: "70px",
    },
  },
  cartItemBtn: {
    // border: "0.5px solid lightGray",
    // borderRadius: "5px",
    // padding: "4px 8px 2px",
    margin: "0px 2px",
    color: `${theme.palette.common.slateTan}`,
  },
}))

export default function Cartcard(props: ICartItems) {
  const classes = useStyles()

  return (
    <Grid container direction="row" className={classes.cartCardContainer}>
      <Grid item xs={3}>
        <Grid
          container
          className={classes.cartItemImgContainer}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <img
              className={classes.cartItemImg}
              src={props.src}
              alt="Items in card"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid
          container
          direction="row"
          alignContent="center"
          justify="space-around"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Typography variant="body1">
              {props.name} <small style={{ color: "gray" }}>{props.size + '"'}</small>
            </Typography>

            <Typography variant="body1">{props.price}</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignContent="center"
              style={{ height: "100%" }}
            >
              {/* <div className={classes.cartItemBtn}>
                <Icon>add</Icon>
              </div>
              <div className={classes.cartItemBtn}>
                <Icon>remove</Icon>
              </div> */}
              <Button variant="outlined" color="primary" className={classes.cartItemBtn}>
                <Icon>add</Icon>
              </Button>
              <Button variant="outlined" color="primary" className={classes.cartItemBtn}>
                <Icon>remove</Icon>
              </Button>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="body2">
              Qty <br />{props.quantity}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          position: "absolute",
          color: "lightGray",
          top: "3px",
          right: "4px",
        }}
      >
        <Icon>close</Icon>
      </div>
    </Grid>
  )
}

/*
add and delete buttons
delet items
size should be separated
estimated Delivery Time
Totals

*/
