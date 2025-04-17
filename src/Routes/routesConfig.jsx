import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PeoplePage from '../pages/PeoplePage'

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
        path: '/notfound',
        element: <NotFoundPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]

export default routesConfig
