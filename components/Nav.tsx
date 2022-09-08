import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.scss';
import { change } from '../redux/features/mouseStates';
import { motion } from 'framer-motion';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  imageAnimation,
  imageAnimationReverse,
  NAV_TEXT,
  imageContainer,
  navTextContainer,
  navTextAnimation
} from '../util/variants/Nav';
export default function Nav(): JSX.Element {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loadingState.isLoading);
  const [loading, setLoading] = useState<boolean>(true);
  const handleMouseOut = () => {
    dispatch(change({ state: 'normal', style: 'normal' }));
  };
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  const handleMouseEnter = (e: React.MouseEvent) => {
    const ele = e.currentTarget;
    const width = (ele as HTMLDivElement).offsetWidth;
    const height = (ele as HTMLDivElement).offsetHeight;
    const offTop = (ele as HTMLDivElement).getBoundingClientRect().top;
    const offLeft = (ele as HTMLDivElement).getBoundingClientRect().left;
    // const translateX = (ele as HTMLDivElement).style.transform.replace(/([a-z])\w+[()]/g, '');
    const newPosition = {
      y: offTop + height / 2 - 25,
      x: offLeft + width + 20
    };
    const elementName = e.currentTarget.textContent;
    dispatch(change({ state: 'linkHover', position: newPosition, style: elementName }));
  };
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <motion.div
            variants={imageContainer}
            custom={0.3}
            initial="initial"
            animate={!loading && 'animate'}
          >
            <motion.div
              variants={imageAnimation}
              className={`${styles.imageWrapper} ${styles.landscape}`}
            >
              <img src="../img/5.jpg" alt="image" />
            </motion.div>
            <motion.div variants={imageAnimation} className={styles.imageWrapper}>
              <img src="../img/4.jpg" alt="image" />
            </motion.div>
            <motion.div variants={imageAnimation} className={styles.imageWrapper}>
              <img src="../img/7.jpg" alt="image" />
            </motion.div>
          </motion.div>
          <motion.div
            custom={0.6}
            variants={imageContainer}
            initial="initial"
            animate={!loading && 'animate'}
          >
            <motion.div variants={imageAnimationReverse} className={styles.imageWrapper}>
              <img src="../img/FMweg6pVEAEPFKI.jfif" alt="image" />
            </motion.div>
            <motion.div
              variants={imageAnimationReverse}
              className={`${styles.imageWrapper} ${styles.landscape}`}
            >
              <img src="../img/FMwh5a5UcAIxaXO.jfif" alt="image" />
            </motion.div>
            <motion.div variants={imageAnimationReverse} className={styles.imageWrapper}>
              <img src="../img/New Balance形象代言人IU_IWD_CT302OA (4).jpeg" alt="image" />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={navTextContainer}
          initial="initial"
          animate={!loading && 'animate'}
          className={styles.navText}
        >
          {NAV_TEXT.map((item, index) => {
            return (
              <motion.a
                custom={index}
                variants={navTextAnimation}
                onMouseOver={(e) => {
                  handleMouseEnter(e);
                }}
                onMouseLeave={handleMouseOut}
                href={item.link}
                key={index}
              >
                {item.text}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
