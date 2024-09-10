import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkButton } from 'app/components/elements/LinkButton'
import styles from "./TopProducts.module.css"
import Product1 from "./TopProducts_Images/product1.png"
import Product2 from "./TopProducts_Images/product2.png"

const PRODUCTS_ITEM = [
    { src: Product1, title: "ポートフォリオサイト", content: "ああああああああああああああああ" },
    { src: Product2, title: "ギター練習アプリ", content: "ああああああああああああああああ" },
    { src: Product1, title: "更新をお待ちください", content: "ああああああああああああああああ" },
];


export const TopProducts = () => {
    return (
        <>
            <section className='section'>
                <div className={styles.container}>
                    <h2 className={styles.h2}>PRODUCTS</h2>
                    <div className={styles.imgassets}>
                        {PRODUCTS_ITEM.map((item, index) => {
                            return (
                                <>
                                    <div className={styles.element}>
                                        <Image className={styles.products} src={item.src} alt={item.title} />
                                        <div className={styles.description}>
                                            <p className={styles.title}>
                                                {item.title}
                                            </p>
                                            <p className={styles.content}>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div >
                    <Link href={"Products"} className="button"><LinkButton /></Link>
                </div>
            </section>
        </>
    )
}
