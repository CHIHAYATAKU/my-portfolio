import React from 'react'
import { TopUniv } from './TopUniv'
import { TopRobocon } from './TopRobocon'
import styles from "./TopUnivAndRobocon.module.css"
import Link from 'next/link'
import { LinkButton } from 'app/components/elements/LinkButton'

export const TopUnivAndRobocon = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.box} ${styles.univ}`}>
                        <TopUniv />
                        <Link href={"Univ"} className="button"><LinkButton /></Link>
                    </div>
                    <div className={styles.box}>
                        <TopRobocon />
                        <Link href={"Robocon"} className="button"><LinkButton /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
