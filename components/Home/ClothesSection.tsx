import React from 'react';
import styles from '../../styles/Home.module.scss';
import Link from 'next/dist/client/link';
import { motion } from 'framer-motion';
import { intersectionObserverFunc } from '../../util/function';
import { slideDown, slideUp, animateBorder } from '../../util/variants/Base';
type PROPS = {
  handleHoverClothes: (e: React.MouseEvent) => void;
  handleLeaveClothes: () => void;
};
export default function ClothesSection({
  handleHoverClothes,
  handleLeaveClothes
}: PROPS): JSX.Element {
  const [isAnimateSection, setAnimateSection] = React.useState<boolean>(false);
  const [isAnimateLine, setAnimateLine] = React.useState<boolean>(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const observerSection = intersectionObserverFunc(setAnimateSection, 0.5, true);
    const observerLine = intersectionObserverFunc(setAnimateLine, 0.6, true);
    if (ref.current) {
      observerSection.observe(ref.current);
      observerLine.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observerSection.unobserve(ref.current);
        observerLine.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <section className={styles.clothes} ref={ref}>
      <motion.div
        className={styles.lImage}
        initial={`initial`}
        animate={isAnimateSection ? `animate` : `initial`}
        variants={slideDown}>
        <Link href="/clothes">
          <a
            className={styles.title}
            onMouseEnter={handleHoverClothes}
            onMouseLeave={handleLeaveClothes}>
            Clothes
          </a>
        </Link>
        <div className={styles.image}>
          <div className={styles.illuTitle}>Clothes</div>
        </div>
      </motion.div>
      <motion.div
        className={styles.rImage}
        initial={`initial`}
        animate={isAnimateSection ? `animate` : `initial`}
        transition={{
          delay: 0.2
        }}
        variants={slideUp}>
        <div className={'flex items-end'}>
          <motion.a
            href="/"
            className={'pb-1 border-l-4 border-solid ' + styles.title}
            initial={`initial`}
            transition={{
              delay: 2
            }}
            animate={isAnimateLine ? `animate` : `initial`}
            variants={animateBorder}>
            IU x NEW BALANCE
          </motion.a>
        </div>
        <div className={`${styles.image} border-b-4 border-black pb-3`}>
          <img src="../img/1.jpg" alt="" />
        </div>
      </motion.div>
    </section>
  );
}
