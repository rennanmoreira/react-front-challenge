import { createBrowserRouter } from 'react-router-dom'
import { action as rootAction } from './routes/app/action'
import { loader as rootLoader } from './routes/app/loader'
import { action as editAction } from './routes/contacts/action'
import { action as destroyAction } from './routes/contacts/destroy'
import { loader as contactLoader } from './routes/contacts/loader'
import App from './pages/App'
import Home from './pages/Home'
import Contact from './routes/contact'
import ErrorPage from './routes/errorPage'
import EditContact from './routes/contacts/edit'

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
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
])
