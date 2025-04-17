import { useEffect, useState } from 'react'
import styles from './PeopleNavigation.module.scss'
import { getApiResource, SWAPI_ROOT_PEOPLE } from '../../api/api'
import UIButton from '../UI/UIButton/UIButton'

let firstPeople = 0
let lastPeople = 12
let resLenght

export default function PeopleNavigation({ setPeople }) {
    const [prevDisabled, setPrevDisabled] = useState(true)
    const [nextDisabled, setnextDisabled] = useState(false)

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
        }
    }

    function nextPage() {
        if (lastPeople < resLenght) {
            firstPeople += 12
            lastPeople += 12

            setnextDisabled(false)
            setPrevDisabled(false)

            getResource(SWAPI_ROOT_PEOPLE, firstPeople, lastPeople)
        }

        if (lastPeople >= resLenght) {
            setnextDisabled(true)
        }
    }

    function prevPage() {
        if (firstPeople > 0) {
            firstPeople -= 12
            lastPeople -= 12
            setPrevDisabled(false)
            setnextDisabled(false)

            getResource(SWAPI_ROOT_PEOPLE, firstPeople, lastPeople)
        }

        if (firstPeople == 0) {
            setPrevDisabled(true)
        }
    }

    useEffect(() => {
        firstPeople = 0
        lastPeople = 12
        getResource(SWAPI_ROOT_PEOPLE, firstPeople, lastPeople)
    }, [])

    return (
        <>
            <div className={styles.buttons}>
                <UIButton
                    text="prev"
                    onClick={prevPage}
                    disabled={prevDisabled && true}
                />
                <UIButton
                    text="next"
                    onClick={nextPage}
                    disabled={nextDisabled && true}
                />
            </div>
        </>
    )
}
