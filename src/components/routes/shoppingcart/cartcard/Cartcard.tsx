import React, { useEffect, useState } from "react"

import Seashells from "../../../../images/bracelets/bracelet1.jpg"

import { ICartItems } from "../../../../Interfaces"

import Grid from "@material-ui/core/Grid/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button"
import Icon from "@material-ui/core/Icon/Icon"
import Aos from "aos"

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
    boxShadow: "0px 0px 8px 10px #efefef99",
    height: "130px",
    position: "relative",
    maxWidth: '600px',
    margin: '10px auto 25px',
    backgroundColor: 'white',
    [theme.breakpoints.up("md")]: {
      maxWidth: "750px",
    },
  },
  cartItemImgContainer: {
    height: "100%",
  },
  cartItemImg: {
    width: "50px",
    [theme.breakpoints.up("lg")]: {
      width: "70px",
    },
  },
  cartItemBtn: {
    // border: "0.5px solid lightGray",
    // borderRadius: "5px",
    margin: "0px 2px",
    // fontSize: '0.4rem',
    boxShadow: '0px 0px 8px rgba(0,0,0,0.05)',
    // padding: "2px 0px 2px",
    color: `${theme.palette.common.slateTan}`,
    [theme.breakpoints.up("lg")]: {
      width: "70px",
      // padding: "1px 2px 1px",
    },
  },
}))

export default function Cartcard(props: ICartItems) {
  const classes = useStyles()
  const [mounted, setMounted] = useState(false)

  const fixedStrLength = (str: [string], numOfChar: number) => {
    let newString: (string | undefined)[];
    /* Only proceed if the length is larger than what you want */
    if(str.length < numOfChar) { /*If number of characters in str are larger than the desired, entered numOFchar */
      /* than fix that desired number down 3 and replace with strings */  
      newString = str.map( (value: string, i: number) => {
          if(i < (numOfChar - 3)) {
            return value
          }
      })
      return newString.concat('...')
   } 
}
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  setTimeout( () => setMounted(true), 1000)

  return (
    <Grid data-aos={mounted === false ? 'fade-right' : 'none'} container direction="row" className={classes.cartCardContainer}>
      <Grid item xs={2} md={3}>
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
      <Grid item xs={10} md={8}>
        <Grid
          container
          direction="row"
          alignContent="center"
          justify="space-around"
          style={{ height: "100%" }}
        >
          {/* Name of Item
               i.e. props.name from global state (redux) */}
          <Grid item>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Nunito', letterSpacing: '0.5px'}} variant="body2">
              {fixedStrLength([props.name], 18)} <span style={{ color: "#afafaf", fontSize: '0.68rem', letterSpacing: '0.5px', display: 'inline', }}>{props.size + '"'}</span>
            </Typography>

            <Typography variant="body2">{props.price}</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignContent="center"
              style={{ height: "100%" }}
            >
              <Button variant="outlined" color="primary" className={classes.cartItemBtn}>
                <Icon>add</Icon>
              </Button>
              <Button variant="outlined" color="primary" className={classes.cartItemBtn}>
                <Icon>remove</Icon>
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography style={{letterSpacing: '0.5px'}} variant="body2">
              <strong>Qty</strong> <br />{props.quantity}
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