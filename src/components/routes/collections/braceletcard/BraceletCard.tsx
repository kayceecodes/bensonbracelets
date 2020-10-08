import React, { SetStateAction } from "react";

import { IBraceletData } from "../../../../Interfaces";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";

interface IProps {
  name: IBraceletData["name"];
  price: IBraceletData["price"];
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
  price: {
    position: "absolute",
    top: "35%",
    left: "38%",
    [theme.breakpoints.up("sm")]: {
        left: '36%',
      },
  },
}));

export default function BraceletCard(props: IProps) {
  const classes = useStyles();
  const categoryFirstInitial = props.category[0]; //Help differentiate each card by type of bracelet luxury,teamcolors, or f&s

  function convertToRoute(itemName: string) {
    let spaces = new RegExp("[ ]+", "g");
    let namedRoute = itemName.replace(spaces, "");
    // return namedRoute;
    let uppercase = new RegExp("[A-Z]", "g");
    return namedRoute.replace(uppercase, (x: string) => x.toLowerCase());
  }

  const itemsRoute = "/collections/" + convertToRoute(props.name);

  return (
    <Button component={Link} to={itemsRoute} onClick={() => props.setValue(1)}>
      {/* {categoryFirstInitial} Each card's Type*/}
      <div className={classes.braceletCard}>
        <Typography variant="caption">{props.name}</Typography>

        <img
          src={props.src}
          alt="Bracelet - Product"
          className={classes.braceletImg}
        />

        <Typography variant="caption" className={classes.price}>
          ${props.price}
        </Typography>
      </div>
    </Button>
  );
}
