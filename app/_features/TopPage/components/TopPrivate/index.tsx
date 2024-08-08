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
    { src: sampleImg, title: "玉置浩二コンサート", content: "ああああああああああああああああ" },
    { src: private2, title: "愛ネコ", content: "ああああああああああああああああ" },
    { src: private3, title: "私と景色", content: "ああああああああああああああああ" },
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
                                        <Image className={styles.private} src={item.src} alt={item.title} />
                                        <div className={styles.description}>
                                            <p className={styles.title}>
                                                {item.title}
                                            </p>
                                            <p className={styles.content}>
                                                {item.content}
                                            </p>
                                        </div>
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
