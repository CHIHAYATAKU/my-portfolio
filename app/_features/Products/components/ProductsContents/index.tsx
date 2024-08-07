import React from 'react'
import Image from 'next/image'
import styles from "./ProductsContents.module.css"
import Product1 from "public/Images/ProductsPage/img_product_main.jpg"
import Product2 from "public/Images/product2.png"

const PRODUCTS_ITEM = [
    { src: Product1, label: "更新をお待ちください" },
    { src: Product2, label: "更新をお待ちください" },
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