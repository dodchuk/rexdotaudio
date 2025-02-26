import React from 'react';
import LogoSVG from './logo.svg';
import Link from 'next/link';
import styles from './logo.module.scss';

const LogoComponent = ({  }) => {
  return (
    <div className={ styles.logoWrp }>
      <div className={ styles.logo }>
        <Link href={ `/` }>
          <LogoSVG id="logo" alt="Instrument Rex" />
        </Link>
      </div>
    </div>
  );
};

export default LogoComponent;
