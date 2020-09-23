import React, { CSSProperties, FunctionComponent, useEffect } from "react";
import { motion } from "framer-motion";
import { IPageAnimations, IMotions } from "../../../Interfaces";
import { Parallax } from "react-parallax";

import HeroMobileImg5 from "../../../images/bracelets/heroImgMobile5.jpg";
import HeroParallax from "../../../images/bracelets/bensonbracelet-hero-parallax.jpg";

import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography";

import Aos from 'aos';
import "aos/dist/aos.css";

interface IProps {
    value: number,
    setValue: (value: number) => void,
    selectedIndex: number,
    setSelectedIndex: (value: number) => void,
    // routes: IRoute[],
    // anchorEl?: HTMLElement,
    // openMenu: boolean,
    // menuOptions: IMenuOption[],
    // handleClose: () => void,
    // handleMenuItemClick:  (e: MouseEvent, i: number) => void,
    // handleChange: () => any
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
}));

export default function Footer(props: IProps) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        Aos.init({duration: 2000});
        
    }, []);

    return (
        <motion.div>
           
        </motion.div>
    )
}
