import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import AboutIcon from '../../iconComponent/AboutIcon';
import ClothesIcon from '../../iconComponent/ClothesIcon';
import HomeIcon from '../../iconComponent/HomeIcon';
import JewelryIcon from '../../iconComponent/JewelryIcon';
//animation variant
const nav_animation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', duration: 0.6 }
};
type PROPS = {
  mouseState: {
    style: string;
  };
};
export default function NavMouseContent({ mouseState }: PROPS): JSX.Element {
  return (
    <>
      <AnimatePresence>
        {mouseState.style === 'Dlwlrma' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}
          >
            <HomeIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mouseState.style === 'Clothes' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}
          >
            <ClothesIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mouseState.style === 'Jewelry' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}
          >
            <JewelryIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mouseState.style === 'About us' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}
          >
            <AboutIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
