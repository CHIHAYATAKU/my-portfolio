import React from 'react'
import Image from 'next/image'
import styles from "./ETRoboconOutLook.module.css"
import mainImg from "public/Images/ETRobocon/img_etrobocon_main.jpg"

export const ETRoboconOutLook = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>ETROBOCON</h1>
                    <div className={styles.subPagesBelowElements}>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <div className={styles.divImg}>
                                <Image className={styles.mainImg} src={mainImg} alt='robot' />
                            </div>
                        </div>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <p className={styles.p}>
                                研究室の活動の一環で，毎年ETロボコンに出場しています．<br />
                                開発期間は約半年間です．<br />
                                2024年度は，地区大会でアドバンストクラスにおいて，総合2位という結果で，悔しくも全国大会出場は叶いませんでした．
                                2025年大会は2024年度の問題点を解消しつつ，さらにより良いソフトウェア開発が出来るように取り組みます．
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
