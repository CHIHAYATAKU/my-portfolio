import React from 'react'
import Image from 'next/image'
import styles from "./AboutCareer.module.css"
import markerLogo from "./AboutCreer_Images/marker-tip.svg"

//追記はcareer_Nextcontentsに加える 
const Career_NextContents = [
    { label: "now　　　宮崎大学工学部工学科情報通信工学プログラム在学" },
    { label: "2021/04　宮崎大学工学部工学科情報通信工学プログラム入学" },
];

export const AboutCareer = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>CAREER</h2>

                    {Career_NextContents.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.nextLine} ${styles.oneLine}`}>
                                <Image className={styles.pointLogo} src={markerLogo} alt='・' />
                                <p className={styles.p}>
                                    {item.label}
                                </p>
                            </div>
                        )
                    })}

                    <div className={`${styles.lastLine} ${styles.oneLine}`}>
                        <Image className={styles.pointLogo} src={markerLogo} alt='・' />
                        <p className={styles.p}>
                            2021/03　宮崎県立日向高等学校普通科卒業
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}