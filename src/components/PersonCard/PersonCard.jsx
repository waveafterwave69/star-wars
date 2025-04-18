import { useParams } from 'react-router'
import styles from './PersonCard.module.scss'
import { SWAPI_ROOT_PEOPLE } from '../../api/api'

import { getApiResource } from '../../api/api'
import { useEffect, useState } from 'react'
import { withErrorApi } from '../../hoc-helpers/withErrorApi'
import PersonInfo from '../PersonInfo/PersonInfo'

function PersonCard({ setErrorApi }) {
    const { url } = useParams()
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)

    useEffect(() => {
        const getId = async () => {
            const res = await getApiResource(`${SWAPI_ROOT_PEOPLE}/${url}`)

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ])

                setPersonName(res.name)

                // res.films

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        }

        getId()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.person__name}>{personName}</h2>

                <div className={styles.person__container}>
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                </div>
            </div>
        </>
    )
}

export default withErrorApi(PersonCard)
