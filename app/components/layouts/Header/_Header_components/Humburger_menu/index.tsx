"use client";

import React, { useState } from 'react'
import styles from "./Humburger_menu.module.css"
import { MENU_ITEMS } from 'app/_utils/Menu_Items';
import Link from 'next/link';


export const Humburger_Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div onClick={toggleMenu} className={styles.humburger}>
            <div className={`${styles.humburger_menu} ${isMenuOpen ? styles.humburger_icon_opened : styles.humburger_icon_closed}`}>
                <span className={styles.border}></span>
                <span className={styles.border}></span>
                <span className={styles.border}></span>
            </div>
            {isMenuOpen && (
                <div className={styles.menu_container}>
                    <p className={styles.menutext}>Menu</p>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <Link href={"/"} onClick={toggleMenu} className={styles.link}>TOP</Link>
                            </li>
                            {MENU_ITEMS.map((item) => {
                                return (
                                    <li key={item.href} className={styles.li}>
                                        <Link href={item.href} onClick={toggleMenu} className={styles.link}>{item.label}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
