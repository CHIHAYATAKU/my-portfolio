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
                    <Link href={"/"}>
                        <Image id={styles.mylogo} src={mylogo} alt="Takuma Portforio" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li className={styles.nav}>
                            <Link href={"About"} className={styles.menu}>ABOUT</Link>
                        </li>
                        <li className={styles.nav}>
                            <Link href={"Robocon"} className={styles.menu}>ETROBOCON</Link>
                        </li>
                        <li className={styles.nav}>
                            <Link href={"Products"} className={styles.menu}>PRODUCTS</Link>
                        </li>
                        <li className={styles.nav}>
                            <Link href={"Univ"} className={styles.menu}>UNIV</Link>
                        </li>
                        <li className={styles.nav}>
                            <Link href={"Private"} className={styles.menu}>PRIVATE</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header