import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link';
import gitlogo from "./Footer_images/git_logo_bottom.svg"
import instalogo from "./Footer_images/insta_logo_bottom.svg"
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.ul}>
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