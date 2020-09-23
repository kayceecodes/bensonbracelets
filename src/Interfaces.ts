import { Variants, Transition } from "framer-motion";

export interface IPageAnimations {
  variants: Variants;
  transition: Transition;
}

export interface IMotions {
  initial: string;
  animate: string;
  exit: string;
}
