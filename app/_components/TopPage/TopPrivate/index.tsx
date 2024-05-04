import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkButton } from 'app/_components/LinkButton'
import styles from "./TopPrivate.module.css"
import private1 from "./TopPrivate_Images/private1.jpg"
import private2 from "./TopPrivate_Images/private2.jpg"
import private3 from "./TopPrivate_Images/private3.jpg"

export const TopPrivate = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <h2 className={styles.h2}>PRIVATE</h2>
                    <div className={styles.imgassets}>
                        <div className={styles.element}>
                            <Image className={styles.private} src={private1} alt='private1' />
                            <p className={styles.p}>
                                玉置浩二コンサート
                            </p>
                        </div>
                        <div className={styles.element}>
                            <Image className={styles.private} src={private2} alt='private2' />
                            <p className={styles.p}>
                                愛ネコ
                            </p>
                        </div>
                        <div className={styles.element}>
                            <Image className={styles.private} src={private3} alt='private3' />
                            <p className={styles.p}>
                                私と景色
                            </p>
                        </div>
                    </div>
                    <Link href={"Private"} className={styles.button}><LinkButton /></Link>
                </div>
            </section>
        </>
    )
}
