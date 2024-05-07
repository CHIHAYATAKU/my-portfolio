import React from 'react'
import Image from 'next/image'
import styles from "./TopAboutMe.module.css"
import about1 from "./TopAboutMe_Images/topAboutMe.jpg"
import { LinkButton } from 'app/_components/LinkButton'
import Link from 'next/link'
// import Slider from './TopAboutMePhotosSlider'

export const TopAboutMe = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    {/* <Slider /> */}
                    <Image className={styles.about1} src={about1} alt='takuma' />
                    <div className={styles.right}>
                        <div className={styles.text}>
                            <h2 className={styles.h2}>ABOUT ME</h2>
                            <p className={styles.p}>宮崎大学工学部学部4年生です．<br />
                                情報通信工学を専攻しています．<br />
                                プログラミングは大学から始め，最近はスキルアップのためにアプリケーションを作成しています．<br />
                                普段は主に，研究，ロボコン，アルバイトなどを行っています.
                            </p>
                        </div>
                        <Link href={"About"} className="button"><LinkButton /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
