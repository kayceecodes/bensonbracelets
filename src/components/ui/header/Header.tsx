import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Headertabs from './headertabs/Headertabs';
import { MouseEvent } from '../../App';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidedrawer from './sidedrawer/Sidedrawer';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { top100Films } from '../../../data/Data';
import Hidden from '@material-ui/core/Hidden/Hidden';

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
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('md')]: {
      marginBottom: '5em',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0em',
    },
  

  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,    
    // backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  secondToolbar: {
    height: '20px',
    // width: '100%',
    marginLeft: 'auto',
  },
  // textFieldInput: {
  //   '&:hover': {
  //     borderBottom: '3px solid green'
  //   }
  // },
  popperZIndex: {
    zIndex: 1303,
  },
  optionsText: {
    color: theme.palette.common.dimegray,
    backgroundColor: 'rgba(231,212,195, 0.15)',
    '&:hover': {
      color: theme.palette.common.orange,
      backgroundColor: 'rgba(231,212,195, 0.15)',
    },
  },
  listBoxStyle: {

  },
  toolbarGrid: {
    backgroundColor: theme.palette.common.antiqueWhite,
    padding: '0px 0px 30px',
  },
  underline: {
    '&:focused': {
      color: 'blue'
    },
    '&:hover': {
      underline: 'green'
    }
  },
  root: {
    width: '100%',
    marginLeft: 'auto',
  },
}));

export default function Header(props: any) {
  const classes = useStyles(); //useStyles is a funct that will build the classes object
  const theme = useTheme();
  const location = useLocation();
   console.log('The location should home: ', location);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
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
      name: 'Collections',
      link: '/collections',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'Luxury',
      link: '/luxury',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Fraternity & Sorority',
      link: '/fraternitysorority',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Team Colors',
      link: '/teamcolors',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes: IRoute[] = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Collections',
      link: '/collections',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaHasPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event: MouseEvent) => handleClick(event),
    },
    { name: 'Contact Us', link: '/contact', activeIndex: 3 },
    { name: 'Cart', link: '/shoppingcart', activeIndex: 4 },
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
  }, [props, props.value, menuOptions, props.selectedIndex, routes]);

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
    <Sidedrawer routes={routes} value={props.value} setValue={props.setValue} />
  );

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.appbar} position='fixed'>
          <Toolbar disableGutters>
            <Button
              onClick={() => props.setValue(0)}
              component={Link}
              to='/'
              disableRipple
            ></Button>
            {matches ? sidedrawer : tabs}
          </Toolbar>
         <Hidden smDown>
          <Grid container classes={{ root: classes.toolbarGrid }}>
            <Toolbar className={classes.secondToolbar}>
              <div style={{ width: 300 }}>
                <Autocomplete
                  classes={{popper: classes.popperZIndex,
                            option: classes.optionsText,
                             listbox: classes.optionsText, }}
                  id='free-solo-demo'
                  freeSolo
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size='small'
                      id='outlined-size-small'
                      label='Search Bracelets'
                      margin='normal'
                      color={undefined}
                      classes={{root: classes.underline
                      }}        
                    />
                  )}
                />
              </div>
            </Toolbar>
          </Grid>
          </Hidden>
        </AppBar>
      </HideOnScroll>
       <div className={classes.toolbarMargin} />
    </>
  );
}
