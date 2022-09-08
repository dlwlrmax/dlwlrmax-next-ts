import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import styles from '../../../styles/Mouse.module.scss';
export default function ClothesMouseContent(): JSX.Element {
  const mouseState = useSelector((state: RootStateOrAny) => state.mouseState);

  return (
    <div
      className={`${styles.text} ${
        mouseState.state == 'bigTitleHover' ? styles.active : styles.unactive
      }`}
    >
      <img src={'../../../img/img_45.jpg'} alt="s" />
    </div>
  );
}
