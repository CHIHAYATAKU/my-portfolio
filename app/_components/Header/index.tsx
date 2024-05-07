import React from 'react'
import Link from 'next/link'
import Image from "next/image";
// import Script from 'next/script';
import mylogo from './Header_images/logo_takuma.png';
import styles from "./Header.module.css";
import { MENU_ITEMS } from 'app/utils/Menu_Items';

const Header = () => {
    return (
        <header id={styles.top}>
            <div className={styles.container}>
                <div className={styles.logodiv}>
                    <Link href={"/"} className={styles.link}>
                        <Image id={styles.mylogo} src={mylogo} alt="Takuma Portforio" />
                    </Link>
                </div>
                {/* <div>
                </div> */}
                <nav>
                    <ul className={styles.ul}>
                        {MENU_ITEMS.map((item) => {
                            return (
                                <li key={item.href} className={styles.li}>
                                    <Link href={item.href} className={styles.link}>{item.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header