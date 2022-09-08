import React from 'react';
import styles from '../styles/Fotter.module.scss';
import { CreditCardIcon, CurrencyYenIcon, EnvelopeIcon, FireIcon } from '@heroicons/react/24/solid';
export default function Footer(): JSX.Element {
  return (
    <>
      <div className={`${styles.serparator} py-32`}></div>
      <footer className="bg-black text-white">
        <div
          className={`${styles.footerContainer} mt-4 py-36 text-white flex relative justify-between`}
        >
          <div className={`${styles.bgText} absolute font-bold opacity-10`}>Dlwlrmax</div>
          <div className="text-9xl font-bold">Dlwlrmax</div>
          <div className={`social-container flex items-end justify-end flex-col gap-4`}>
            <div className={'icon-container text-xl flex gap-4'}>
              <CreditCardIcon className="h-6 w-6" />
              <CurrencyYenIcon className="h-6 w-6" />
              <EnvelopeIcon className="h-6 w-6" />
              <FireIcon className="h-6 w-6" />
            </div>
            <div className="copyright">© 2020 EDAM. All rights reserved.</div>
            <div className="address">
              Bae jonghan 17 Teheran-ro 103-gil, Gangnam-gu, Seoul 06173 KOREA edam@edam-ent.com
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
