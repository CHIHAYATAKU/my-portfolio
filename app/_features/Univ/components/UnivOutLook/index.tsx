import React from 'react'
import Image from 'next/image'
import styles from "./UnivOutLook.module.css"
import mainImg from "public/Images/UnivPage/img_univ_main.jpg"

export const UnivOutLook = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>UNIVERSITY</h1>
                    <div className={styles.subPagesBelowElements}>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <div className={styles.divImg}>
                                <Image className={styles.mainImg} src={mainImg} alt='university' />
                            </div>
                        </div>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <p className={styles.p}>
                                私の大学生活での活動を紹介します．<br />
                                講義，部活動について紹介します．
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
