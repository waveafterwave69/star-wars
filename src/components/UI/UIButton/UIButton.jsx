import styles from './UIButton.module.scss'

export default function UIButton({
    text,
    onClick,
    disabled,
    theme = 'dark',
    classes,
}) {
    return (
        <>
            <button
                className={`${styles.button} ${styles[theme]} ${classes}`}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </>
    )
}
