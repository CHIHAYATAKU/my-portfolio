import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={styles.container}>
                <div>©2024 takuma.</div>
            </div>
        </footer>
    );
};

export default Footer;