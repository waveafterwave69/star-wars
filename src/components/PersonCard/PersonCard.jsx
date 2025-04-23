import { useParams } from 'react-router'
import styles from './PersonCard.module.scss'
import { SWAPI_ROOT_PEOPLE } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UIloading from '../UI/UIloading/UIloading'
import { getApiResource } from '../../api/api'
import React, { Suspense, useEffect, useState } from 'react'
import { withErrorApi } from '../../hoc-helpers/withErrorApi'
import PersonInfo from '../PersonInfo/PersonInfo'
import FavButton from '../FavButton/FavButton'

const PersonFilms = React.lazy(() => import('../PersonFilms/PersonFilms'))

function PersonCard({ setErrorApi }) {
    const { url } = useParams()
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [personFav, setPersonFav] = useState(false)

    const storeData = useSelector((state) => state.favReducer)

    useEffect(() => {
        const getId = async () => {
            const res = await getApiResource(`${SWAPI_ROOT_PEOPLE}/${url}`)

            const id = Number(
                res.url.length > 31
                    ? res.url.slice(res.url.length - 2, res.url.length)
                    : res.url.slice(res.url.length - 1, res.url.length)
            )

            storeData[id] ? setPersonFav(true) : setPersonFav(false)

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
                setPersonId(
                    Number(
                        res.url.length > 31
                            ? res.url.slice(res.url.length - 2, res.url.length)
                            : res.url.slice(res.url.length - 1, res.url.length)
                    )
                )

                if (res.films) {
                    setPersonFilms(res.films)
                }

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        }

        getId()
    }, [])

    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate(-1)} className={styles.button}>
                Back
            </button>
            <div className={styles.wrapper}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 className={styles.person__name}>{personName}</h2>
                    <FavButton
                        personFav={personFav}
                        setPersonFav={setPersonFav}
                        personName={personName}
                        personId={personId}
                    />
                </div>

                <div className={styles.person__container}>
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && (
                        <Suspense
                            fallback={
                                <UIloading theme="base" isShadow={true} />
                            }
                        >
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

export default withErrorApi(PersonCard)
