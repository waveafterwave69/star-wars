import styles from './UIButton.module.scss'

export default function UIButton({ text, onClick, disabled }) {
    return (
        <>
            <button
                className={styles.button}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </>
    )
}
