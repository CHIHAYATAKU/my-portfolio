"use client"

import React, { useState, useRef, useEffect } from 'react'
import styles from "./UnivLesson2.module.css"

export const UnivLesson2 = () => {
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
                2年生後期から3年生
            </h3>
            <div
                className={styles.contentWrapper}
                style={{ height: `${height}px` }}
            >
                <p ref={contentRef} className={`${styles.p} ${isOpen ? styles.visible : ''}`}>
                    主に専門科目を受講していました．<br />
                    プログラミング演習，機械学習，AI，ネットワーク，セキュリティ，データベース，組込みシステム，ソフトウェア工学などのIT（ICT）やソフトウェアに関することを学びました．<br />
                    1番印象に残っている講義は，「ネットワークプログラミング」という講義です．この講義では，8~10人のグループに分かれて約3か月間で1つのシステムを開発しました．<br />
                    テーマは「居酒屋の注文，集計情報，発注など業務を統括するオンラインシステムを開発する」というものでした．初めての実践的な内容だったので，チーム開発における苦労やマネジメント，
                    簡易的ですが，開発の流れなどを肌で感じることができました．<br />
                    失敗もたくさんありましたが，自分の生き方の見直しや現状の把握が出来たので良い経験になりました．<br />
                </p>
            </div>
        </div>
    )
}