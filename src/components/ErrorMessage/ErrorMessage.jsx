import styles from './ErrorMessage.module.scss'

export default function ErrorMessage() {
    return (
        <>
            <p className={styles.text}>We cannot display data.</p>
        </>
    )
}
