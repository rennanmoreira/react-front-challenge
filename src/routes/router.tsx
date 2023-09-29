import { createBrowserRouter } from 'react-router-dom'
import { action as rootAction } from './app/action'
import { loader as rootLoader } from './app/loader'
import App from '../pages/App'
import Home from '../pages/Home'
import ErrorPage from './errorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
