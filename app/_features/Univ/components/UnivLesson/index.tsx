import React from 'react'
import styles from "./UnivLesson.module.css"
import { UnivLessonOutLook } from './components/UnivLessonOutLook'
import { UnivLesson1 } from './components/UnivLesson1'
import { UnivLesson2 } from './components/UnivLesson2'
import { UnivLesson3 } from './components/UnivLesson3'

export const UnivLesson = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2 className={styles.h2}>LESSON</h2>
                        <UnivLessonOutLook />
                        <div className={styles.lessons}>
                            <UnivLesson1 />
                            <UnivLesson2 />
                            <UnivLesson3 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
