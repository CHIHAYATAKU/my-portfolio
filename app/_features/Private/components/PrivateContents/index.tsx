import React from 'react'
import Image from 'next/image'
import styles from "./PrivateContents.module.css"
import Private1 from "public/Images/sample.jpg"
import Private2 from "public/Images/sample.jpg"

const PRODUCTS_ITEM = [
    { src: Private1, label: "更新をお待ちください" },
    { src: Private2, label: "更新をお待ちください" },
    { src: Private1, label: "更新をお待ちください" },
];


export const PrivateContents = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <div className={styles.imgassets}>
                        {PRODUCTS_ITEM.map((item, index) => {
                            return (
                                <>
                                    <div className={styles.element}>
                                        <Image className={styles.privates} src={item.src} alt={item.label} />
                                        <p className={styles.p}>
                                            {item.label}
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}