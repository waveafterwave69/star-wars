import CharactersList from '../CharactersList/CharactersList'
import styles from './Characters.module.scss'

import { useEffect, useState } from 'react'
import { getApiResource, SWAPI_ROOT_PEOPLE } from '../../api/api'

import { withErrorApi } from '../../hoc-helpers/withErrorApi'

function Characters({ setErrorApi }) {
    const [people, setPeople] = useState(null)

    let firstPeople = 0
    let lastPeople = 10

    const getResource = async (url) => {
        const res = await getApiResource(url, firstPeople, lastPeople)

        if (res) {
            const peopleList = res.map(({ name, url }) => {
                return {
                    name,
                    url,
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResource(SWAPI_ROOT_PEOPLE)
    }, [])

    function nextPage() {
        firstPeople += 10
        lastPeople += 10
    }

    return (
        <>
            {/* <button onClick={nextPage}>next</button> */}
            <h1>Navigation</h1>
            {people && <CharactersList people={people} />}
        </>
    )
}

export default withErrorApi(Characters)
