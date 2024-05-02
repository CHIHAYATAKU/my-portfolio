import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Script from 'next/script';
import mylogo from './Header_images/logo_takuma.png';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header id={styles.top}>
            <div className={styles.container}>
                <div>
                    <a href={"/"}>
                        <Image id={styles.header_logo} src={mylogo} alt="Takuma Portforio" />
                    </a>
                </div>
                <nav id={styles.navlist}>
                    <ul>
                        <li className={styles.topnav}>
                            <a className={styles.a} href="#">ABOUT</a>
                        </li>
                        <li className={styles.topnav}>
                            <a className={styles.a} href="#">ETROBOCON</a>
                        </li>
                        <li className={styles.topnav}>
                            <a className={styles.a} href="#">PRODUCTS</a>
                        </li>
                        <li className={styles.topnav}>
                            <a className={styles.a} href="#">UNIV</a>
                        </li>
                        <li className={styles.topnav}>
                            <a className={styles.a} href="#">PRIVATE</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header