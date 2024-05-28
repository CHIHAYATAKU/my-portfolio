import React from 'react'
import Image from 'next/image'
import styles from "./AboutSkills.module.css"
import * as SkillIccons from "app/_components/elements/SkillIcons/index"
import { SkillsLevel } from 'app/_features/TopPage/components/TopSkills'

export const AboutSkills = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container} id='skills'>
                    <h2 className={styles.h2}>SKILLS</h2>
                    <div className={styles.mainSkills}>
                        <div className={styles.oneMainSkill}>
                            <div className={`${styles.CppiconDiv} ${styles.iconDiv}`}>
                                <Image className={styles.skillIcon} src={SkillIccons.cpp} alt='Cpp' />
                            </div>
                            <h3 className={styles.h3}>C++</h3>
                            <p className={styles.p}>使用歴：1年目<br />
                                用途：長期インターンシップ，ETロボコン<br />
                                ---------- <br />
                                C言語は大学の講義で2年強学んでいました．今はETロボコンでC++を使っています．</p>
                        </div>
                        <div className={styles.oneMainSkill}>
                            <div className={`${styles.TSiconDiv} ${styles.iconDiv}`}>
                                <Image className={styles.skillIcon} src={SkillIccons.ts} alt='TS' />
                            </div>
                            <h3 className={styles.h3}>TypeScript</h3>
                            <p className={styles.p}>使用歴：1年目<br />
                                用途：個人開発・制作<br />
                                ---------- <br />
                                最近Web制作・開発の勉強を始めました．このポートフォリオサイトもNext.jsでTypeScriptを使用しています．</p>
                        </div>
                        <div className={styles.oneMainSkill}>
                            <div className={`${styles.PythoniconDiv} ${styles.iconDiv}`}>
                                <Image className={styles.skillIcon} src={SkillIccons.python} alt='Python' />
                            </div>
                            <h3 className={styles.h3}>Python</h3>
                            <p className={styles.p}>使用歴：1年目<br />
                                用途：大学の講義，ETロボコン<br />
                                ---------- <br />
                                大学の講義で機械学習や深層学習などを学ぶ際に使用していました．今はETロボコンで使用しています．</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.SkillsLevel} ${styles.container}`}>
                    <SkillsLevel />
                </div>
            </section >
        </>
    )
}