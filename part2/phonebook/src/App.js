import { useState } from 'react'
import DisplayPeople from './components/DisplayPeople'
import PersonForm from './components/PersonForm'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: 990
    },
    {
      name: 'Amy Lala',
      number: 889
    },
    {
      name: 'Rand tom',
      number: 889
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [showFiltered, setShowFiltered] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    persons.map((person) => {
      if (newName === person.name) {
        const existingPersons = [...persons]
        alert(`"${newName}" has already been added to the phonebook`);
        setPersons(existingPersons);
      }
      else {
        const personObject = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(personObject));
      }
    })
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
        newSearch={newSearch} people={persons} showFiltered={showFiltered}
      />
    </div>
  )
}

export default App