import React from 'react';

import Link from 'next/link';

import styles from './styles.scss';

const Menu = () => (
  <nav className={styles.nav}>
    <ul>
      <li className={styles.navItem}>
        <Link href="/incidente/novo">
          <a className={styles.link}>Criar incidente</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/incidente/lista">
          <a className={styles.link}>Lista de incidentes</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/logout">
          <a className={styles.link}>Sair</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
