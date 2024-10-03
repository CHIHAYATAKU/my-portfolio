import React from 'react'
import Image from 'next/image'
import styles from "./TopRobocon.module.css"
import common from "../common/common.module.css"
import robocon from "public/Images/TopPage/ETRoboconImg.png"

export const TopRobocon = () => {
    return (
        <>
            <h2 className={common.h2}>ETROBOCON</h2>
            <div className={styles.divimg}>
                <Image className={styles.roboconimg} src={robocon} alt='robocon' />
            </div>
            <p className={common.p}>研究室の活動の一環で，毎年ETロボコンに出場しています．開発期間は約半年間です．
                2024年度は，地区大会で総合2位という結果で，悔しくも全国大会出場は叶いませんでした． 2025年大会は2024年度の問題点を解消しつつ，さらにより良いソフトウェア開発が出来るように取り組みます．
            </p>
        </>
    )
}
