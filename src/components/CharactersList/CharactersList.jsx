import styles from './CharactersList.module.scss'

export default function CharactersList({ people }) {
    return (
        <>
            <ul className={styles.list__container}>
                {people.map((el) => (
                    <li className={styles.list__item} key={el.url}>
                        <a href="#">
                            <p>{el.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}
