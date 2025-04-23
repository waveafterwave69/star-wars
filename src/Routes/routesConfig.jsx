import FavPage from '../pages/FavPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PeoplePage from '../pages/PeoplePage'
import PersonPage from '../pages/PersonPage'

const routesConfig = [
    {
        path: '/',
        element: <HomePage />,
        name: 'Home',
    },
    {
        path: '/people',
        element: <PeoplePage />,
        name: 'People',
    },
    {
        path: '/people/:url',
        element: <PersonPage />,
    },
    {
        path: '/notfound',
        element: <NotFoundPage />,
        name: 'Not Found',
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
    {
        path: '/fav',
        element: <FavPage />,
    },
]

export default routesConfig
