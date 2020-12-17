import React from "react";

import { Link } from "react-router-dom";

import { IBraceletData } from "../../../../Interfaces";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import UseImgFile from '../../../ui/useImgFile/UseImgFile';

interface IProps {
  name: IBraceletData["name"];
  price: IBraceletData["price"] | string;
  src: IBraceletData["src"];
  category: IBraceletData["category"];
  setValue: React.Dispatch<React.SetStateAction<number>>;
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
  braceletCard: {
    width: "100%",
    position: "relative",
  },
  braceletImg: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginTop: "10px",
    },
  },
  priceWrapper: {
    padding: '2px 5px',
    backgroundColor: '#fff5',
    position: "absolute",
    top: "45%",
    left: "32%",
    borderRadius: '5px',
    [theme.breakpoints.up("sm")]: {
      left: '36%',
    },
  },
  price: {
  },
}));

export default function BraceletCard(props: IProps) {
  const classes = useStyles();

  function convertToRoute(itemName: string) {
    let spaces = new RegExp("[ ]+", "g");
    let namedRoute = itemName.replace(spaces, "");
    // return namedRoute;
    let uppercase = new RegExp("[A-Z]", "g");
    return namedRoute.replace(uppercase, (x: string) => x.toLowerCase());
  }

  const itemsRoute = "/collections/" + convertToRoute(props.name);

  return (
    <Button component={Link} to={itemsRoute} onClick={() => props.setValue(1)} data-testid='bracelet-card'>
      {/* {categoryFirstInitial} */}
      <div className={classes.braceletCard}>
        <Typography variant="caption">{props.name} {UseImgFile(props.category)}</Typography>

        <img
          src={props.src}
          alt="Bracelet - Product"
          className={classes.braceletImg}
        />
        <div className={classes.priceWrapper}>
        <Typography variant="caption" className={classes.price}>
          ${props.price}
        </Typography>
        </div>
      </div>
    </Button>
  );
}
