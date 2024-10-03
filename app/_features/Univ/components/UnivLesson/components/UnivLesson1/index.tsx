"use client"

import React, { useState, useRef, useEffect } from 'react'
import styles from "./UnivLesson1.module.css"

export const UnivLesson1 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState(0)
    const contentRef = useRef<HTMLParagraphElement | null>(null)

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current
            if (contentEl) {
                setHeight(contentEl.scrollHeight)
            }
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
                <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>&#9654;</span>
                1年生から2年生前期
            </h3>
            <div
                className={styles.contentWrapper}
                style={{ height: `${height}px` }}
            >
                <p ref={contentRef} className={`${styles.p} ${isOpen ? styles.visible : ''}`}>
                    主に一般教養科目を受講していました．<br />
                    工学概論，レポートの書き方，英語，数学，科学，韓国語，また博物館概論などの文化系のことを学びました．<br />
                    1番印象に残っている講義は，「大学教育入門セミナー」という講義です．この講義では相手に伝わる文章の書き方を中心に学びました．
                    その中でも，今の研究室の指導教員である&quot;片山徹郎&quot;教授がおっしゃっていた言葉で，「発言者の意図が相手に伝わらない原因は，
                    全て発言者に原因がある」という教訓が今にも活きています．<br />
                </p>
            </div>
        </div>
    )
}