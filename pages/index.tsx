import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import ItemJewelry from '../components/ItemJewelry';
import PageLayout from '../layouts/PageLayout';
import Nav from '../components/Nav';
import { useDispatch } from 'react-redux';
import { change } from '../redux/features/mouseStates';
import ClothesSection from '../components/Home/ClothesSection';
const Home: NextPage = () => {
  const dispatch = useDispatch();
  const handleHoverClothes = (e: React.MouseEvent) => {
    const $element = e.currentTarget as HTMLDivElement;
    const top = $element.getBoundingClientRect().top;
    const left = $element.getBoundingClientRect().left;
    const height = $element.offsetHeight;
    const width = $element.offsetWidth;
    const NEW_POSITION = {
      y: top + height / 2 - 25,
      x: left + width + 20
    };
    dispatch(change({ state: 'bigTitleHover', style: 'bigTitleHover', position: NEW_POSITION }));
  };
  const handleLeaveClothes = () => {
    dispatch(change({ state: 'normal', style: 'normal' }));
  };
  return (
    <PageLayout>
      <div className={styles.home}>
        <Head>
          <title>Dlwlrmax - Complement your flawless beauty</title>
          <meta name="description" content="Complement your flawless beauty" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Nav />
          <ClothesSection
            handleLeaveClothes={handleLeaveClothes}
            handleHoverClothes={handleHoverClothes}
          />
          <section className={styles.jewelry}>
            <div className={styles.lContent}>
              <a href="/" className={styles.title}>
                Jewelry
              </a>
              <div className={styles.image} />
            </div>
            <div className={`${styles.rContent} border-r-4 border-b-4 border-solid border-black`}>
              <ItemJewelry img={'../img/j1.png'} name="MARIEBEL Necklace" />
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default Home;
