import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {routes} from './routes'

export const CRMApplicationRouter = () => (
    <RouterProvider router={createBrowserRouter(routes)}/>
)