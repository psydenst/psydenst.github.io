// import Head from 'next/head';
import styles from '../styles/Navbar.module.css';
// import Link from 'next/link';
// import Script from 'next/script';
import Image from 'next/image';

export default function Navbar() {

    return (    
            <div className={styles.container}>
            <Image className={styles.logo} src="/logo.png"
                    alt="logo"
                    width={100}
                    height={24}
            />
            <ul className={styles.sidemenu}>
                    <li><a href="#header"><b>HOME</b></a></li>
                    <li><a href="#about"><b>ABOUT</b></a></li>
                    <li><a href="#portfolio"><b>PORTFOLIO</b></a></li>
                    <li><a href="#contact"><b>CONTACT</b></a></li>
            </ul>
            </div>
    )    

}