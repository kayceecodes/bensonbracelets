import React, {
  CSSProperties,
  SyntheticEvent,
  useEffect,
  useState,
} from "react"

import { motion } from "framer-motion"

import Typography from "@material-ui/core/Typography"

import { IPageAnimations, IMotions } from "../../../Interfaces"
import { bracelets } from "../../../data/Data"
import Grid from "@material-ui/core/Grid/Grid"

import Aos from "aos"
import BraceletCard from "./braceletcard/BraceletCard"
import Hidden from "@material-ui/core/Hidden/Hidden"

import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"
import useTheme from "@material-ui/core/styles/useTheme"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import makeStyles from "@material-ui/core/styles/makeStyles"
import FilterSideDrawer from "../../ui/filterSideDrawer/FilterSideDrawer"
import FilterCardBtns from "../../ui/filterCardBtns/FilterCardBtns"

export interface IProps {
  setValue: React.Dispatch<React.SetStateAction<number>>
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  pageStyle: CSSProperties
  pageAnimations: IPageAnimations
  motions: IMotions
  jumpTo: (jumpingTarget: string | number | Element) => void
}

/* Collections will show the gallery of the products and the other routes with the 
bracelets will simply be a filtered page the whole gallery */
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
  headersUnderline: {
    padding: '0px 13px 10px',
    borderBottom: `3px solid ${theme.palette.common.antiqueWhite}`
  },
  braceletCardsContainer: {
  },
  braceletCardWrapper: {
    borderBottom: "0.8px solid #52390610",
  },
}))

export let CATEGORIES: any = {
  "Luxury": { name: "Luxury", filterArrowPos: 1 },
  "Fraternity & Sorority": {
    name: "Fraternity & Sorority",
    filterArrowPos: 49,
  },
  "Team Colors": { name: "Team Colors", filterArrowPos: 97 },
}

export function Collections(props: IProps) {
  const classes = useStyles()
  const [revealCaption, setRevealCaption] = useState(false) // Caption 'Filter By:' above Luxury, Team Colors, Frat&Sor
  const [filterCategory, setFilterCategory] = useState<string>("")
  const [revealFilterDrawer, setRevealFilterDrawer] = useState(false)
  const theme = useTheme()
  const matches = {
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  } /* If query matches sm,md,lg or xl then we'll use the 'matches' object to change styles
        xs: 0, sm: 600 md: 960, lg:1280px, xl1920px*/
  const filteredBracelets =
    filterCategory === ""
      ? bracelets
      : bracelets.filter((item) => item.category === filterCategory)

  useEffect(() => {
    Aos.init({
      duration: 900,
    }) /*This is for a css effect when element appears, fades into dom */
  }, [])

  const scrollEvent = (event: SyntheticEvent) => {
    const target = event.target as HTMLTextAreaElement
    console.log("Current Scroll Position: ", target.scrollTop)
  }

  useScrollPosition(({ prevPos, currPos }) => {
    let revealedPosition = 0
    revealedPosition = matches.md ? 750 : 0
    if (-currPos.y >= revealedPosition) {
      setRevealFilterDrawer(true)
    } else {
      setRevealFilterDrawer(false)
    }
  })

  return (
    <>
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
            <Grid item>
              <Typography component="h3" variant="h3">
                <div className={classes.headersUnderline}>Collections</div>
              </Typography>
            </Grid>
            <Hidden smDown>
              <div className={classes.sectionMargin} />
              <Typography
                variant="caption"
                style={{
                  transition: "all 0.7s",
                  color: "#6e6656",
                }}
              >
                <strong style={{marginRight: '5px'}}>Filter By:</strong>
                {filterCategory.length === 0
                  ? "(Pick Category Below)"
                  : filterCategory}
              </Typography>
              <FilterCardBtns
                setFilterCategory={setFilterCategory}
                filterCategory={filterCategory}
                setRevealCaption={setRevealCaption}
                jumpTo={props.jumpTo}
                />
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
                      name={item.name}
                      price={item.price.toFixed(2)}
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
          </Grid>
        </motion.div>
        {revealFilterDrawer === true ? (
          <FilterSideDrawer
            setFilterCategory={setFilterCategory}
            filterCategory={filterCategory}
          />
        ) : null}
      </div>
    </>
  )
}

export default Collections
