import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkButton } from 'app/_components/elements/LinkButton'
import styles from "./TopProducts.module.css"
import Product1 from "./TopProducts_Images/product1.png"
import Product2 from "./TopProducts_Images/product2.png"

const PRODUCTS_ITEM = [
    { src: Product1, label: "ポートフォリオサイト" },
    { src: Product2, label: "ギター練習アプリ" },
    { src: Product1, label: "更新をお待ちください" },
];


export const ProductsContents = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <div className={styles.imgassets}>
                        {PRODUCTS_ITEM.map((item, index) => {
                            return (
                                <>
                                    <div className={styles.element}>
                                        <Image className={styles.products} src={item.src} alt={item.label} />
                                        <p className={styles.p}>
                                            {item.label}
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}