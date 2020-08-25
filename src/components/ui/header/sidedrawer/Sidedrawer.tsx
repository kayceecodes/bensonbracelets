import React, { Dispatch, SetStateAction } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import { IRoute } from "../Header";
import ListItem from "@material-ui/core/ListItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

interface IProps {
  value: number;
  setValue: (value: number) => number;
  selectedIndex?: number;
  routes: IRoute[];
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography,
    color: "white",
    opacity: 0.7,
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
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
}));

export default function Sidedrawer(props: IProps) {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={iOS}
        disableDiscovery={iOS}
        open={props.openDrawer}
        onClose={() => props.setOpenDrawer(false)}
        onOpen={() => props.setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {props.routes.map((route: IRoute) => (
            <ListItem
              key={`${route.link} + ${route.name}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                props.setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => props.setOpenDrawer(!props.openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
}