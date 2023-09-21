import { createBrowserRouter } from 'react-router-dom'
import { action as rootAction } from './routes/roots/action'
import { loader as rootLoader } from './routes/roots/loader'
import { action as editAction } from './routes/contacts/action'
import { action as destroyAction } from './routes/contacts/destroy'
import { loader as contactLoader } from './routes/contacts/loader'
import Root from './routes/root'
import Contact from './routes/contact'
import ErrorPage from './routes/errorPage'
import EditContact from './routes/contacts/edit'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <p id="zero-state">Bem vindo ao Teste React Router.</p>,
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
