import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link';
import gitlogo from "./Footer_images/git_logo_bottom.svg"
import instalogo from "./Footer_images/insta_logo_bottom.svg"
import Image from 'next/image';
import { MENU_ITEMS } from 'app/utils/Menu_Items';

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <p className={styles.p}>MENU</p>
                    <nav className={styles.nav}>
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
                <div className={styles.sns}>
                    <Image id={styles.gitlogo} src={gitlogo} alt="Github" />
                    <Image id={styles.instalogo} src={instalogo} alt="Instagram" />
                </div>
                <p id={styles.copy}>&copy;2024 Takuma Chihaya.</p>
            </div>
        </footer>
    );
};

export default Footer;