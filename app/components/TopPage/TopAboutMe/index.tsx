import React from 'react'
import Image from 'next/image'
import styles from "./TopAboutMe.module.css"
import About1 from "./TopAboutMe_Images/about1.jpg"

export const TopAboutMe = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <Image className={styles.about1} src={About1} />
                </div>
            </section>
        </>
    )
}
