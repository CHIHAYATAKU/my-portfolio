"use client"

import React, { useState, useRef, useEffect } from 'react'
import styles from "./UnivLesson3.module.css"

export const UnivLesson3 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current
            setHeight(contentEl.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    const toggleContent = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.toggleList}>
            <h3
                className={`${styles.h3} ${styles.toggleHeader}`}
                onClick={toggleContent}
            >
                <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▶</span>
                4年生から現在
            </h3>
            <div
                className={styles.contentWrapper}
                style={{ height: `${height}px` }}
            >
                <p ref={contentRef} className={`${styles.p} ${isOpen ? styles.visible : ''}`}>
                    研究室で活動しています．<br />
                    現在は第1志望であった片山徹郎研究室に所属しています．<br />
                    主にソフトウェアの品質に関わる研究を行っている研究室です．実際は機械学習や開発関係の研究をしている方もいるため，自分のやりたいことが出来ます．<br />
                    私はソフトウェアの品質に関する研究がしたいと思いこの研究室を選びました．また，ETロボコンの活動も魅力的でこの研究室を選んだ一つの理由でもあります．<br />
                    研究やETロボコンだけでなく，エンジニアバイトやハッカソンに参加するなど，活気に溢れている研究室です．
                </p>
            </div>
        </div>
    )
}