import React from 'react'
import Image from 'next/image'
import styles from "./ETRoboconAchieve.module.css"
import awardLogo from "./ETRoboconAchieve_Images/award-fill.svg"

//追記はAchieve_Nextcontentsに加える
// const Achieve_NextContents = [
//     { date: "更新をお待ちください", content: "" },
// ];

// const keyWords_ITEM = [
//     { href: "https://www.soar.jp/", label: "ソア・システムズ" },
// ];

export const ETRoboconAchieve = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>ACHIEVE</h2>

                    {/* keyにindex(例)を指定すると警告が消える */}
                    {/* {Achieve_NextContents.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.nextLine} ${styles.oneLine}`}>
                                <div className={styles.divDate}>
                                    <Image className={styles.pointLogo} src={awardLogo} alt='・' />
                                    <p className={`${styles.pDate} ${styles.p}`}>
                                        {item.date}
                                    </p>
                                </div>
                                <p className={`${styles.pContent} ${styles.p}`}>
                                    {item.content}
                                </p>
                            </div>
                        )
                    })} */}
                    {/* 最後の行だけclassNameが異なるため，直接書いている */}
                    <div className={`${styles.lastLine} ${styles.oneLine}`}>
                        <div className={styles.divDate}>
                            <Image className={styles.pointLogo} src={awardLogo} alt='・' />
                            <p className={`${styles.pDate} ${styles.p}`}>
                                2024/09
                            </p>
                        </div>
                        <p className={`${styles.pContent} ${styles.p}`}>
                            九州地区大会 アドバンストクラス総合2位 [モデル：1位・競技：3位]
                        </p>
                    </div>

                    {/* <div className={styles.keyWordsFlex}>
                        {keyWords_ITEM.map((item, index) => {
                            return (
                                <div key={index} className={styles.keyWords}><p className={styles.p}><a className={styles.a} href={item.href}>#{item.label}</a></p></div>
                            )
                        })}
                    </div> */}
                </div>
            </section >
        </>
    )
}