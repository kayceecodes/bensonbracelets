import React, { CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";

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

import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../../ui/footer/Footer";

import { bracelets } from "../../../data/Data";

interface IProps {
  setValue: (value: number) => void;
  setSelectedIndex: (value: number) => void;
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations;
  motions: IMotions;
  jumpTo: (jumpingTarget: string | number | Element) => void;
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
  featuredHeroBtnWrapper: {
   padding: '4.5px',
   border: `5px solid ${theme.palette.common.orange}27`,
   borderRadius: '5px',
   position: "fixed",
   left: "50%",
   transform: "translate(-50%, -50%)",
   zIndex: 3,

   [theme.breakpoints.up("sm")]: {
    top: "320px",
  },
  [theme.breakpoints.down("sm")]: {
    top: "170px",
  },
  },
  featuredHeroButton: {
    textTransform: "none",
    letterSpacing: "2.8px",
    backgroundColor: "rgb(0, 0, 0, 0.005)",
    color: "white",
    border: "1.5px solid white",
    borderRadius: "0px",
    textShadow: "0px 0px 8px rgba(0,0,0,0.99)",
    transition: 'opacity 0.4s',
    [theme.breakpoints.up("sm")]: {
      font: "1.25rem Raleway",
      padding: "0 70px",
    },
    [theme.breakpoints.down("sm")]: {
      font: "0.8rem Raleway",
      padding: "0 45px",
    },
    '&:hover': {
      opacity: '0.6', 
    },
    // boxShadow: '0px 0px 17px rgba(0, 0, 0, 1)',
  },
    overlayWrapper: {
    top: 0,
    width: "100%",
    position: "relative",
    zIndex: 0,
    opacity: 0.93,
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

  featuredBraceletsHeader: {
    fontFamily: "Raleway",
    color: "rgba(74,63,53, 0.85)",
    marginTop: "15px",
    // fontSize: "1.7rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  },
  paragraph: {
    font: "1.4rem Raleway",
    color: `${theme.palette.common.dimGray}`,
    letterSpacing: "0.5px",
    maxWidth: "850px",
    margin: "80px auto 0px",
    paddingBottom: "80px",
    borderBottom: `2px solid ${theme.palette.common.antiqueWhite}`,
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
    [theme.breakpoints.up("lg")]: {
      margin: "140px auto 90px",
      fontSize: "1.10rem",
      lineHeight: "3",
    },
  },
  braceletsContainer: {
    margin: "5px auto",
    paddingBottom: "50px",
    [theme.breakpoints.up("sm")]: {
      margin: "70px auto 100px",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "140px",
    },
  },
  braceletImgs: {
    // width: '60%',
    // width: '200px', //TEST OUT XS and the GRID SYSTEM
    [theme.breakpoints.up("sm")]: {
      width: "220px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
    },
  },
  featuredPricesBtn: {
    border: "2px solid transparent",
    marginTop: "15px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "25px",
    },
    "&:hover": {
      border: `2px solid ${theme.palette.common.slateTan}`,
    },
  },
  featuredName: {
    marginBottom: "-15px",
    marginTop: "50px",
  },
  featuredPrices: {
    position: "absolute",
    top: "40%",
    left: "37%",
    color: theme.palette.common.dimegray,
    // fontFamily: 'Raleway',
    fontSize: "0.85rem",
    fontWeight: 400,
    textAlign: "center",
    margin: "0px auto",
    [theme.breakpoints.up("lg")]: {
      left: "40%",
    },
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
  const collectionsPath = "/collections/";
  const matches = {
    sm: useMediaQuery(theme.breakpoints.down("sm")),
    md: useMediaQuery(theme.breakpoints.down("md")),
    lg: useMediaQuery(theme.breakpoints.down("lg")),
    xl: useMediaQuery(theme.breakpoints.down("xl")),
  }; // If query matches sm,md,lg or xl then we'll use the 'matches' object to change styles
  const featuredBracelets = [bracelets[0], bracelets[1], bracelets[2]];

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const dimegrayOverlay: CSSProperties = {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.common.brightMudBrown,
    opacity: 0.8,
    zIndex: 3,
  };

  function convertToRoute(nestedRoute: string, itemName: string) {
    // www.website.com/nestedRoute/itemName
    itemName = nestedRoute + itemName;
    let spaces = new RegExp("[ ]+", "g");
    let namedRoute = itemName.replace(spaces, "");
    // return namedRoute;
    let uppercase = new RegExp("[A-Z]", "g");

    return namedRoute.replace(uppercase, (x: string) => x.toLowerCase());
  }

  return (
    <div>
      <motion.div
        style={props.pageStyle} // Style of the page as a container
        initial={props.motions.initial}
        animate={props.motions.animate}
        exit={props.motions.exit}
        variants={props.pageAnimations.variants} //pageAnimations obj broken up to 2 nested objs, variant & transitions
        transition={props.pageAnimations.transition}
      >
        <div
          className={classes.overlayWrapper}
          style={{
            overflow: `${matches.sm ? "hidden" : ""}`,
            position: "relative",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
          }}
        >
          <div style={dimegrayOverlay} />
          <Parallax
            strength={550}
            style={{
              height: "600px",
              minWidth: `${matches.sm ? "800px" : "1400px"}`,
            }}
            bgImage={matches.sm ? HeroMobileImg5 : HeroParallax}
          >
            <div className={classes.featuredHeroBtnWrapper}>
            <Button
              className={classes.featuredHeroButton}
              onClick={() => props.jumpTo("#featuredBracelets")}
            >
              <p>Featured</p>
            </Button>
            </div>
            <p className={classes.heroCompanyName}>Benson Bracelets</p>
          </Parallax>
        </div>

        <div className={classes.sectionMargin} />

        <Grid container direction="column" justify="center">
          <Grid item xs={12}>
            {/* Header - About.. */}
            <Typography variant="h2" component="h2">
              About Our Bracelets
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minima maxime temporibus at deleniti eum sapiente vitae iure velit
              maiores aliquid ea quo pariatur quidem reiciendis quas,
              consequatur corrupti officiis earum corporis recusandae quasi
              consequuntur nisi dolorem. Odit, nisi. Id. Tenetur
              minima maxime temporibus at deleniti eum sapiente vitae iure velit
              maiores aliquid ea quo pariatur quidem reiciendis quas,
              consequatur corrupti officiis earum corporis recusandae quasi
              consequuntur nisi dolorem.
            </p>
          </Grid>
          {/* Header - Featured Bracelets */}
          <Typography
            component="h2"
            variant="h2"
            data-aos="fade-left"
            id="featuredBracelets"
          >
            Featured Bracelets
          </Typography>
          {/* Bracelet Container */}
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.braceletsContainer}
            style={{ maxWidth: "78%" }}
          >
            <Grid
              data-aos="fade-up"
              item
              xs={10}
              sm={4}
              style={{ position: "relative" }}
            >
              <Typography
                className={classes.featuredName}
                paragraph={true}
                variant="caption"
              >
                {featuredBracelets[0].name}
              </Typography>
              <Button
                className={classes.featuredPricesBtn}
                component={Link}
                to={convertToRoute(collectionsPath, featuredBracelets[0].name)}
                onClick={() => props.setValue(1)}
              >
                <Typography
                  className={classes.featuredPrices}
                  paragraph={true}
                  variant="caption"
                >
                  ${featuredBracelets[0].price}
                </Typography>
                <img
                  src={Bracelet1}
                  className={classes.braceletImgs}
                  alt="bracelet"
                />
              </Button>
            </Grid>
            <Grid
              data-aos="fade-up"
              item
              xs={10}
              sm={4}
              style={{ position: "relative" }}
            >
              <Typography
                className={classes.featuredName}
                paragraph={true}
                variant="caption"
              >
                {featuredBracelets[1].name}
              </Typography>
              <Button
                className={classes.featuredPricesBtn}
                component={Link}
                to={convertToRoute(collectionsPath, featuredBracelets[1].name)}
                onClick={() => props.setValue(1)}
              >
                <Typography
                  className={classes.featuredPrices}
                  paragraph={true}
                  variant="caption"
                >
                  ${featuredBracelets[1].price}
                </Typography>
                <img
                  src={Bracelet2}
                  className={classes.braceletImgs}
                  alt="bracelet"
                />
              </Button>
            </Grid>
            <Grid
              data-aos="fade-up"
              item
              xs={10}
              sm={4}
              style={{ position: "relative" }}
            >
              <Typography
                className={classes.featuredName}
                paragraph={true}
                variant="caption"
              >
                {featuredBracelets[2].name}
              </Typography>
              <Button
                className={classes.featuredPricesBtn}
                component={Link}
                to={convertToRoute(collectionsPath, featuredBracelets[2].name)}
                onClick={() => props.setValue(1)}
              >
                <Typography
                  className={classes.featuredPrices}
                  paragraph={true}
                  variant="caption"
                >
                  ${featuredBracelets[2].price}
                </Typography>
                <img
                  src={Bracelet3}
                  className={classes.braceletImgs}
                  alt="bracelet"
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Footer
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </motion.div>
    </div>
  );
}
