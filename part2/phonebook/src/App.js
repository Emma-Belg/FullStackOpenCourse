import { useState, useEffect } from 'react'

import './index.css'

import DisplayPeople from './components/DisplayPeople'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import people from './services/people'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [showFiltered, setShowFiltered] = useState('')
  const [notification, setNotification] = useState('')
  const [notificationClass, setNotificationClass] = useState("displayNone")

  function findByMatchingProperties(objectToSearch, keyValueToMatch) {
    return objectToSearch.filter(function (objectEntry) {
      return Object.keys(keyValueToMatch).every(function (key) {
        const string = "stringy"
        if (typeof objectEntry[key] === typeof string) {
          if (objectEntry[key].toLowerCase()
            .includes(keyValueToMatch[key].toLowerCase()))
            {return true;}
        }
        if (objectEntry[key] === (keyValueToMatch[key])) 
          {return true;}
        else {
          return null
        }
      });
    });
  }
  
  const getNameById = (id) => {
    let name = ""
    let found = findByMatchingProperties(persons, { id: id })
    if (found[0] !== undefined) {
      name = found[0].name
    }
    return name
  }

  useEffect(() => {
    people
      .getAll()
      .then(initialPeople => {
        return setPersons(initialPeople)
      })
  }, [])


  useEffect(() => {
    people
      .getAll()
      .then(initialPeople => {
        return setPersons(initialPeople)
      })
  }, [])

  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const namesArray = []
    //need to getAll people first to ensure that no double/same name can be added from a different browser (that has not been refreshed)
    const getPeople = people.getAll()
    getPeople.then(responsePersons => {
      setPersons(responsePersons)
      responsePersons.map(person => namesArray.push(person.name))
      
      if (namesArray.includes(`${newName}`)) {
        //creating findName function to use for .findIndex operator below
        const findName = (name) => name === newName
        let name = getNameById(responsePersons[namesArray.findIndex(findName)].id);
  
        if (window.confirm(`"${newName}" has already been added to the phonebook. 
        Would you like to update their number?`)) {
          people
            .update(responsePersons[namesArray.findIndex(findName)].id, personObject)
            .then(response => {
              responsePersons.splice(namesArray.findIndex(findName), 1, response)
              setPersons(responsePersons)
              setNotificationClass('success')
              setNotification(`"${response.name}'s" number was successfully updated`)
              setTimeout(() => {
                setNotification(null)
                setNotificationClass("displayNone")
              }, 5000)
            })
            .catch(error => {
              setNotificationClass('error')
              setNotification(`'${name}' was already removed from the server`)
              setTimeout(() => {
                setNotification(null)
                setNotificationClass("displayNone")
              }, 5000)
              console.error('there was an error', error)
            })
  
          people
            .getAll()
            .then(response => setPersons(response))
        };
        return persons
      }
      else {
        people
          .create(personObject)
          .then(response => {
            setPersons(responsePersons.concat(response))
            setNotificationClass('success')
            setNotification(`'${response.name}' was successfully added`)
            setTimeout(() => {
              setNotification(null)
              setNotificationClass("displayNone")
            }, 5000)
          })
          .catch(error => {
            setNotificationClass('error')
            setNotification(`'${newName}' could not be added`)
            setTimeout(() => {
              setNotification(null)
              setNotificationClass("displayNone")
            }, 5000)
            console.error('there was an error', error)
          })
          console.log("elsePersons", persons)
        return persons
      }
    })
  }
  
  const deletePpl = (id) => {
    let name = getNameById(id);

    people
      .deletePerson(id)
      .then(() => {
        setNotificationClass('success')
        setNotification(
          `'${name}' was successfully deleted`
        )
        setTimeout(() => {
          setNotification(null)
          setNotificationClass("displayNone")
        }, 5000)
      })
      .catch(error => {
        setNotificationClass('error')
        setNotification(
          `'${name}' was already removed from the server`
        )
        setTimeout(() => {
          setNotification(null)
          setNotificationClass("displayNone")
        }, 5000)
        console.error('there was an error', error)
      })

    people
      .getAll()
      .then(response => {
        console.log("response", response)
        setPersons(response)
      })
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
      <Notification
        message={notification}
        className={notificationClass} />

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