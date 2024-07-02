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
            <p className={common.p}>研究室の活動の一つでETロボコンに取り組んでいます．まだ勉強中なので
                内容更新まで少々お待ちください．
            </p>
        </>
    )
}
