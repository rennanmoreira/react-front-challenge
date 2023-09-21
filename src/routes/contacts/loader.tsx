import { getContact } from '../../services/contacts'

export async function loader({ params }) {
  const contact = await getContact(params.contactId)
  return { contact }
}
