// Default
import React, { Fragment } from 'react';

// Next
import Link from 'next/link';

// Components
import Title from '../../../title';

// Styles
import styles from './styles.scss';

const Logo = () => (
  <Fragment>
      <Link href="/dashboard">
       <Title />
      </Link>
      <Link href="/dashboard">
        <figure className={styles.logo}>
          <img src="/images/logo-ecorodovias.png" />
        </figure>
      </Link>
  </Fragment>
);

export default Logo;
