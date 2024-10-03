import React from 'react'
import Image from 'next/image'
import styles from "./AboutAchieve.module.css"
import awardLogo from "./AboutAchieve_Images/award-fill.svg"

//追記はAchieve_Nextcontentsに加える
const Achieve_NextContents = [
    { date: "2024/08-現在", content: "株式会社ネクストビート就業型長期インターンシップ" },
    { date: "2024/02", content: "宮崎大学データサイエンス・AI 教育プログラム（応用基礎レベル）オープンバッジ取得" },
    { date: "2023/12", content: "工学部基礎科学（数学）成績優秀者表彰" },
    { date: "2023/08-11", content: "ソア・システムズ長期インターンシップ" },
    { date: "2023/10", content: "「基本情報技術者試験」合格" },
    { date: "2023/09", content: "宮崎大学夢と希望の道標奨学金「2022年次成績優秀者」" },
    { date: "2022/06", content: "2023年度「宮崎大学大学案内」情報通信工学プログラム代表" },
];

const keyWords_ITEM = [
    { href: "https://www.nextbeat.co.jp/", label: "ネクストビート" },
    { href: "https://www.soar.jp/", label: "ソア・システムズ" },
    { href: "https://www.miyazaki-u.ac.jp/manabi-jim/campus-life-info/scholarship-miyazaki-univ/", label: "宮崎大学夢と希望の道標奨学金" },
    { href: "https://www.ipa.go.jp/shiken/kubun/fe.html", label: "基本情報技術者試験" },
    { href: "https://www.miyazaki-u.ac.jp/tech/mediadata/pdf/award_math_r05.pdf", label: "工学部基礎科学（数学）成績優秀者" },
    { href: "https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/detail/bDg0NzVVUUxEcjkyMk1mbjlKUERtdz09", label: "宮崎大学データサイエンス・AI 教育プログラム（応用基礎レベル）オープンバッジ" },
    { href: "https://www.miyazaki-u.ac.jp/document-request/uom_annai2023.pdf#page=38", label: "宮崎大学大学案内" },
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
                    })}
                    {/* 最後の行だけclassNameが異なるため，直接書いている */}
                    <div className={`${styles.lastLine} ${styles.oneLine}`}>
                        <div className={styles.divDate}>
                            <Image className={styles.pointLogo} src={awardLogo} alt='・' />
                            <p className={`${styles.pDate} ${styles.p}`}>
                                2022/09
                            </p>
                        </div>
                        <p className={`${styles.pContent} ${styles.p}`} >
                            宮崎大学夢と希望の道標奨学金「2021年次成績優秀者」
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