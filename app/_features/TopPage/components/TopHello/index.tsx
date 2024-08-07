import React from 'react'
import Image from 'next/image'
import Git_logo from "./TopHello_Images/git_logo_top.svg"
import Insta_logo from "./TopHello_Images/insta_logo_top.svg"
// import Me from "./TopHello_Images/topme.png"
import styles from "./TopHello.module.css"

export const TopHello = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* <div className={`${styles.left} ${styles.sp_content}`}> */}
                <div className={styles.content}>
                    <h1 className={styles.h1}>
                        Hello!<br />
                        This is<br />
                        Takuma Chihaya′s<br />
                        portfolio!
                    </h1>
                    <p className={styles.p}>宮崎大学工学部所属，宅間千隼のポートフォリオサイトです．<br />
                        私のプロフィール，ETロボコン，成果物．大学生活などをまとめました．</p>
                    <div className={styles.sns}>
                        <a className={styles.a} href="https://github.com/CHIHAYATAKU"><Image id={styles.gitlogo} src={Git_logo} alt="Github" /></a>
                        <Image id={styles.instalogo} src={Insta_logo} alt="Instagram" />
                    </div>
                </div>
                {/* <div className={styles.me}><Image id={styles.me} src={Me} alt="This is me!" /></div> */}
            </div>
        </section>
    )
}
