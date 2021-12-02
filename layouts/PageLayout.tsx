import React, { useRef } from 'react';
import { useEffect } from 'react';
import Mouse from '../components/Mouse';
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
  const isScrollable = useRef(true);
  useEffect(() => {
    const handleScroll = () => {
      isScrollable.current = true;
      requestAnimationFrame(() => scrolling());

      //remove scroll after scroll stop
      setTimeout(function () {
        isScrollable.current = false;
        cancelAnimationFrame(requestAnimationFrame(() => scrolling()));
      }, 1000);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //handle scrolling
  const scrolling = (): void => {
    console.log(isScrollable.current);
    if (scrollContainer && scrollContainer.current && isScrollable.current) {
      scrollConfig.current = window.scrollY;
      scrollConfig.previous += (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease;
      scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100;
      //style for scroll
      scrollContainer.current.style.transform = `translate3d(0,-${scrollConfig.rounded}px,0)`;
      requestAnimationFrame(() => scrolling());
    }
  };

  useEffect(() => {
    document.body.style.height = scrollContainer.current?.getBoundingClientRect().height + 'px';
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => scrolling());
  }, []);

  return (
    <div className={styles.App}>
      <Mouse />
      <div ref={scrollContainer} className={styles.scroll}>
        {children}
      </div>
    </div>
  );
}
