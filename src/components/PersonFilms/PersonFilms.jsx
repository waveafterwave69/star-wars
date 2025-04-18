import { useEffect, useState } from 'react'
import { filmsApi } from '../../api/api'
import styles from './PersonFilms.module.scss'

export default function PersonFilms({ personFilms }) {
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const response = await filmsApi(personFilms)

            const filmsArr = []

            response.map(({ data }) => {
                filmsArr.push(data)
            })

            setFilmsName(filmsArr)
        }

        getFilms()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {filmsName
                        .sort((a, b) => a.episode_id - b.episode_id)
                        .map(({ title, episode_id }) => (
                            <li key={episode_id} className={styles.list__item}>
                                <span className={styles.item__episode}>
                                    Episode {episode_id}
                                </span>
                                <span className={styles.item__colon}>: </span>
                                <span className={styles.item__title}>
                                    {title}
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}
