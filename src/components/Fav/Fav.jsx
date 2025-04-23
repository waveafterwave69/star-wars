import { useEffect, useState } from 'react'
import styles from './Fav.module.scss'
import { useSelector } from 'react-redux'

import CharactersList from '../CharactersList/CharactersList'

export default function Fav() {
    const [people, setPeople] = useState([])

    const storeData = useSelector((state) => state.favReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map((item) => {
                return {
                    url: item[0],
                    ...item[1],
                }
            })

            setPeople(res)
        }
    }, [])

    return (
        <>
            <div className="main__container">
                {people.length ? (
                    <CharactersList people={people} />
                ) : (
                    <h2
                        style={{
                            textAlign: 'center',
                            marginTop: '50px',
                            fontSize: '72px',
                            fontWeight: '800',
                        }}
                    >
                        No Data
                    </h2>
                )}
            </div>
        </>
    )
}
