import styles from "./ClubVideoes.module.css"
import React from 'react';

export const Video = () => {
    return (
        <>
            <div className={styles.element}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/J9xNUFndyoA?si=o1Mi6Lvcsa8GwUu5"
                    title="ルパン三世のテーマ"
                    frameBorder={0}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
            <div className={styles.element}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/rcrrmMuu7Y0?si=_oOOHj-ehkAj1YH9"
                    title="旅路"
                    frameBorder={0}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </>
    )
}