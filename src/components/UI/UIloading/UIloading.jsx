import styles from './UIloading.module.scss'

import loader from '../../../static/loader.svg'
import loaderRed from '../../../static/loader-red.svg'
import loaderBlue from '../../../static/loader-blue.svg'
import { useEffect, useState } from 'react'

export default function UIloading({ theme, isShadow = true, classes }) {
    const [loaderIcon, setLoaderIcon] = useState(null)

    useEffect(() => {
        switch (theme) {
            case 'red':
                setLoaderIcon(loaderRed)
                break
            case 'blue':
                setLoaderIcon(loaderBlue)
                break
            case 'base':
                setLoaderIcon(loader)
                break
            default:
                setLoaderIcon(loader)
        }
    }, [])

    return (
        <>
            <div>
                <img
                    src={loaderIcon}
                    alt="loader"
                    className={`${styles.loader} ${
                        isShadow && styles.shadow
                    }  ${classes}`}
                />
            </div>
        </>
    )
}
