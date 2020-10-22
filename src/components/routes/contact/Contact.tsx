import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { IPageAnimations, IMotions } from "../../../Interfaces";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface IProps {
  // value: number,
  // setValue: React.Dispatch<React.SetStateAction<number>>;
  // selectedIndex: number,
  // setSelectedIndex: (value: number) => void;
  // routes: IRoute[],
  // anchorEl?: HTMLElement,
  // openMenu: boolean,
  // menuOptions: IMenuOption[],
  // handleClose: () => void,
  // handleMenuItemClick:  (e: MouseEvent, i: number) => void,
  // handleChange: () => any,
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations;
  motions: IMotions;
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
  root: {},
}));

export default function Contact(props: IProps) {
  const classes = useStyles();

  return (
    <motion.div
      style={props.pageStyle}
      initial={props.motions.initial}
      animate={props.motions.animate}
      exit={props.motions.exit}
      variants={props.pageAnimations.variants}
      transition={props.pageAnimations.transition}
    >
      <div className={classes.sectionMargin}></div>
      
      <Grid container direction="column" alignContent='center'>
      <div className={classes.sectionMargin}></div>
      <div className={classes.sectionMargin}></div>

        <Grid item xs={10} md={6} xl={10}>
          <Grid container direction="column" alignContent='space-between' spacing={3}>
            <Grid item xs={12}>
              <Grid container>
                <Typography variant="h2">Reach Us</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <Grid container direction="row" spacing={5}>
                <Grid item >
                  <Grid container direction="column" alignContent="flex-start" spacing={1}>
                    <Grid item>
                      <Typography variant="body1">
                        Number: (555) 555-5555
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        Email: Email@EmailProvider.com
                      </Typography>
                    </Grid>
                    
                  </Grid>
                </Grid>
                <Grid item >
                  <Grid container direction='column' alignContent="flex-start" spacing={1}>
                    <Grid item>
                      <Typography variant="body1">
                        Instagram: @bensonbraclets
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        Facebook: Benson Bracelets
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body1'>
                        Linkedin: First&Last Name
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}
