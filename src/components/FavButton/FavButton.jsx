import styles from './FavButton.module.scss'
import { useDispatch } from 'react-redux'
import { removePersonToFav, setPersonToFav } from '../../store/actions'

import favImg from '../../img/favorite.png'
import favBlackImg from '../../img/favorite-black.png'

export default function FavButton({
    personName,
    personId,
    personFav,
    setPersonFav,
}) {
    const dispatch = useDispatch()

    const dispatchFavPeople = () => {
        if (personFav) {
            dispatch(removePersonToFav(personId)), setPersonFav(false)
        } else {
            dispatch(
                setPersonToFav({
                    [personId]: {
                        name: personName,
                    },
                })
            ),
                setPersonFav(true)
        }
    }

    return (
        <>
            <button onClick={dispatchFavPeople}>
                <img
                    style={{ width: '90px' }}
                    src={personFav ? favImg : favBlackImg}
                    alt="add to favorite"
                />
            </button>
        </>
    )
}
