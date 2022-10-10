import { HomeModernIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
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
            transition={{ type: 'spring', duration: 0.6 }}>
            <HomeModernIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mouseState.style === 'Clothes' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mouseState.style === 'Jewelry' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mouseState.style === 'About us' && (
          <motion.div
            variants={nav_animation}
            initial="initial"
            animate="animate"
            transition={{ type: 'spring', duration: 0.6 }}></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
