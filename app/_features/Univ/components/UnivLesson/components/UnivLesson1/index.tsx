import React from 'react'
import styles from "./UnivLesson1.module.css"

export const UnivLesson1 = () => {
    return (
        <>
            <h3 className={styles.h3}>1年生から2年生前期</h3>
            <p className={styles.p}>
                主に一般教養科目を受講していました．<br />
                工学概論，レポートの書き方，英語，数学，科学，韓国語，また博物館概論などの文化系のことを学びました．<br />
                1番印象に残っている講義は，「大学教育入門セミナー」という講義です．この講義では相手に伝わる文章の書き方を中心に学びました．
                その中でも，今の研究室の指導教員である”片山徹郎”教授がおっしゃっていた言葉で，「発言者の意図が相手に伝わらない原因は，
                全て発言者に原因がある」という教訓が今にも活きています．<br />
            </p>
        </>
    )
}
