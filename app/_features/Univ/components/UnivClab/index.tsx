import React from 'react'
import styles from "./UnivClab.module.css"

export const UnivClab = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2 className={styles.h2}>CLUB</h2>
                        <p className={styles.p}>
                            クラシックギター部に所属しています．<br />
                            以前からギターがやりたいと思っていたので，この部活に入部しました．<br />
                            普段は，学祭や新入生歓迎などのイベントのために練習したり，部員でどこかに遊びに行ったりしてます．<br />
                            私が1年生の時に入部してから3年生の4月までは部員は4~6名程でしたが，現在では20人程の部員数になり，存続できそうで嬉しいです．
                        </p>
                        <div className={styles.divVideoes}>
                            <video className={styles.video} src={require('./UnivClab_Videoes/tabiji.mp4')} controls />
                            <video className={styles.video} src={require('./UnivClab_Videoes/lupin.mp4')} controls />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}