import routesConfig from '../../Routes/routesConfig'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="main__container">
                <header className={styles.header}>
                    <ul className={styles.list__container}>
                        <div className={styles.list__container2}>
                            {routesConfig
                                .filter((el) => el.name)
                                .map((el) => (
                                    <li key={el.path}>
                                        <NavLink
                                            to={el.path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.list__link} ${styles.active}`
                                                    : `${styles.list__link}`
                                            }
                                        >
                                            {el.name}
                                        </NavLink>
                                    </li>
                                ))}
                        </div>

                        <li>
                            <NavLink to="/fav">
                                <FavoriteIcon />
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}
