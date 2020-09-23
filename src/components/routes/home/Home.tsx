import React, { CSSProperties, FunctionComponent } from "react";
import { motion } from "framer-motion";

import { IPageAnimations, IMotions } from "../../../Interfaces";
import { Parallax } from "react-parallax";

import HeroMobileImg5 from "../../../images/bracelets/heroImgMobile5.jpg";
import HeroParallax from "../../../images/bracelets/bensonbracelet-hero-parallax.jpg";
import Bracelet1 from "../../../images/bracelets/bracelet1.jpg";
import Bracelet2 from "../../../images/bracelets/bracelet2.jpg";
import Bracelet3 from "../../../images/bracelets/bracelet3.jpg";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography";

import Aos from 'aos';
import "aos/dist/aos.css";

interface IProps {
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations;
  motions: IMotions;
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
  button: {
    textTransform: "none",
    letterSpacing: "2.8px",
    backgroundColor: "rgb(0, 0, 0, 0.005)",
    color: "white",
    border: "2.7px solid white",
    borderRadius: "0.3px",
    position: "fixed",
    left: "50%",
    zIndex: 4,
    transform: "translate(-50%, -50%)",
    textShadow: "0px 0px 8px rgba(0,0,0,0.99)",
    [theme.breakpoints.up("sm")]: {
      font: "1.25rem Raleway",
      top: "320px",
      padding: "0 70px",
    },
    [theme.breakpoints.down("sm")]: {
      font: "0.8rem Raleway",
      top: "170px",
      padding: "0 45px",
    },
    // boxShadow: '0px 0px 17px rgba(0, 0, 0, 1)',
  },
  buttonWrapper: {
    color: "white",
  },
  wrapper: {
    top: 0,
    width: "100%",
    position: "relative",
    zIndex: 0,
    opacity: 0.95,
    [theme.breakpoints.up("sm")]: {
      overflow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      height: "335px",
    },
  },
  heroCompanyName: {
    letterSpacing: " 0.85px",
    wordSpacing: "8px",
    position: "fixed",
    right: "40px",
    color: theme.palette.common.orange,
    textShadow: "0px 0px 5px rgba(0,0,0,0.99)",
    // fontFamily: 'Abril Fatface',
    zIndex: 3,
    margin: "0px 0px 0px 0px",
    borderBottom: "2px solid white",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      top: "540px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.45rem",
      top: "290px",
      letterSpacing: "0.3px",
      wordSpacing: "2px",
      right: "5%",
    },
  },

  header: {
    fontFamily: "Raleway",
    color: "rgba(74,63,53, 0.85)",
    marginTop: "15px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
  paragraph: {
    font: "1.4rem Raleway",
    color: "rgba(74,63,53, 0.85)",
    letterSpacing: "0.5px",
    maxWidth: "850px",
    margin: "80px auto 0px",
    paddingBottom: "80px",
    borderBottom: `3px solid ${theme.palette.common.antiqueWhite}`,
    [theme.breakpoints.up("sm")]: {
      margin: "140px auto 90px",
      fontSize: "1.10rem",
      lineHeight: "1.7",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "80px auto",
      fontSize: "0.85rem",
      lineHeight: 1.8,
      width: "85%",
    },
  },
  braceletsContainer: {
    margin: "70px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "5px auto",
    },
  },
  braceletImgs: {
    // width: '60%',
    // width: '200px', //TEST OUT XS and the GRID SYSTEM
    [theme.breakpoints.up("sm")]: {
      width: "280px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
    },
  },
  featuredPricesBtn: {
    border: "2px solid transparent",
    "&:hover": {
      border: `2px solid ${theme.palette.common.slateTan}`,
    },
  },
  featuredPrices: {
    position: "absolute",
    top: "50%",
    left: "43%",
    color: theme.palette.common.dimegray,
    // fontFamily: 'Raleway',
    fontSize: "0.85rem",
    fontWeight: 400,
    textAlign: "center",
    margin: "0px auto",
    // border: `2px solid ${theme.palette.common.dimegray}`,
  },

}));

// const Parallaxpic: FunctionComponent<IParallaxMediaQuery> = (props) => {
//   return (
//   <div>
//     <Parallax bgImage={props.src} >
//     {props.children}
//     </Parallax>
//   </div>)
// };

export default function Home(props: IProps) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const dimegrayOverlay: CSSProperties = {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.common.dimegray,
    opacity: 0.6,
    zIndex: 3,
  };

  const consoleValue = () =>
    console.log("Console Value: 'sm'", theme.breakpoints.up("sm"));
  console.log("Console Value: 'md'", theme.breakpoints.up("md"));
  console.log("Console Value: 'lg'", theme.breakpoints.up("lg"));

  return (
    <motion.div
      style={props.pageStyle}
      initial={props.motions.initial}
      animate={props.motions.animate}
      exit={props.motions.exit}
      variants={props.pageAnimations.variants}
      transition={props.pageAnimations.transition}
    >
      {/* TIP */}
      <div
        className={classes.wrapper}
        style={{ overflow: `${matches ? "hidden" : ""}` }}
      >
        <div style={dimegrayOverlay} />
        <Parallax
          strength={630}
          style={{
            height: "600px",
            minWidth: `${matches ? "800px" : "1400px"}`,
          }} //hide scroll bar along with extra space
          bgImage={matches ? HeroMobileImg5 : HeroParallax}
        >
          <Button className={classes.button}>
            <p>Featured</p>
          </Button>
          <p className={classes.heroCompanyName}>Benson Bracelets</p>
        </Parallax>
      </div>

      <div className={classes.sectionMargin} />

      <Grid xs={12} container direction="column" justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.header} component="h3">
            About Benson Bracelets
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <p className={classes.paragraph}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima maxime temporibus at deleniti eum sapiente vitae iure velit
            maiores aliquid ea quo pariatur quidem reiciendis quas, consequatur
            corrupti officiis earum corporis recusandae quasi consequuntur nisi
            dolorem. Odit, nisi. Id.
          </p>
        </Grid>
        <Grid
          container
          direction="row"
          alignContent="center"
          justify="space-around"
          className={classes.braceletsContainer}
          xs={12}
        >
          <Grid data-aos='fade-up' item xs={10} sm={4} style={{ position: "relative" }}>
            <Button className={classes.featuredPricesBtn}>
              <Typography
                className={classes.featuredPrices}
                component="p"
                paragraph={true}
              >
                $9.99
              </Typography> 
              <img src={Bracelet1} className={classes.braceletImgs} />
            </Button>
          </Grid>
          <Grid data-aos='fade-up' item xs={10} sm={4} style={{ position: "relative" }}>
            <Button className={classes.featuredPricesBtn}>
              <Typography
                className={classes.featuredPrices}
                component="p"
                paragraph={true}
              >
                $9.99
              </Typography>
              <img src={Bracelet2} className={classes.braceletImgs} />
            </Button>
          </Grid>
          <Grid data-aos='fade-up' item xs={10} sm={4} style={{ position: "relative" }}>
            <Button className={classes.featuredPricesBtn}>
              <Typography
                className={classes.featuredPrices}
                component="p"
                paragraph={true}
              >
                $9.99
              </Typography>
              <img src={Bracelet3} className={classes.braceletImgs} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}
