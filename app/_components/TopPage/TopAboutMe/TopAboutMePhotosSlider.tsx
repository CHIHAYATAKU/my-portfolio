'use client';
import React, { useState, useEffect } from 'react';
import styles from "./TopAboutMe.module.css"
import about1 from "./TopAboutMe_Images/about1.jpg"
// import private1 from "./TopAboutMe_Images/private1.JPEG"

const images = [
    about1, // 画像のURLまたはパスをここに置きます
    // private1,
    // 'image3.jpg',
    // 他の画像も追加できます
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000ミリ秒ごとに画像を切り替えます

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.about1} style={{ backgroundImage: `url(${images[index]})`, transition: 'background-image 1s ease-in-out' }}>
            {/* コンテンツ */}
        </div>
    );
};

export default Slider;