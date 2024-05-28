import styles from "app/Loading.module.css"

export default function Loading() {
    return (
        <>
            <div className={styles.loading}>
                <span></span>
                <span></span>
                <span></span>
                <h2>Welcome to <br />My portfolio site！</h2>
            </div>
        </>
    );
}