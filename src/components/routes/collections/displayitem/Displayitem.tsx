import React, { CSSProperties, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import {
  IBraceletData,
  IPageAnimations,
  IMotions,
} from "../../../../Interfaces";

import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Grid from "@material-ui/core/Grid/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import theme from "../../../ui/Theme";

import { motion } from "framer-motion";

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations;
  motions: IMotions;
}

interface IProps {
  name: IBraceletData["name"];
  price: IBraceletData["price"];
  src: IBraceletData["src"];
  category: IBraceletData["category"];
}

const useStyles = makeStyles((theme) => ({
  sectionMargin: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },
  root: {
    color: theme.palette.common.dimegray,
  },
  arrow: {
    fontSize: "1.6rem",
  },
  itemImg: {
    width: "120px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 85,
    [theme.breakpoints.up("sm")]: {
      width: 100,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  itemDetailsOptions: {
    // height: '320px',
  },
  itemName: {
    width: '100%',
    marginTop: '8px',
    [theme.breakpoints.up("sm")]: {
        marginTop: '6px',
      },
},
  itemDescription: {
    maxWidth: 180,
    textAlign: "right",
    [theme.breakpoints.up("sm")]: {
        maxWidth: 270,
    },
  },
}));

export default function Displayitem(props: IProps) {
  const classes = useStyles();
  const [size, setSize] = React.useState<number>(0);
  const matches = {
    sm: useMediaQuery(theme.breakpoints.up("sm")),
    md: useMediaQuery(theme.breakpoints.up("md")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    xl: useMediaQuery(theme.breakpoints.up("xl")),
  }; // If query matches sm,md,lg or xl then we'll use the 'matches' object to change styles
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as number);
  };

  const goBackHandle = () => history.goBack();

  useEffect(() => {
    props.setValue(1);
  }, );

  return (
    <>
      <motion.div
        style={props.pageStyle} // Style of the page as a container
        initial={props.motions.initial}
        animate={props.motions.animate}
        exit={props.motions.exit}
        variants={props.pageAnimations.variants} //pageAnimations obj broken up to 2 nested objs, variant & transitions
        transition={props.pageAnimations.transition}
      >
        <Grid container alignItems="center" direction="column">
          <div className={classes.sectionMargin} />
          <Grid item style={{ flexGrow: 1 }} xs={12}>
            <Grid
              container
              direction="row"
              spacing={matches.sm ? 8 : 3}
              justify="space-between"
            >
              <Grid item xs={1} sm={1}> {/*Left Side of container - the Back Arrow */}
                <Typography variant="caption">
                <Button onClick={() =>  goBackHandle()}>
                  <Icon className={classes.arrow}>arrow_back_ios</Icon>
                </Button>
                </Typography>
              </Grid>
              <Grid
                item 
                xs={10}
                sm={9}
                style={{
                  borderBottom: `3px solid ${theme.palette.common.antiqueWhite}`,
                }}
              > {/* Right Side of Cantainer - The Item's Name */}
                <Typography variant="h3" className={classes.itemName}>
                  {props.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.sectionMargin} /> {/*Separate Name from item's img and details*/}
          <Grid item>
            {/* Second Item in the main container of Displayitem component - img left & details/options right */}
            <Grid container direction="row" alignItems="center">
              <Grid item sm={6}> {/* LEFT SIDE OF ITEM - Img Of Bracelet */}
                <img src={props.src} className={classes.itemImg} alt='bracelet displayed' />{" "}
                {/* Img Of Item - Bracelet */}
              </Grid>
              <Grid item sm={4}>{/* RIGHT SIDE OF ITEM - Details/Options */}
                <Grid container alignItems="flex-end" justify='space-between' direction="column" className={classes.itemDetailsOptions}>
                  <Grid item><div className={classes.sectionMargin} /></Grid>
                  <Grid item><Typography variant="body1">Price: {props.price}</Typography></Grid>
                  <Grid item>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Size
                    </InputLabel>
                    <Select
                      labelId="size-label-id"
                      id="size"
                      value={size}
                      onChange={handleChange}
                      label="Size"
                      className={classes.root}
                    >
                      <MenuItem value={0}>Select</MenuItem>
                      <MenuItem value={4.5}>4.5"</MenuItem>
                      <MenuItem value={5}>5"</MenuItem>
                      <MenuItem value={5.5}>5.5"</MenuItem>
                      <MenuItem value={6}>6"</MenuItem>
                      <MenuItem value={6.5}>6.5"</MenuItem>
                      <MenuItem value={7}>7"</MenuItem>
                      <MenuItem value={7.5}>7.5"</MenuItem>
                      <MenuItem value={8}>8"</MenuItem>
                      <MenuItem value={8.5}>8.5"</MenuItem>
                      <MenuItem value={9}>9"</MenuItem>
                    </Select>
                  </FormControl>
                  </Grid>
                  <Grid item>
                  <Button variant="outlined" color="primary">
                    <Icon>add_shopping_cart</Icon>
                  </Button>
                  </Grid>
                  <div className={classes.sectionMargin} />
                  <Grid item>
                        <Typography variant='body1'>
                            <strong>{props.category}</strong>
                        </Typography>
                    </Grid>
                  <Grid container justify="flex-end">
                    
                    <Grid item xs={12}>
                      <Typography
                        className={classes.itemDescription}
                        variant="body1"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus ullam, ipsum deleniti asperiores
                        dignissimos harum? Totam, provident sed.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.sectionMargin} />
          <div className={classes.sectionMargin} />
          <div className={classes.sectionMargin} />
          <div className={classes.sectionMargin} />
        </Grid>
      </motion.div>
    </>
  );
}
