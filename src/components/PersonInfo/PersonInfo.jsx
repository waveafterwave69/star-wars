import styles from './PersonInfo.module.scss'

export default function PersonInfo({ personInfo }) {
    return (
        <>
            <ul className={styles.list__container}>
                {personInfo.map(
                    ({ title, data }) =>
                        data && (
                            <li key={title} className={styles.list__item}>
                                <span className={styles.item__title}>
                                    {title}: {data}
                                </span>
                            </li>
                        )
                )}
            </ul>
        </>
    )
}
