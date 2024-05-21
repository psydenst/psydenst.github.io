// components/Layout.js

import React from 'react';
import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children , is_home}) => {
  return (
    <div className={styles.layout} style={is_home ? { 
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right'
      } : {}}>
      <Navbar/>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
