import * as React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Headertabs from "./headertabs/Headertabs";
import { MouseEvent } from "../../App";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidedrawer from "./sidedrawer/Sidedrawer";


interface IHideOnScrollProps {
  children?: any;
}

export interface IRoute {
  name: string;
  link: any;
  activeIndex: number;
  selectIndex?: number;
  ariaOwns?: string;
  ariaHasPopup?: string;
  mouseOver?: any;
}
export interface IMenuOption {
  name: string;
  link: string;
  activeIndex: number;
  selectedIndex: number;
}

function HideOnScroll(props: IHideOnScrollProps) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.up("xs")]: {
      marginBottom: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  drawerIcon: {
    height: "35px",
    width: "35px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props: any) {
  const classes = useStyles(); //useStyles is a funct that will build the classes object
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClick = (e: MouseEvent) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e: MouseEvent, i: number) => {
    //   setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = () => setOpenMenu(false);

  const menuOptions = [
    {
      name: "Collections",
      link: "/collections",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Luxury",
      link: "/luxury",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Fraternity & Sorority 0Colors",
      link: "/fraternity&sorority",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Team Colors",
      link: "/teamcolors",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes: IRoute[] = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Collections",
      link: "/collections",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHasPopup: anchorEl ? "true" : undefined,
      mouseOver: (event: MouseEvent) => handleClick(event),
    },
    { name: "About Us", link: "/about", activeIndex: 2 },
    { name: "Contact Us", link: "/contact", activeIndex: 3 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route: any) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes]);

  const tabs = (
    <Headertabs
      value={props.value}
      setValue={props.setValue}
      selectedIndex={props.selectedIndex}
      routes={routes}
      anchorEl={anchorEl}
      openMenu={openMenu}
      menuOptions={menuOptions}
      handleClose={handleClose}
      handleChange={props.handleChange}
      handleMenuItemClick={handleMenuItemClick}
    />
  );

  const sidedrawer = (
    <Sidedrawer
     openDrawer={openDrawer}
     setOpenDrawer={setOpenDrawer}
     routes={routes}
     value={props.value}
     setValue={props.setValue}
    />
    
  );

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.appbar} position="fixed">
          <Toolbar disableGutters>
            <Button
              onClick={() => props.setValue(0)}
              component={Link}
              to="/"
              disableRipple
            ></Button>
            {matches ? sidedrawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
