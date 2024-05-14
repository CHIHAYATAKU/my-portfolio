import React from 'react'
import styles from "./BackToTopButton.module.css"

export const BackToTopButton = () => {
    return (
        <p className={styles.pagetop}>
            <a href="#pagetop">
                ↑
            </a>
        </p>
    )
}
