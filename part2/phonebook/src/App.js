import { useState } from 'react'

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
        setPersons(persons);
        alert(`"${newName}" has already been added to the phonebook`)
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

  // const findMatch = (searchArray, searchString) => searchArray.filter(element => {
  //   if (element.toLowerCase().includes(searchString.toLowerCase()))
  //     return true;
  // })

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
    console.log(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handSearchChange = (event) => {
    setSearch(event.target.value)
    setShowFiltered(findByMatchingProperties(persons, { name: event.target.value}))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with: <input
          value={newSearch}
          onChange={handSearchChange} />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number: <input
          value={newNumber}
          onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          newSearch === '' ?
            <ul>
              {persons.map((person) => {
                return (<li key={person.name}>{person.name}: {person.number}</li>)
              })}
            </ul>
            :
            <ul>
              {showFiltered.map((person) => {
                return (<li key={person.name}>{person.name}: {person.number}</li>)
              })}
            </ul>
        }
      </div>
    </div>
  )
}

export default App