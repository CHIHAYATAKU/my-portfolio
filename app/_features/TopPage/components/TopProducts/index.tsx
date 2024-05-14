import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkButton } from 'app/_components/elements/LinkButton'
import styles from "./TopProducts.module.css"
import Product1 from "./TopProducts_Images/product1.png"
import Product2 from "./TopProducts_Images/product2.png"

export const TopProducts = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <h2 className={styles.h2}>PRODUCTS</h2>
                    <div className={styles.imgassets}>
                        <div className={styles.element}>
                            <Image className={styles.products} src={Product1} alt='product1' />
                            <p className={styles.p}>
                                ポートフォリオサイト
                            </p>
                        </div>
                        <div className={styles.element}>
                            <Image className={styles.products} src={Product2} alt='product2' />
                            <p className={styles.p}>
                                ギター練習アプリ
                            </p>
                        </div>
                        <div className={styles.element}>
                            <Image className={styles.products} src={Product1} alt='product3' />
                            <p className={styles.p}>
                                更新までお待ちください
                            </p>
                        </div>
                    </div>
                    <Link href={"Products"} className="button"><LinkButton /></Link>
                </div>
            </section>
        </>
    )
}
