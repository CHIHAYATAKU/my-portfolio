import Image from "next/image";
import styles from "./BgAnimation.module.css";

export const BgAnimation = () => {
    return (
        <>
            <div className={styles.bg1}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.bg2}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.bg3}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};
