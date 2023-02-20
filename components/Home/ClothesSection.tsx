import React from 'react';
import styles from '../../styles/Home.module.scss';
import Link from 'next/dist/client/link';
type PROPS = {
  handleHoverClothes: (e: React.MouseEvent) => void;
  handleLeaveClothes: () => void;
};
export default function ClothesSection({
  handleHoverClothes,
  handleLeaveClothes
}: PROPS): JSX.Element {
  return (
    <section className={styles.clothes}>
      <div className={styles.lImage}>
        <Link href="/">
          <a
            className={styles.title}
            onMouseEnter={handleHoverClothes}
            onMouseLeave={handleLeaveClothes}
          >
            Clothes
          </a>
        </Link>
        <div className={styles.image}>
          <div className={styles.illuTitle}>Clothes</div>
        </div>
      </div>
      <div className={styles.rImage}>
        <div className={'flex items-end'}>
          <a href="/" className={'pb-1 border-l-4 border-solid ' + styles.title}>
            IU x NEW BALANCE
          </a>
        </div>
        <div className={`${styles.image} border-b-4 border-black pb-3`}>
          <img src="../img/1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
