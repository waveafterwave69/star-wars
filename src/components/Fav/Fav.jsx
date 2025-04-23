import styles from './Fav.module.scss'
import { useSelector } from 'react-redux'

export default function Fav() {
    const storeData = useSelector((state) => state.favReducer)

    console.log(storeData)

    return (
        <>
            <h1>Fav Page</h1>
            {/* <p>{storeData}</p> */}
        </>
    )
}
