// components/Layout.js

import React from 'react';
import styles from '../styles/Layout.module.css';
import Navbar from './navbar.js'
const Layout = ({ children , is_home}) => {
  return (
    <div className={styles.layout} style={is_home ? { 
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right'
      } : {}}>
     
      <div className={styles.content}>{children}</div>
      
    </div>
  );
};

export default Layout;
