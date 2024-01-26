// components/Layout.js

import React from 'react';
import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar/>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
