import styles from "./video.module.css"

export function Video() {
    return (
        <>
            <video className={styles.video} controls preload="none" playsInline src="_next/static/media/lupin.mp4" />
            {/* <source src="/public/UnivClub_Videoes/lupin.mp4" type="video/mp4" />
                Your browser does not support the video tag. */}
            {/* </video> */}
            <video className={styles.video} controls preload="none" playsInline>
                <source src="./UnivClub_Videoes/tabiji.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}