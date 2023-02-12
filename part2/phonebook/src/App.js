import axios from 'axios'
import { useState, useEffect } from 'react'

import DisplayPeople from './components/DisplayPeople'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import people from './services/people'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [showFiltered, setShowFiltered] = useState('')

  useEffect(() => {
    people
      .getAll()
      .then(initialPeople => {
        return setPersons(initialPeople)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const namesArray = []
    persons.map(person => {
      namesArray.push(person.name)
    })
    if (namesArray.includes(`${newName}`)) {
      alert(`"${newName}" has already been added to the phonebook`);
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      people
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
        })
    }
  }

  const deletePpl = (id) => {
    people
      .deletePerson(id)

    people
      .getAll()
      .then(response => setPersons(response))
  }

  function findByMatchingProperties(objectToSearch, keyValueToMatch) {
    return objectToSearch.filter(function (objectEntry) {
      return Object.keys(keyValueToMatch).every(function (key) {
        if (objectEntry[key].toLowerCase().includes(keyValueToMatch[key].toLowerCase()))
          return true;
      });
    });
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setShowFiltered(findByMatchingProperties(persons, { name: event.target.value }))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Search
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}
      />

      <h2>Add New</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <DisplayPeople
        newSearch={newSearch}
        people={persons}
        showFiltered={showFiltered}
        deletePerson={deletePpl}
      />
    </div>
  )
}

export default App