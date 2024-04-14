import { Person } from '../../components/person/types'
import { PersonState, initialPersonState } from './types'
import { create } from 'zustand'

const usePersonStore = create<PersonState>(() => ({
  ...initialPersonState
}))

export const setPersons = (personDetails: Person[]) => usePersonStore.setState({ persons: personDetails })

export default usePersonStore
