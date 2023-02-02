import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    persons.map((person) => {
      if (newName === person.name) {
        setPersons(persons);
        alert(`"${newName}" has already been added to the phonebook`)
      }
      else {
        const personObject = { name: newName }
        setPersons(persons.concat(personObject));
      }
    }
    )

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (<li key={person.name}>{person.name}</li>)
        })}
      </ul>
    </div>
  )
}

export default App