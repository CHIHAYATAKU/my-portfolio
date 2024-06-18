import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkButton } from 'app/_components/elements/LinkButton'
import styles from "./TopPrivate.module.css"
// import private1 from "./TopPrivate_Images/private1.jpg"
import private2 from "./TopPrivate_Images/private2.jpg"
import private3 from "./TopPrivate_Images/private3.jpg"
import sampleImg from "public/Images/sample.jpg"

const PRIVATE_ITEM = [
    { src: sampleImg, label: "玉置浩二コンサート" },
    { src: private2, label: "愛ネコ" },
    { src: private3, label: "私と景色" },
];

export const TopPrivate = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <h2 className={styles.h2}>PRIVATE</h2>
                    <div className={styles.imgassets}>
                        {PRIVATE_ITEM.map((item, index) => {
                            return (
                                <>
                                    <div className={styles.element}>
                                        <Image className={styles.private} src={item.src} alt={item.label} />
                                        <p className={styles.p}>
                                            {item.label}
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <Link href={"Private"} className="button"><LinkButton /></Link>
                </div>
            </section>
        </>
    )
}
