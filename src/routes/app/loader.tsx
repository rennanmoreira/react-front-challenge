import { getContacts } from '../../services/contacts'

export async function loader() {
  const contacts = await getContacts()
  return { contacts }
}
