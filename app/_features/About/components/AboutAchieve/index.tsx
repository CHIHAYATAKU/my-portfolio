import React from 'react'
import Image from 'next/image'
import styles from "./AboutAchieve.module.css"
import awardLogo from "./AboutAchieve_Images/award-fill.svg"

//追記はAchieve_Nextcontentsに加える 
const Achieve_NextContents = [
    { label: "2023/12　　　工学部基礎科学（数学）成績優秀者表彰" },
    { label: "2023/08‐11　　ソア・システムズ長期インターンシップ" },
    { label: "2023/10　　　「基本情報技術者試験」合格" },
    { label: "2023/09　　　宮崎大学夢と希望の道標奨学金「2022年次成績優秀者」" },
    { label: "2022/06　　　2023年度「宮崎大学大学案内」情報通信工学プログラム代表" },
];

const keyWords_ITEM = [
    { href: "https://www.soar.jp/", label: "ソア・システムズ" },
];

export const AboutAchieve = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>ACHIEVE</h2>

                    {/* keyにindex(例)を指定すると警告が消える */}
                    {Achieve_NextContents.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.nextLine} ${styles.oneLine}`}>
                                <Image className={styles.pointLogo} src={awardLogo} alt='・' />
                                <p className={styles.p}>
                                    {item.label}
                                </p>
                            </div>
                        )
                    })}
                    {/* 最後の行だけclassNameが異なるため，直接書いている */}
                    <div className={`${styles.lastLine} ${styles.oneLine}`}>
                        <Image className={styles.pointLogo} src={awardLogo} alt='・' />
                        <p className={styles.p}>
                            2022/09　　　宮崎大学夢と希望の道標奨学金「2021年次成績優秀者」
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
            </section>
        </>
    )
}