import { redirect } from 'react-router-dom'

export async function action() {
  const contact = { id: 1, name: 'teste' }

  return redirect(`/contacts/${contact.id}/edit`)
}
