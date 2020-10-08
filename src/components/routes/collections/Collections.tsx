import React, { CSSProperties, useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Typography from "@material-ui/core/Typography";

import { IPageAnimations, IMotions, IBraceletData } from "../../../Interfaces";
import { bracelets } from "../../../data/Data";
import { makeStyles, Grid, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

import luxury from "../../../images/bracelets/collections/luxury88by1ratio.jpg";
import fraternity from "../../../images/bracelets/collections/fraternity88by1ratio753x856px.jpg";
import teamcolors from "../../../images/bracelets/collections/teamcolors88by1ratio440x500px.jpg";

import Footer from "../../ui/footer/Footer";

import Aos from "aos";
import { Link, Switch, useLocation } from "react-router-dom";
import BraceletCard from "./braceletcard/BraceletCard";

interface IProps {
  // value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  // selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  // routes?: IRoute[];
  // anchorEl?: HTMLElement;
  // openMenu: boolean;
  // menuOptions: IMenuOption[];
  // handleClose: () => void;
  // handleMenuItemClick:  (e: MouseEvent, i: number) => void;
  // handleChange: () => any;
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations;
  motions: IMotions;
}

{
  /* Collections will show the gallery of the products and the other routes with the 
bracelets will simply be a filtered page the whole colleciton/gallery */
}

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "35px",
    },
  },
  root: {
    flexGrow: 1,
  },
  header: {
    borderBottom: `2px solid ${theme.palette.common.antiqueWhite}`,
  },
  card: {
    width: "240px",
    border: "0.5px solid rgba(0,0,0,0.1)",
    height: "340px",
    backgroundColor: "rgba(165,152,136, 0.5)",
    padding: "6px 6px 0px",
    overflow: "hidden",
    transition: "background-color 0.2s",
    // marginTop: "25px",
    "&:hover": {
      backgroundColor: "rgba(165,152,136, 0.15)",
    },
  },
  cardBtn: {
    textTransform: "none",
    padding: "0px",
    height: "100%",
    "&:hover": {
      backgroundColor: "none",
    },
  },
  cardBtnLabel: {
    height: "99%",
  },
  cardImgs: {
    width: "100%",
    paddingBottom: "12px",
  },
  body1: {},
  caption: {
    fontFamily: "Raleway",
    letterSpacing: "1.2px",
    fontSize: "0.97rem",
    color: "rgba(73,67,57, 0.9)",
    borderBottom: `2.9px solid ${theme.palette.common.orange}`,
  },
  braceletCardWrapper: {
    backgroundColor: '#ededed',
  }
}));

export const CATEGORIES = {Luxury: 'Luxury', 'Fraternity & Sorority': 'Fraternity & Sorority', 'Team Colors': 'Team Colors'};

export default function Collections(props: IProps) {
  const classes = useStyles();
  const location = useLocation();
  const [revealCaption, setRevealCaption] = useState(false); // Caption 'Filter By:' above Luxury, Team Colors, Frat&Sor
  const [filterCategory, setFilterCategory] = useState<string>('');

  const filteredBracelets = filterCategory === '' ?
  bracelets :
  bracelets.filter(item => item.category === filterCategory); 

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

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
      <div className={classes.sectionMargin} />
{/* <AnimatePresence>
<Switch location={location} key={location.pathname}> */}
      <Grid
        container
        spacing={10}
        className={classes.root}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.header}>
          <Typography component="h3" variant="h3">
            Collections
          </Typography>
        </Grid>
        <div className={classes.sectionMargin} />
        <Typography variant='caption' style={{transition: 'all 0.7s', color: revealCaption === true ? '#6e6656' : 'white' }}>
          Filter By: {filterCategory.length === 0 ? '(Pick Category Below)' : filterCategory} 
        </Typography>
        <Grid item xs={12} onMouseOver={() => setRevealCaption(true)}> {/* On mouse hover, caption 'filter by:' appears*/}
          <Grid container spacing={3} justify="center">
            <Grid item data-aos="fade-up">
            <Button className={classes.cardBtn} onClick={() => setFilterCategory(CATEGORIES['Luxury'])}>
                <div className={classes.card}>
                  <img src={luxury} className={classes.cardImgs} />
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    alignContent="center"
                  >
                    <Grid item>
                      <Typography className={classes.caption} variant="caption">
                        Luxury
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Button>
            </Grid>
            <Grid item data-aos="fade-up">
            <Button className={classes.cardBtn} onClick={() => setFilterCategory(CATEGORIES['Fraternity & Sorority'])}>
                <div className={classes.card}>
                  <img src={fraternity} className={classes.cardImgs} />
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    alignContent="center"
                  >
                    <Grid item>
                      <Typography className={classes.caption} variant="caption">
                        Fraternity & Sorority
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Button>
            </Grid>
            <Grid item data-aos="fade-up">
              <Button className={classes.cardBtn} onClick={() => setFilterCategory(CATEGORIES['Team Colors'])}>
                <div className={classes.card}>
                  <img src={teamcolors} className={classes.cardImgs} />
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    alignContent="center"
                  >
                    <Grid item>
                      <Typography className={classes.caption} variant="caption">
                        Team Colors
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={6} xl={5}>
          <Grid container direction="row" justify='center' spacing={8}> 
            {filteredBracelets.map((item) =>(
              <Grid item data-aos='fade-up' xs={7} sm={5} lg={4} key={item.name+item.src}>
                <BraceletCard name={item.name} price={item.price} src={item.src} category={item.category} setValue={props.setValue} />
              </Grid>  )
            )}
          </Grid>
        </Grid> {/* EO Cards CONTAINER - nested*/}
        {/* EO Cards ITEM */}
        <Footer
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </Grid>
      {/* </Switch>
      </AnimatePresence> */}
    </motion.div>
  );
}
