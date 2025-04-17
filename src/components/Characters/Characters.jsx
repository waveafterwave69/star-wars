import CharactersList from '../CharactersList/CharactersList'
import styles from './Characters.module.scss'

import { useEffect, useState } from 'react'
import { getApiResource, SWAPI_ROOT_PEOPLE } from '../../api/api'

import { withErrorApi } from '../../hoc-helpers/withErrorApi'
import PeopleNavigation from '../PeopleNavigation/PeopleNavigation'

let firstPeople = 0
let lastPeople = 12
let resLenght

function Characters({ setErrorApi }) {
    const [people, setPeople] = useState(null)

    const getResource = async (url) => {
        let res = await getApiResource(url)

        resLenght = res.length

        const resPersons = res.slice(firstPeople, lastPeople)

        if (resPersons) {
            const peopleList = resPersons.map(({ name, url }) => {
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
        firstPeople = 0
        lastPeople = 12
        getResource(SWAPI_ROOT_PEOPLE, firstPeople, lastPeople)
    }, [])

    return (
        <>
            <PeopleNavigation setPeople={setPeople} getResource={getResource} />

            {people && <CharactersList people={people} />}
        </>
    )
}

export default withErrorApi(Characters)
