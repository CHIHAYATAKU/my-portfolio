import React from 'react'
import Image from 'next/image'
import styles from "./AboutCareer.module.css"
import markerLogo from "./AboutCreer_Images/marker-tip.svg"

//追記はcareer_Nextcontentsに加える 
const Career_NextContents = [
    { date: "now", content: "宮崎大学工学部工学科情報通信工学プログラム在学" },
    { date: "2021/04", content: "宮崎大学工学部工学科情報通信工学プログラム入学" },
];

const keyWords_ITEM = [
    { href: "https://www.miyazaki-u.ac.jp/", label: "宮崎大学" },
    { href: "https://hyuga-hs.ed.jp/", label: "日向高校" },

];



export const AboutCareer = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>Career</h2>

                    {/* keyにindex(例)を指定すると警告が消える */}
                    {Career_NextContents.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.nextLine} ${styles.oneLine}`}>
                                <div className={styles.divDate}>
                                    <Image className={styles.pointLogo} src={markerLogo} alt='・' />
                                    <p className={`${styles.pDate} ${styles.p}`}>
                                        {item.date}
                                    </p>
                                </div>
                                <p className={`${styles.pContent} ${styles.p}`}>
                                    {item.content}
                                </p>
                            </div>
                        )
                    })}
                    {/* 最後の行だけclassNameが異なるため，直接書いている */}
                    <div className={`${styles.lastLine} ${styles.oneLine}`}>
                        <div className={styles.divDate}>
                            <Image className={styles.pointLogo} src={markerLogo} alt='・' />
                            <p className={`${styles.pDate} ${styles.p}`}>
                                2021/03
                            </p>
                        </div>
                        <p className={`${styles.pContent} ${styles.p}`} >
                            宮崎県立日向高等学校普通科卒業
                        </p>
                    </div>

                    <div className={styles.keyWordsFlex}>
                        {keyWords_ITEM.map((item, index) => {
                            return (
                                <div key={index} className={styles.keyWords}><p className={styles.p}><a className={styles.a} href={item.href}>#{item.label}</a></p></div>
                            )
                        })}
                    </div>

                </div>
            </section >
        </>
    )
}