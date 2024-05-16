import React from 'react'
import Link from 'next/link'
import { LinkButton } from 'app/_components/elements/LinkButton'
import styles from "./TopSkills.module.css"
import Image from 'next/image'
import * as icons from "app/_components/elements/SkillIcons/index"


export const TopSkills = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <h2 className={styles.h2}>SKILLS</h2>
                    <p>私の技術スタックです．私の主観的な評価で<br />
                        <span className={styles.spanbasic}>BASIC（基礎）</span>，
                        <span className={styles.spanmedia}>INTERMEDIATE（中級）</span>，
                        <span className={styles.spanadvanced}>ADVANCED（応用）</span><br />
                        の3つに分けています．<br />
                    </p>
                    <div className={styles.level_container}>
                        <div className={`${styles.levelblock} ${styles.level1}`}>
                            <h3 className={`${styles.kihon} ${styles.h3}`}>BASIC</h3>
                            <div className={`${styles.imgassets}`}>
                                <Image className={styles.skills} src={icons.arduino} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.bootstrap} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.cisco} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.figma} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.notion} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.vercel} alt='skill_icon' />
                            </div>
                        </div>

                        <div className={`${styles.levelblock} ${styles.level2}`}>
                            <h3 className={`${styles.hyoujun} ${styles.h3}`}>INTERMEDIATE</h3>
                            <div className={`${styles.imgassets} `}>
                                <Image className={styles.skills} src={icons.ts} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.react} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.nextjs} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.nodejs} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.myspl} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.postgresql} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.gns} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.vs} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.slack} alt='skill_icon' />
                            </div>
                        </div>

                        <div className={`${styles.levelblock} ${styles.level3}`}>
                            <h3 className={`${styles.ouyou} ${styles.h3}`}>ADVANCED</h3>
                            <div className={`${styles.imgassets} `}>
                                <Image className={styles.skills} src={icons.c} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.cpp} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.python} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.teams} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.emacs} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.git} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.github} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.html} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.css} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.javascript} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.linux} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.ubuntu} alt='skill_icon' />
                                <Image className={styles.skills} src={icons.vscode} alt='skill_icon' />
                            </div>
                        </div>
                    </div>
                    <Link href={"Skills"} className="button"><LinkButton /></Link>
                </div>
            </section>
        </>
    )
}
