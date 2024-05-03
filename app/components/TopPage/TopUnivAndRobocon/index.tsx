import React from 'react'
import { TopUniv } from './TopUniv'
import { TopRobocon } from './TopRobocon'
import styles from "./TopUnivAndRobocon.module.css"

export const TopUnivAndRobocon = () => {
    return (
        <>
            <section className={styles.section}>
                <TopUniv />
                <TopRobocon />
            </section>
        </>
    )
}
