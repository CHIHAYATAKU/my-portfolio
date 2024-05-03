import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkButton } from 'app/components/LinkButton'
import styles from "./TopRobocon.module.css"
import common from "../common/common.module.css"
import robocon1 from "./TopRobocon_Images/sample.jpg"

export const TopRobocon = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={common.h2}>ETROBOCON</h2>
                <Image className={styles.robocon} src={robocon1} alt='robocon1' />
                <p className={common.p}>研究室の活動の一つでETロボコンに取り組んでいます．まだ勉強中なので
                    内容更新まで少々お待ちください．
                </p>
            </div>
        </>
    )
}
