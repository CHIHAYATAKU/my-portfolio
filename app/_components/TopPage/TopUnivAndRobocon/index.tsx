import React from 'react'
import { TopUniv } from './TopUniv'
import { TopRobocon } from './TopRobocon'
import styles from "./TopUnivAndRobocon.module.css"
import Link from 'next/link'
import { LinkButton } from 'app/_components/LinkButton'

export const TopUnivAndRobocon = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.abovecontainer}>
                        <TopUniv />
                        <TopRobocon />
                    </div>
                    <div className={styles.belowcontainer}>
                        <Link href={"Univ"} className="button"><LinkButton /></Link>
                        <Link href={"Robocon"} className="button"><LinkButton /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
