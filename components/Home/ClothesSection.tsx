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
        <Link href="/clothes">
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
        <a href="/" className={styles.title}>
          IU x NEW BALANCE
        </a>
        <div className={styles.image}>
          <img src="../img/1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
