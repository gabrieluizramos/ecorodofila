import React from 'react';

import styles from './styles.scss';

import Logo from './components/logo';
import Menu from './components/menu';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <Logo />
    <Menu />
  </aside>
);

export default Sidebar;
