import React from 'react'
import Image from 'next/image'
import styles from "./ProductsOutLook.module.css"
import mainImg from "public/Images/ProductsPage/Products_Images/img_product_main.jpg"

export const ProductsOutLook = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>PRODUCTS</h1>
                    <div className={styles.subPagesBelowElements}>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <div className={styles.divImg}>
                                <Image className={styles.mainImg} src={mainImg} alt='products' />
                            </div>
                        </div>
                        <div className={styles.subPagesBelowElementsBoth}>
                            <p className={styles.p}>
                                大学の講義や個人で制作・開発した成果物を掲載します．
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
