import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
import sortBy from 'sort-by'

let fakeCache = {}

async function fakeNetwork(key: string = '') {
  if (!key) {
    fakeCache = {}
  }

  if (fakeCache[key]) {
    return
  }

  fakeCache[key] = true
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800)
  })
}

export async function getContacts(query: any = '') {
  await fakeNetwork(`getContacts:${query}`)
  let contacts: any = await localforage.getItem('contacts')
  if (!contacts) contacts = []
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] })
  }
  return contacts.sort(sortBy('last', 'createdAt'))
}

function set(contacts) {
  return localforage.setItem('contacts', contacts)
}

export async function createContact() {
  await fakeNetwork()
  const id = Math.random().toString(36).substring(2, 9)
  const contact = { id, createdAt: Date.now() }
  const contacts = await getContacts()
  contacts.unshift(contact)
  await set(contacts)
  return contact
}

export async function getContact(id) {
  await fakeNetwork(`contact:${id}`)
  const contacts: any = await localforage.getItem('contacts')
  const contact = contacts.find((contact) => contact.id === id)
  return contact ?? null
}

export async function updateContact(id, updates) {
  await fakeNetwork()
  const contacts: any = await localforage.getItem('contacts')
  const contact = contacts.find((contact) => contact.id === id)
  if (!contact) throw new Error(`No contact found for${id}`)
  Object.assign(contact, updates)
  await set(contacts)
  return contact
}

export async function deleteContact(id) {
  const contacts: any = await localforage.getItem('contacts')
  const index = contacts.findIndex((contact) => contact.id === id)
  if (index > -1) {
    contacts.splice(index, 1)
    await set(contacts)
    return true
  }
  return false
}
