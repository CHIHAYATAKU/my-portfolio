import React from 'react'
import styles from "./AboutStrengthAndWeakness.module.css"

export const AboutStrengthAndWeakness = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h2 className={styles.h2}>STRENGTH</h2>
                        <p className={styles.p}>
                            私の強みは，素直さ・ひたむきさを持ってることです．<br />
                            自分が出来ないことは素直に認め，年齢問わずに自分にないものを持っている人から学ぶ姿勢を大切にしています．<br />
                            長期インターンシップや研究室など，新しい環境に身を置かれたら，周りの方との積極的なコミュニケーションや自主学習を通し，組織の一人として機能できるように善処します．
                        </p>
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.h2}>WEAKNESS</h2>
                        <p className={styles.p}>
                            私の弱みは，決断力が弱いところです．<br />
                            大学の演習でリーダーに立候補しなかったことを後悔した経験から，この弱みに気が付きました．<br />
                            今ではこの弱みを踏まえて，自分が少しでもやりたいと思ったことや，挑戦する機会があれば積極的に取り組むように意識して行動しています．
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}