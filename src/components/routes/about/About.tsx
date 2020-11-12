import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import { IPageAnimations, IMotions } from '../../../Interfaces';

interface IProps {
  // value: number,
  // setValue: React.Dispatch<React.SetStateAction<number>>;
  // selectedIndex: number,
  // setSelectedIndex: (value: number) => void;
  // anchorEl?: HTMLElement,
  // openMenu: boolean,
  // menuOptions: IMenuOption[],
  // handleClose: () => void,
  // handleMenuItemClick:  (e: MouseEvent, i: number) => void,
  // handleChange: () => any,
  pageStyle: CSSProperties;
  pageAnimations: IPageAnimations,
  motions: IMotions,
}

export default function About(props: IProps) {
  return (
    <motion.div
    style={props.pageStyle}
    initial={props.motions.initial}
    animate={props.motions.animate}
    exit={props.motions.exit}
    variants={props.pageAnimations.variants}
    transition={props.pageAnimations.transition}
    >
      <h1>About</h1>
    </motion.div>
  );
}