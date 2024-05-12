import React from 'react'
import Image from 'next/image'
import styles from "./TopUniv.module.css"
import common from "../common/common.module.css"
import univ from "./TopUniv_Images/univ1.jpg"

export const TopUniv = () => {
    return (
        <>
            <h2 className={common.h2}>UNIV</h2>
            <Image className={styles.univ} src={univ} alt='unuv1' />
            <p className={common.p}>大学では情報通信工学を専攻しています．
                また，クラシックギター部でも活動しています．
                大学1年，2年の成績で2年連続で成績優秀者になりました．
                基礎数学の成績でも学部1位になりました．
                大学の受験生向けの<a className={styles.a} href='https://www.miyazaki-u.ac.jp/document-request/uom_annai2023.pdf'>パンフレット</a>に載ったこともあります．
            </p>
        </>
    )
}
