import React, {
  CSSProperties,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import Typography from "@material-ui/core/Typography";

import { IPageAnimations, IMotions } from "../../../Interfaces";
import { bracelets } from "../../../data/Data";
import { makeStyles, Grid, Button } from "@material-ui/core";

import luxury from "../../../images/bracelets/collections/luxury88by1ratio.jpg";
import fraternity from "../../../images/bracelets/collections/fraternity88by1ratio753x856px.jpg";
import teamcolors from "../../../images/bracelets/collections/teamcolors88by1ratio440x500px.jpg";

import Aos from "aos";
import BraceletCard from "./braceletcard/BraceletCard";
import Hidden from "@material-ui/core/Hidden/Hidden";

import Icon from "@material-ui/core/Icon/Icon";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export interface IProps {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations;
  motions: any;
  jumpTo: (jumpingTarget: string | number | Element) => void;
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
  categoryCard: {
    width: "240px",
    border: "0.5px solid rgba(0,0,0,0.1)",
    height: "340px",
    padding: "6px 6px 0px",
    overflow: "hidden",
    transition: "background-color 0.2s",
    
    // marginTop: "25px",
  },
  categoryCardBtn: {
    textTransform: "none",
    padding: "0px",
    height: "100%",
    backgroundColor: "rgba(165,152,136, 0.35)",
    "&:hover": {
      backgroundColor: "rgba(165,152,136, 0.2)",
    },
  },
  categoryCardBtnActive: {
    backgroundColor: "rgba(165,152,136, 0.95)",
    boxShadow: "0px 0px 12px #52390680",
  },
  cardBtnLabel: {
    height: "99%",
  },
  categoryCardImgs: {
    width: "100%",
    paddingBottom: "12px",
  },
  body1: {},

  braceletCardsContainer: {
    // marginLeft: '120px',
  },
  caption: {
    fontFamily: "Raleway",
    letterSpacing: "1.2px",
    fontSize: "0.97rem",
    color: "rgba(73,67,57, 0.9)",
    borderBottom: `2.9px solid ${theme.palette.common.orange}`,
  },
  braceletCardWrapper: {
    borderBottom: "0.8px solid #52390610",
  },
  filterDrawer: {
    position: "fixed",
    top: "45%",
    left: "-0.11%",
    padding: "5px 10px",
    lineHeight: 3,
    listStyle: "none",
    borderRadius: "4px",
    backgroundColor: "#b9ac9210",
    opacity: 0.85,
    zIndex: 3,
    color: theme.palette.common.dimegray,
    boxShadow: `0px 0px 12px #52390650`,
    [theme.breakpoints.up("md")]: {
      padding: "5px 35px",
    },
  },
  filterDrawerBtn: {
    color: theme.palette.common.dimegray,
    textTransform: "none",
    fontFamily: "Raleway",
    letterSpacing: "1.8px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  filterDrawerBtnArrow: {
    fontSize: "0.85rem",
    color: theme.palette.common.kitkatOrange,
  },
}));

export let CATEGORIES: any = {
  Luxury: { name: "Luxury", filterArrowPos: 1 },
  "Fraternity & Sorority": {
    name: "Fraternity & Sorority",
    filterArrowPos: 49,
  },
  "Team Colors": { name: "Team Colors", filterArrowPos: 97 },
};

export function Collections(props: IProps) {
  const classes = useStyles();
  const [revealCaption, setRevealCaption] = useState(false); // Caption 'Filter By:' above Luxury, Team Colors, Frat&Sor
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [revealFilterDrawer, setRevealFilterDrawer] = useState(false);
  const theme = useTheme();
  const matches = {
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  }; // If query matches sm,md,lg or xl then we'll use the 'matches' object to change styles

  const filteredBracelets =
    filterCategory === ""
      ? bracelets
      : bracelets.filter((item) => item.category === filterCategory);

  useEffect(() => {
    {
      /* data-aos='fade-up or down'. This is a css effect when element appears */
    }
    Aos.init({ duration: 900 });
  }, []);

  const scrollEvent = (event: SyntheticEvent) => {
    const target = event.target as HTMLTextAreaElement;
    console.log("Current Scroll Position: ", target.scrollTop);
  };

  useScrollPosition(({ prevPos, currPos }) => {
    let revealedPosition = 0;
    revealedPosition = matches.md ? 750 : 0;
    // console.log(-currPos.y); // Current Y is negative when scrolling down, you should use a negative symbol for +value.
    if (-currPos.y >= revealedPosition) {
      setRevealFilterDrawer(true);
    } else {
      setRevealFilterDrawer(false);
    }
  });

  function checkProps() {
    console.log("Motion Object: ", props.motions);
    // console.log('Motion.Animate', props.motions.animate);
  }
  return (
    <>
      {checkProps()}
      <div onScroll={scrollEvent}>
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
            <Hidden smDown>
              <div className={classes.sectionMargin} />
              <Typography
                variant="caption"
                style={{
                  transition: "all 0.7s",
                  color: revealCaption === true ? "#6e6656" : "white",
                }}
              >
                Filter By:{" "}
                {filterCategory.length === 0
                  ? "(Pick Category Below)"
                  : filterCategory}
              </Typography>
              <Grid item xs={12} onMouseOver={() => setRevealCaption(true)}>
                {/* On mouse hover, caption 'filter by:' appears*/}
                <Grid container spacing={3} justify="center">
                  {/*Container of the categories - card*/}
                  <Grid item data-aos="fade-up">
                    <Button
                        className={ classes.categoryCardBtn + ' ' +
                        (filterCategory === CATEGORIES['Luxury'].name ? classes.categoryCardBtnActive : '')
                        }
                      onClick={() => {
                        setFilterCategory(CATEGORIES["Luxury"].name);
                        props.jumpTo("#gallery");
                      }}
                    >
                      <div className={classes.categoryCard}>
                        <img
                          src={luxury}
                          className={classes.categoryCardImgs}
                          alt="Category Of Benson Bracelets"
                        />
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          alignContent="center"
                        >
                          <Grid item>
                            <Typography
                              className={classes.caption}
                              variant="caption"
                            >
                              Luxury
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </Button>
                  </Grid>
                  <Grid item data-aos="fade-up">
                    <Button
                      className={ classes.categoryCardBtn + ' ' +
                      (filterCategory === CATEGORIES['Fraternity & Sorority'].name ? classes.categoryCardBtnActive : '')
                      }
                      onClick={() => {
                        setFilterCategory(
                          CATEGORIES["Fraternity & Sorority"].name
                        );
                        props.jumpTo("#gallery");
                      }}
                    >
                      <div className={classes.categoryCard}>
                        <img
                          src={fraternity}
                          className={classes.categoryCardImgs}
                          alt="Category Of Benson Bracelets"
                        />
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          alignContent="center"
                        >
                          <Grid item>
                            <Typography
                              className={classes.caption}
                              variant="caption"
                            >
                              Fraternity & Sorority
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </Button>
                  </Grid>
                  <Grid item data-aos="fade-up">
                    <Button
                      className={ classes.categoryCardBtn + ' ' +
                      (filterCategory === CATEGORIES['Team Colors'].name ? classes.categoryCardBtnActive : '')
                      }
                      onClick={() => {
                        setFilterCategory(CATEGORIES["Team Colors"].name);
                        props.jumpTo("#gallery");
                      }}
                    >
                      <div className={classes.categoryCard}>
                        <img
                          src={teamcolors}
                          className={classes.categoryCardImgs}
                          alt="Category Of Benson Bracelets"
                        />
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          alignContent="center"
                        >
                          <Grid item  id="gallery">
                            <Typography
                              className={classes.caption}
                              variant="caption"
                            >
                              Team Colors
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            <Grid
              item
              xs={10}
              md={6}
              xl={5}
              className={classes.braceletCardsContainer}
            >
              <Grid
                container
                direction="row"
                justify="center"
                spacing={8}
                // id="gallery"
              >
                {filteredBracelets.map((item) => (
                  <Grid
                    item
                    className={classes.braceletCardWrapper}
                    data-aos="fade-up"
                    xs={7}
                    sm={5}
                    lg={4}
                    key={item.name + item.src}
                  >
                    <BraceletCard
                      data-testid={item.name + '/'+ item.category}
                      name={item.name}
                      price={item.price}
                      src={item.src}
                      category={item.category}
                      setValue={props.setValue}
                      data-test={"braceletCard"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* EO Cards CONTAINER - nested*/}
            {/* EO Cards ITEM */}

            {/* </Switch>
      </AnimatePresence> */}
          </Grid>
        </motion.div>

        {revealFilterDrawer === true ? (
          <Typography
            variant="body1"
            component="ul"
            className={classes.filterDrawer}
            data-aos="fade-up"
          >
            <motion.span
              style={{
                position: "absolute",
                left: "15px",
                color: filterCategory === "" ? "white" : "darkorange",
              }}
              initial={{
                y: 1,
              }}
              animate={{
                y:
                  filterCategory === ""
                    ? 1
                    : CATEGORIES[`${filterCategory}`].filterArrowPos,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              {matches.md && filterCategory !== "" ? (
                <Icon className={classes.filterDrawerBtnArrow}>
                  arrow_forward_ios
                </Icon>
              ) : null}
            </motion.span>
            <li>
              <Button
                className={classes.filterDrawerBtn}
                style={{
                  color:
                    filterCategory === CATEGORIES["Luxury"].name
                      ? theme.palette.common.kitkatOrange
                      : theme.palette.common.dimegray,
                }}
                onClick={() => setFilterCategory(CATEGORIES["Luxury"].name)}
              >
                Luxury
              </Button>
            </li>
            <li>
              <Button
                className={classes.filterDrawerBtn}
                style={{
                  color:
                    filterCategory === CATEGORIES["Fraternity & Sorority"].name
                      ? theme.palette.common.kitkatOrange
                      : theme.palette.common.dimegray,
                }}
                onClick={() =>
                  setFilterCategory(CATEGORIES["Fraternity & Sorority"].name)
                }
              >
                Frat & Sor
              </Button>
            </li>
            <li>
              <Button
                className={classes.filterDrawerBtn}
                style={{
                  color:
                    filterCategory === CATEGORIES["Team Colors"].name
                      ? theme.palette.common.kitkatOrange
                      : theme.palette.common.dimegray,
                }}
                onClick={() =>
                  setFilterCategory(CATEGORIES["Team Colors"].name)
                }
              >
                Team Colors
              </Button>
            </li>
          </Typography>
        ) : null}
      </div>
    </>
  );
}

export default Collections;
