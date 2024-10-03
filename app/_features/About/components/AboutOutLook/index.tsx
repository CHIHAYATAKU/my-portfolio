import React from 'react'
import Image from 'next/image'
import styles from "./AboutOutLook.module.css"
import mainImg from "public/Images/AboutPage/img_about_main.png"

export const AboutOutLook = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>ABOUT ME</h1>
                    <div className={styles.subPagesBelowElements}>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <div className={styles.divImg}>
                                <Image className={styles.mainImg} src={mainImg} alt='takuma' />
                            </div>
                        </div>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <p className={styles.p}>
                                ・宅間千隼（タクマチハヤ）<br />
                                ・2002年生まれ，宮崎県出身 <br />
                                ・宮崎大学工学部4年生 <br />
                                <br />
                                情報通信工学を専攻しています．プログラミングは大学から始め，最近はスキルアップのためにアプリケーションを作成しています．
                                普段は主に，研究，ロボコン，部活動，アルバイトなどを行っています.<br />
                                {/* <br /> */}
                                学部1，2年生の成績では成績優秀者に選出され，基礎数学の成績では1位を取ることができ，表彰されました．<br />
                                {/* <br /> */}
                                研究では，ソフトウェア品質に関する研究をテーマにしている研究室に所属しています．研究テーマはTDDに関する研究を行っております．</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
