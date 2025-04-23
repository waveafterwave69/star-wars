import styles from './FavoriteIcon.module.scss'
import { useSelector } from 'react-redux'
import bookMarkImg from '../../img/book-mark.png'
import { useEffect, useState } from 'react'

export default function FavoriteIcon() {
    const [count, setCount] = useState()

    const storeData = useSelector((state) => state.favReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length

        length.toString().length > 2 ? setCount('...') : setCount(length)
    })

    return (
        <>
            <div className={styles.container__counter}>
                {count != 0 && <span className={styles.counter}>{count}</span>}

                <img
                    src={bookMarkImg}
                    style={{ width: '50px' }}
                    alt="favorite"
                />
            </div>
        </>
    )
}
