import styles from './CharactersList.module.scss'
import { Link } from 'react-router-dom'

export default function CharactersList({ people }) {
    return (
        <>
            <ul className={styles.list__container}>
                {people.map((el) => (
                    <li className={styles.list__item} key={el.url}>
                        <Link
                            to={`/people/${
                                el.url.length > 31
                                    ? el.url.slice(
                                          el.url.length - 2,
                                          el.url.length
                                      )
                                    : el.url.slice(
                                          el.url.length - 1,
                                          el.url.length
                                      )
                            }`}
                        >
                            <p>{el.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
