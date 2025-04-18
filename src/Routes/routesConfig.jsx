import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PeoplePage from '../pages/PeoplePage'
import PersonPage from '../pages/PersonPage'

const routesConfig = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/people',
        element: <PeoplePage />,
    },
    {
        path: '/people/:url',
        element: <PersonPage />,
    },
    {
        path: '/notfound',
        element: <NotFoundPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]

export default routesConfig
