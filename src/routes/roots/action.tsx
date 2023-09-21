import { redirect } from 'react-router-dom'
import { createContact } from '../../services/contacts'

export async function action() {
  const contact = await createContact()

  return redirect(`/contacts/${contact.id}/edit`)
}
