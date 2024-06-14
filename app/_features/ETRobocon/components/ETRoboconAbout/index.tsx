import React from 'react'
import styles from "./ETRoboconAbout.module.css"

export const ETRoboconAbout = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h2 className={styles.h2}>ABOUT ETROBOCON</h2>
                        <p className={styles.p}>
                            ETロボコン（ETソフトウェアデザインロボットコンテスト）は，組込みシステム技術協会が主催するレゴ社のMINDSTORMSを用いた組み込みソフトウェア技術を競うコンテストです．<br />
                            このコンテストはエンジニアの人材育成と技術教育の機会を提供し，初心者からベテランまで幅広い層が相互に刺激し合える場を目指しています．<br />
                            ETロボコンは，ソフトウェア開発や設計を通じて分析，制御モデリング，実装のPBL（Project-Based Learning）機会を提供し，世界をリードするエンジニアの育成を目指しています．<br />
                            さまざまなクラスがあり，初心者から応用者まで幅広いレベルの方が参加できます．<br />
                            詳しくは<a className={styles.a} href='https://www.etrobo.jp/#et%E3%83%AD%E3%83%9C%E3%82%B3%E3%83%B3%E3%81%A8%E3%81%AF'>公式サイト</a>をご確認ください．
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
