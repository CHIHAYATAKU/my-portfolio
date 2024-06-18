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
                                研究室の活動の一環で，ETロボコンに出場します．<br />
                                今は地区大会に向けて実装中です．
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
