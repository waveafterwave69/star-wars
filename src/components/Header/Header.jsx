import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="main__container">
                <header className={styles.header}>
                    <ul className={styles.list__container}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.list__link} ${styles.active}`
                                        : `${styles.list__link}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/people"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.list__link} ${styles.active}`
                                        : `${styles.list__link}`
                                }
                            >
                                People
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/notfound"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.list__link} ${styles.active}`
                                        : `${styles.list__link}`
                                }
                            >
                                Not Found
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}
