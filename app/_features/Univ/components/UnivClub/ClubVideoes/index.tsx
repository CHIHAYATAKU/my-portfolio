import styles from "./ClubVideoes.module.css"
import React from 'react';

export default function Video() {
    return (
        <>
            <video className={styles.video} src={require('public/UnivClub_Videoes/lupin.mp4')} controls playsInline />
            <video className={styles.video} src={require('public/UnivClub_Videoes/tabiji.mp4')} controls playsInline />
        </>
    )
}