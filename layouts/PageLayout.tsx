import React, { useRef } from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Mouse from '../components/Mouse/Mouse';
import useWindowSize from '../hooks/useWindowsSize';
import styles from '../styles/Common.module.scss';
import { SCROLL_CONFIG } from '../util/Interfaces';

type Props = {
  children: JSX.Element;
};

export default function PageLayout({ children }: Props): JSX.Element {
  //scroll variable
  const size = useWindowSize();
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const scrollConfig: SCROLL_CONFIG = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };
  //handle scrolling
  const scrolling = (): void => {
    if (scrollContainer && scrollContainer.current) {
      scrollConfig.current = window.scrollY;
      scrollConfig.previous += (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease;
      scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100;
      //style for scroll
      scrollContainer.current.style.transform = `translate3d(0,-${scrollConfig.rounded}px,0)`;
      requestScrolling();
    }
  };

  const requestScrolling = (): number => {
    return requestAnimationFrame(() => scrolling());
  };
  useEffect(() => {
    document.body.style.height = scrollContainer.current?.getBoundingClientRect().height + 'px';
  }, [size.height]);

  useEffect(() => {
    requestScrolling();
  }, []);

  return (
    <div className={styles.App}>
      <Mouse />
      <div ref={scrollContainer} className={styles.scroll}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
